(function(w,d,$){

	var lineupwWidget = {
		params:{
			defaultHeight:2000,
			festivalName:'',
			eventId:'',
			useProxy:0,
			useRelease:0,
			css:'',
			showTBAStage:0,
			openCurrentSchedule:0
		},

		/*
			METHOD ORDER OF OPERATIONS
			1.  init
			2.  fetchParams
			3.  setEmdedStyles
			4.  preloader (disco ball)
			5.  lazyLoad (used within initglobalEvents)
			6.  ajax
				 A. processJSON
					a. prepWhenTab
					b. prepWhereTab
					c. prepArtistTab
					d. _sortByKey
			7.  makeIndexedObjects
			8.  handlebarInit
			9.  initTabs
			10. buildTab
				 A. _renderArtists
				 B. _renderWhenWhere
			11. resizeIframe
		 */

		init : function() {
			var self = this;
			self.fetchParams();
			if( self.params.festivalName !== '' && self.params.eventId !== '' ){
				self.setEmbedStyles( self.params );
				self.preloader();
				self.lazyLoad();
				self.ajax();
				self.initGlobalEvents();
			}
		},
		fetchParams: function(){
			this.params = $.extend( true, this.params, w.lineupSettings||{} );
		},
		setEmbedStyles: function( embedSettings ) {
			var self = this;
			var customStyles =
			".tab-container {background-color: "+embedSettings.bodyBGColor+"}"+
			".artists .artistSlot .artistInfo p.artist-title, .customArtistButtonTextRoot, .customArtistButtonText, .widgetMessage {color: "+embedSettings.artistCopyColor+"}"+
			"#nested-tab-1 .artists .artistSlot .artistInfo p:last-child, .dl-submenu .artistTime, .artists li a div p span.artistTime {color: "+embedSettings.artistCTAColor+"}"+
			".customArtistButtonText a, .customArtistButtonTextRoot, ul.days li.active i, .places a:hover, .places li.active a, .customArtistButtonTextRoot, .dl-submenu li.dl-back > a, .ribbon span{background-color: "+embedSettings.artistCTABGColor+"}"+
			".artist-row-separator {background-color:"+embedSettings.artistModuleBorderColor+";}";
			if( embedSettings.css !== '' ){
				customStyles += embedSettings.css;
			}
			$( [ "<style id='embedCodeStyles' type='text/css'>", customStyles, "</style>" ].join( '' ) ).appendTo('head');
		},

		// ## Preloader and Error Screens
		preloader: function() {
			var self = this,
				body = $('body');
				overlay = "<div id='overlay'><div class='forceaspectratio'></div><div class='img-container'><img src='http://tsm-festival-lineup-widget.s3.amazonaws.com/img/Preloader.gif' /></div><div id='progress'></div></div>";
				$(overlay).appendTo(body);
		},
		buildErrorScreen: function() {
			var self = this,
				body = $('body'),
				errorView ="<div id='overlay'><div class='forceaspectratio'></div><div class='errormsg'><p>we're sorry, there is some sort of error.</p><p>we're working to fix the issue, please try again later.</p></div><div class='img-container'><img src='http://tsm-festival-lineup-widget.s3.amazonaws.com/img/Preloader.gif' /></div></div>";
				$(errorView).appendTo(body);
		},

		// ## Processing and Sorting JSON
		// ### descr: manual ajax fn. set proxy url, endpoint, endpoint for release
		ajax : function() {
			var self = this,
				proxyurl = 'http://wac.450f.edgecastcdn.net/80450F/townsquaredigital.com/lineup-widget/lineupproxy.php',
				endpoint = [ 'http://tsmfestivalapps.com/festivals/', self.params.festivalName, '/event/', self.params.eventId, '/data' ].join( '' ),
				endpointRelease = ['http://release12.tsmfestivalapps.com/festivals/', self.params.festivalName, '/event/', self.params.eventId, '/data' ].join( '' ),
				scr = document.createElement( 'script' );

			if( self.params.useRelease ){
				endpoint = endpointRelease;
			}
			if( self.params.useProxy ){
				var cacheBusterTime = parseInt( new Date().getTime()/900000, 10 ) * 1000; //updates only every 15 minutes. example: 15mins = 15*60*1000ms = 900000ms
				endpoint = [ proxyurl, '?v=', cacheBusterTime, '&callback=lineupCallback&url=', endpoint ].join( '' );
			} else {
				endpoint += '?callback=lineupCallback';
			}
			var _isEmptyObj = function(obj) {
				for (var key in obj) {
					if (obj.hasOwnProperty(key)) {
						return false;
					}
					return true && JSON.stringify(obj) === JSON.stringify({});
				}
			}
			scr.id = "eventJSON";
			scr.src = endpoint;

			document.head.appendChild( scr );

				window.lineupCallback = function(json) {
					if ( !navigator.onLine || _isEmptyObj(json) ) {
						self.buildErrorScreen();
					}

					self.processJSON( json );
				}
		},
		processJSON : function( json ){
			var self = this,
				artists = json.artists.data,
				venues = json.venues,
				shows = json.shows,
				iframeContainer = $( window.top.document.querySelector( '#lineupwidget-iframe' ) ),
				iframeWrapper = $( window.top.document.querySelector( '#lineupwidget-iframe' ) );

			self.compositeJson = self.makeIndexedObjects( json );
			iframeContainer.css({height:self.params.defaultHeight + 'px'});

			// change yyyy-mm-dd to string month day
			var _convertDateFinal = function(shows, showsIndex) {
				var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
					months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
					startDateStr,
					startDateObj,
					formattedStartDay,
					formattedStartMonth;

				Date.prototype.getDayName = function() {
					return days[ this.getDay() ];
				};
				Date.prototype.getMonthName = function() {
					return months[ this.getMonth() ];
				};

				if ( showsIndex === undefined ) {
					var formattedDayofMonth,
						slen = shows.length,
						dateconvertedComposite = {},
						compositeDays = [],
						compositeDateArr = [],
						compositeShowtimeDates = [],
						compositeHBWhen = {};

					for ( var i = 0; i < slen; i++ ) {
						compositeShowtimeDates.push(shows[i]);
						startDateStr = shows[i];
						startDateStr = startDateStr.replace(/\-/g,'/');
						startDateObj = new Date( startDateStr);
						formattedStartDay = startDateObj.getDayName();
						formattedDayofMonth = startDateObj.getDate();
						compositeDays.push(formattedStartDay);
						compositeDateArr.push(formattedDayofMonth);

						if (i < 1) {
							formattedStartMonth = startDateObj.getMonthName();
							dateconvertedComposite.month = formattedStartMonth;
						}

						compositeHBWhen[shows[i]] = {};
						compositeHBWhen[shows[i]].day = formattedStartDay;
						compositeHBWhen[shows[i]].dayOfMonth = formattedDayofMonth;
						compositeHBWhen[shows[i]].showTimeDate = shows[i];
						compositeHBWhen[shows[i]].shows = [];

					}
					dateconvertedComposite.days = compositeDays;
					dateconvertedComposite.daysOfMonth = compositeDateArr;
					dateconvertedComposite.showtimeDates = compositeShowtimeDates;
					dateconvertedComposite.compositeHBWhen = compositeHBWhen;

					return dateconvertedComposite;
				} else {
					var endDateObj,
						startDateDayOnly,
						formattedEndDay;

					startDateStr = shows[showsIndex].originalDateStart;
					startDateStr = startDateStr.replace(/\-/g,'/');
					startDateObj = new Date(startDateStr);
					endDateObj = new Date( shows[showsIndex].dateEnd.replace( /\-/g, '/' ) );
					formattedStartDay = startDateObj.getDayName();
					formattedStartMonth = startDateObj.getMonthName();
					startDateDayOnly = startDateObj.getDate();
					formattedEndDay = endDateObj.getDayName();

					shows[showsIndex].formattedStartDay = formattedStartDay;
					shows[showsIndex].formattedEndDay = formattedEndDay;
					shows[showsIndex].originalFormattedStartDay = shows[showsIndex].formattedStartDay;
					shows[showsIndex].formattedStartMonth = formattedStartMonth;
					shows[showsIndex].startDateDayOnly = startDateDayOnly;
				}
			}

			var _sortByKey = function (array, key1, key2) {
				var featureSorted = {};
				return array.sort(function(a, b){
					var x = a[key1],
						y = b[key1],
						key2optional;
					if ( typeof key2 !== 'undefined' ) {
						var x2 = a[key2],
							y2 = b[key2],
							key2optional = true;
					}
					if ( x < y ) {
						return -1;
					}
					else if ( x > y ) {
						return 1;
					}
					if ( x2 < y2 ) {
						return -1;
					}
					else if ( x2 > y2 ) {
						return 1;
					}
					else if ( a.sortOrder > b.sortOrder ) {
						return 1;
					}
					else if ( a.sortOrder < b.sortOrder ) {
						return -1;
					}
					else if ( a.title > b.title ) {
						return 1;
					}
					else if ( a.title < b.title ) {
						return -1;
					}
					else {
						return 0;
					}
				});
			}

			// build Artist Module
			var _prepArtistModule = function(artists, aIndex) {
				var headlinerClasses = {
					li: 'headline',
					a: 'headliner',
					img: 'featured'
				},
				nonheadlinerClasses = {
					li: 'mediaObj',
					a: 'mediaObj',
					img: 'media'
				};

				artists[aIndex].sanitizedName = artists[aIndex].title.replace(/\s+/g, '-').replace(/[^a-zA-Z-]/g, '').toLowerCase();
				artists[aIndex].sanitizedName = artists[aIndex].sanitizedName.replace( /-+/g, '-' );
				artists[aIndex].flyin.sanitizedName = artists[aIndex].sanitizedName;

				/* associate correct classes to artist object if featured */
				if ( artists[aIndex].featuredArtist && artists[aIndex].featuredArtist == 1 ) {
					artists[aIndex].artistObjLi = headlinerClasses.li;
					artists[aIndex].artistObjA = headlinerClasses.a;
					artists[aIndex].artistObjImg = headlinerClasses.img;
					artists[aIndex].headliner = 1;
				} else {
					artists[aIndex].mediaObj = 1;
					artists[aIndex].artistObjLi = nonheadlinerClasses.li;
					artists[aIndex].artistObjA = nonheadlinerClasses.a;
					artists[aIndex].artistObjImg = nonheadlinerClasses.img;
				}
				return artists;
			};
			// build Artist Tab
			var prepArtistTab = function(venues, shows, artists) {
				var artistsWithShows = self.compositeJson.artistsWithShows.data,
					vlen = venues.length;
				var date_sort_asc = function (a, b) {
					var d1 = new Date( a.originalDateStart + " " + a.timeStart ),
						t1 = d1.getTime(),
						d2 = new Date( b.originalDateStart + " " + b.timeStart ),
						t2 = d2.getTime();
					if( t1 > t2 ){
						return 1;
					}else if( t2 > t1 ){
						return -1;
					}
					return 0;
				};

				// associate shows name with show id
				if( !vlen ){
					for ( var j = 0, slen = shows.length; j < slen ; j++ ) {
						_convertDateFinal(shows, j);
					}
				}else{
					for ( var j = 0, slen = shows.length; j < slen ; j++ ) {	//rishi - this look to check missing venues if any and mark them TBA if missing.
						var foundVenue = 0;
						for ( var i = 0; i < vlen; i++) {
							if( shows[j].venueId === venues[i].id ){
								foundVenue++;
							}
						}
						if( !foundVenue ){
							shows[j].venueId = 'TBA';
						}
					}

					for ( var i = 0; i < vlen; i++) {
						for ( var j = 0, slen = shows.length; j < slen ; j++ ) {
							// add class flags
							_convertDateFinal(shows, j);
							if( shows[j].venueId === venues[i].id ){
								shows[j].venueId = venues[i].title;
							}
						}
					};
				}
				// place shows object within artist
				for ( var i = 0, alen = artists.length; i < alen; i++ ) {
					// convert sort order from string to number
					artists[i].sortOrder = Number(artists[i].sortOrder);
					_prepArtistModule( artists, i );
					var aShows = [];
					for (var j = 0, slen = shows.length; j < slen; j++) {
						if ( artists[i].id === shows[j].objectId ) {
							aShows.push(shows[j]);

							// add artistInfo and flyin key vals to shows
							shows[j].artistInfo = artists[i];
						}

					}
					artists[i].venues = aShows;
					if ( artists[i].venues && artists[i].venues.length > 1 ) {
						artists[i].venues.sort(date_sort_asc);

					}
					if( artists[i].venues ){
						var venueByName = {};
						for (var j = 0, avlen = artists[i].venues.length; j < avlen; j++) {


							// 6/30/2017 replacing in-render uppercase fn
							if (artists[i].venues[j].formattedTimeEnd !== null) {
								artists[i].venues[j].formattedTimeEnd = artists[i].venues[j].formattedTimeEnd.toUpperCase();
							}
							if (artists[i].venues[j].formattedTimeStart !== null) {
								artists[i].venues[j].formattedTimeStart = artists[i].venues[j].formattedTimeStart.toUpperCase();
							}


							if( !venueByName[ artists[i].venues[j].venueId ] ){
								venueByName[ artists[i].venues[j].venueId ] = [];
							}
							venueByName[ artists[i].venues[j].venueId ].push( j );
						}
						artists[i].venuesByName = venueByName;
					}
				}

				// show/hide tabs
				for ( var i = 0, alen = artists.length; i < alen; i++ ) {
					/* schedule */
					if ( artists[i].venues && artists[i].venues.length == 0 ) {
						artists[i].scheduleTab = 'hide';
						artists[i].flyin.scheduleTab = 'hide';
					}
					/* about */
					if ( artists[i].artistDetail.main.description == "" ) {
						artists[i].aboutTab = 'hide';
						artists[i].flyin.aboutTab = 'hide';
					}
					/* embedvideos */
					if ( !artists[i].hasOwnProperty('embedvideos') ) {
						artists[i].videoTab = 'hide';
						artists[i].flyin.videoTab = 'hide';
					}
					/* social */
					if ( (!artists[i].hasOwnProperty('facebook')) && (!artists[i].hasOwnProperty('twitter')) && (!artists[i].hasOwnProperty('web')) && (!artists[i].hasOwnProperty('youtube_channel')) && (!artists[i].hasOwnProperty('instagram'))) {
						artists[i].socialTab = 'hide';
						artists[i].flyin.socialTab = 'hide';
					}
					if ( artists[i].facebook == '' ) {
						artists[i].fbToggle = 'hide';
						artists[i].flyin.fbToggle = 'hide';
					}
					if ( artists[i].twitter == '' ) {
						artists[i].twToggle = 'hide';
						artists[i].flyin.twToggle = 'hide';
					}
					if ( artists[i].youtube_channel == '' ) {
						artists[i].ycToggle = 'hide';
						artists[i].flyin.ycToggle = 'hide';
					}
					if ( artists[i].instagram == '' ) {
						artists[i].inToggle = 'hide';
						artists[i].flyin.inToggle = 'hide';
					}
					if ( artists[i].web == '' ) {
						artists[i].wsToggle = 'hide';
						artists[i].flyin.wsToggle = 'hide';
					}
					artists[i].flyin.venues = artists[i].venues;
				}
				return artists;
			}

			// buildWhenTab
			var prepWhenTab = function( artists ) {
				var showsByDate = self.compositeJson.showsByDate,
					showtimes = []
					shlen = showtimes.length,
					showtimeComposite = {};


				for (var i in showsByDate) {
					_sortByKey( showsByDate[i], 'dateStart', 'timeStart');
					var k = 0,l = showsByDate[i].length;
					for( var j = 0 ; j<l ; j++ ){
						if( showsByDate[i][j].sortBottom ){
							showsByDate[i] = [].concat( showsByDate[i].slice(0,j), showsByDate[i].slice( j+1 ), showsByDate[i][j] );
							j--;
							l--;
						}
					}
				}
				for (var i in showsByDate) {
					showtimes.push(i);
				}
				showtimes.sort();

				var rootTemplate = _convertDateFinal(showtimes);
				showtimeComposite.rootTemplate = rootTemplate;
				showtimeComposite.showsByDate = showsByDate;

				for (var i in showtimeComposite.showsByDate ) {

					// builds individual shows array
					for (var j = 0, slen = showtimeComposite.showsByDate[i].length; j < slen; j++ ) {

						if ( (showtimeComposite.showsByDate[i][j].dateStart !== 'undefined') && ( showtimeComposite.showsByDate[i][j].dateStart === i ) ) {
							var nonrepeatArtistShow = showtimeComposite.showsByDate[i][j];
							showtimeComposite.rootTemplate.compositeHBWhen[i].shows.push(nonrepeatArtistShow);
						}

						for ( var k in self.compositeJson.artistsById ) {
							if (showtimeComposite.showsByDate[i][j].objectId == self.compositeJson.artistsById[k].id ) {
								showtimeComposite.showsByDate[i][j] = self.compositeJson.artistsById[k];
							}
						}
					}
				}

				// ahn - billing order edit - sort according to line up sort order
				if (self.compositeJson.sortMethod != 'default') {
					for (var i in showtimeComposite.showsByDate ) {
						showtimeComposite.showsByDate[i].sort(function( a, b ){
							if ( a.sortOrder > b.sortOrder ) {
								return 1;
							}
							else if ( a.sortOrder < b.sortOrder ) {
								return -1;
							}
						});

					}
				}


				return showtimeComposite;
			}
			// buildWhereTab
			var prepWhereTab = function(){

				if( !self.compositeJson.isVenue ){
					return {
						rootTemplate:[],
						showsByVenueName:[],
						sanitizedVenueNames: []
					};
				}
				var venueTab = {},
					venueTabNames = [],
					venueTabComposite = {},
					sanitized = [],
					toSanitize,
					venuesById = self.compositeJson.venuesById,
					showsById = self.compositeJson.showsById,
					showsByVenueId = self.compositeJson.showsByVenueId,
					l = self.compositeJson.sortedVenues.length,
					compositeHBWhere = {};

				for ( var key in venueTab ){
					venueTabNames.push(key);
				}
				venueTabNames.sort();

				venueTabComposite.rootTemplate = venueTabNames;
				venueTabComposite.rootTemplate = [];
				for( i = 0; i<l; i++ ){
					if( self.compositeJson.showsByVenueId[ self.compositeJson.sortedVenues[i].id ] ){
						venueTabComposite.rootTemplate.push( self.compositeJson.sortedVenues[i].title );

						compositeHBWhere[self.compositeJson.sortedVenues[i].title] = [];
						compositeHBWhere[self.compositeJson.sortedVenues[i].title].venueName = self.compositeJson.sortedVenues[i].title;
					}
				}

				// index variable for handlebars wheretab loop
				//var compositeHBWhereIndex = 0;
				for ( var i in showsByVenueId ) {
					_sortByKey( showsByVenueId[i], 'originalDateStart', 'timeStart');

					if( venuesById[ i ] ){

						venueTab[ venuesById[ i ].title ] = showsByVenueId[i];

						for ( var j in compositeHBWhere ) {
							if ( (j !== undefined) && ( j == venuesById[ i ].title ) ) {
								compositeHBWhere[j].shows = [];
								compositeHBWhere[j].venueId = i;
							}
						}

					}else{
						if( self.params.showTBAStage ){
							venueTab[ 'TBA' ] = showsByVenueId[ i ];
						}
					}

				}

				for (var i = 0, rlen = venueTabComposite.rootTemplate.length; i < rlen; i++) {
					toSanitize = venueTabComposite.rootTemplate[i].replace(/\s+/g, '-').replace(/[^a-zA-Z-]/g, '').toLowerCase();
					compositeHBWhere[self.compositeJson.sortedVenues[i].title].sanitizedName = toSanitize;
					sanitized.push(toSanitize);
				}

				for ( var i in showsById  ) {
					for ( var j in compositeHBWhere ) {

						if ( showsById[i].venueId == compositeHBWhere[j].venueId) {
							compositeHBWhere[j].shows.push(showsById[i]);
						}
					}
				}

				venueTabComposite.sanitizedVenueNames = sanitized;
				venueTabComposite.showsByVenueName = venueTab;
				venueTabComposite.compositeHBWhere = compositeHBWhere;
				for (var i in venueTabComposite.showsByVenueName ) {
					for (var j = 0, vlen = venueTabComposite.showsByVenueName[i].length; j < vlen; j++ ) {

						for ( var k in self.compositeJson.artistsById ) {

							if (venueTabComposite.showsByVenueName[i][j].objectId == self.compositeJson.artistsById[k].id ) {

								venueTabComposite.showsByVenueName[i][j] = self.compositeJson.artistsById[k];
							}
						}
					}
				}
				// ahn - billing order edit - sort according to line up sort order
				if (self.compositeJson.sortMethod != 'default') {
					for (var i in venueTabComposite.showsByVenueName ) {
						venueTabComposite.showsByVenueName[i].sort(function( a, b ){
							if ( a.sortOrder > b.sortOrder ) {
								return 1;
							}
							else if ( a.sortOrder < b.sortOrder ) {
								return -1;
							}
						});
					}
				}

				return venueTabComposite;
			}
			/*-- end all private process JSON methods --*/

			var whenRender = prepWhenTab(artists),
				whereRender = prepWhereTab(artists),
				artistRender = prepArtistTab(venues, shows, artists),
				allRender = {};

				/* Bug testing for JSON issues: set shows.flyin AFTER everything is prepped, directly before handlebar render init */
				for ( var i = 0, alen = artistRender.length; i < alen; i++ ) {
					// convert sort order from string to number
					for (var j = 0, slen = shows.length; j < slen; j++) {
						if ( artistRender[i].id === shows[j].objectId ) {
							/* attempting a standard object copy*/
							shows[j].flyin = artists[i].flyin;
						}
					}
				}

			artistRender = _sortByKey(artistRender, 'artistObjImg');
			allRender.artists = artistRender;
			allRender.when = whenRender;
			allRender.where = whereRender;
			allRender.settings = self.params;
			allRender.baseURL = self.compositeJson.baseURL;
			allRender.compFestivalName = self.compositeJson.festivalName;

			if ( self.compositeJson.isSchedule ) {
				allRender.hasDates = 1;
				if ( self.compositeJson.isSchedule ) {
					allRender.hasVenues = 1;
				}
			}

			self.handlebarInit( allRender );
		},
		makeIndexedObjects: function( json ){
			var self = this,
				baseURL = location.protocol + '//' + location.host + location.pathname,
				artists = json.artists.data,
				venues = json.venues,
				shows = json.shows,
				lineupSort = json.eventData.lineupSort,
				vlen = venues.length,
				slen = shows.length,
				composite = {
					artistsById: {},
					artistsWithShows: {},
					showsByDate: {},
					baseURL: baseURL,
					showsByDateWithArtists: {},
					showsById: {},
					showsByTitle: {},
					showsByVenueId: {},
					showDays: {},
					venuesById: {},
					venuesByName: {},
					venuesByShowId: {},
					festivalName:json.name,
					sortMethod:lineupSort,
					isVenue:vlen,
					isSchedule:slen,
					sortedVenues:self.sortVenues( JSON.parse( JSON.stringify( json.venues ) ) )
				},
				artistsWithVideos = {};

			for (var j = 0, slen = shows.length; j < slen; j++) {
				var
					timeStart = shows[ j ].timeStart,
					dateStart = shows[ j ].dateStart,
					d = new Date( [ dateStart.replace(/\-/g,'/'), timeStart ].join( ' ' ) ),
					hh = d.getHours();

				shows[ j ].originalDateStart = shows[ j ].dateStart;
				shows[ j ].originalFormattedStartDay = shows[ j ].formattedStartDay;
				if( hh >= 0 && hh <=4 && timeStart ){
					var mm = d.getMonth() + 1,
						dd = d.getDate() - 1,
						mins = d.getMinutes();
					if( mm < 10 ){
						mm = "0" + mm;
					}
					if( dd < 10 ){
						dd = "0" + dd;
					}
					shows[ j ].dateStart = [ d.getFullYear(), mm, dd ].join( '-' );
					//sorting is done on timeStart. we change it to .

					shows[ j ].sortBottom = 1;
				}
			}
			for ( var i = 0, alen = artists.length; i < alen; i++ ) {
				composite.artistsById[ artists[i].id ] = artists[i];
				artists[i].flyin = {};
				artists[i].objectId = artists[i].id;
				artists[i].scheduleTab = '',
				artists[i].aboutTab = '',
				artists[i].videoTab = '',
				artists[i].mediaTab = '',
				artists[i].fbToggle = '',
				artists[i].twToggle = '',
				artists[i].ycToggle = '',
				artists[i].inToggle = '',
				artists[i].facebook = '',
				artists[i].twitter = '',
				artists[i].youtube_channel = '',
				artists[i].instagram = '',
				artists[i].web = '';
				artists[i].sortOrder = Number(artists[i].sortOrder);

				// reorganizing data for flyin
				artists[i].flyin.id = artists[i].id;
				artists[i].flyin.objectId = artists[i].id;
				artists[i].flyin.customArtistLink = artists[i].customArtistLink;
				artists[i].flyin.customArtistButtonText = artists[i].customArtistButtonText;
				artists[i].flyin.title = artists[i].title;
				artists[i].flyin.subtitle = artists[i].subtitle;
				artists[i].flyin.artistDetail = artists[i].artistDetail;
				artists[i].flyin.imageURL = artists[i].imageURL;
				artists[i].flyin.scheduleTab = '',
				artists[i].flyin.aboutTab = '',
				artists[i].flyin.videoTab = '',
				artists[i].flyin.mediaTab = '',
				artists[i].flyin.fbToggle = '',
				artists[i].flyin.twToggle = '',
				artists[i].flyin.ycToggle = '',
				artists[i].flyin.inToggle = '',
				artists[i].flyin.facebook = '',
				artists[i].flyin.twitter = '',
				artists[i].flyin.youtube_channel = '',
				artists[i].flyin.instagram = '',
				artists[i].flyin.web = '';



				var aShows = [],
					aSocial = [],
					links = artists[i].artistDetail.links,
					hideIcons = [];

				for ( var j = 0, llen = links.length; j < llen; j++ ) {
					if ( links[j].info.type === 'youtube' ) {
						if ( typeof artists[i].embedvideos !== 'undefined' ) {
							artists[i].embedvideos.push(links[j].info.embed);
							artists[i].flyin.embedvideos.push(links[j].info.embed);
							artistsWithVideos[ artists[i].id ].push(links[j].info.embed);
						} else {
							artists[i].embedvideos = [];
							artists[i].flyin.embedvideos = [];
							artists[i].embedvideos.push(links[j].info.embed);
							artists[i].flyin.embedvideos.push(links[j].info.embed);
							artistsWithVideos[ artists[i].id ] = [];
							artistsWithVideos[ artists[i].id ].push(links[j].info.embed);
						}
					}
					if ( links[j].info.type === 'facebook' ) {
						artists[i].facebook = links[j].link;
						artists[i].hasfb = 1;
						artists[i].flyin.facebook = links[j].link;
						artists[i].flyin.hasfb = 1;
					}
					if ( links[j].info.type === 'twitter' ) {
						artists[i].twitter = links[j].link;
						artists[i].hastw = 1;
						artists[i].flyin.twitter = links[j].link;
						artists[i].flyin.hastw = 1;
					}
					if ( links[j].info.type === 'youtube_channel' ) {
						artists[i].youtube_channel = links[j].link;
						artists[i].hasyt = 1;
						artists[i].flyin.youtube_channel = links[j].link;
						artists[i].flyin.hasyt = 1;
					}
					if ( links[j].info.type === 'instagram' ) {
						artists[i].instagram = links[j].link;
						artists[i].hasig = 1;
						artists[i].flyin.instagram = links[j].link;
						artists[i].flyin.hasig = 1;
					}
					if ( links[j].info.type === 'web' ) {
						artists[i].web = links[j].link;
						artists[i].hasweb = 1;
						artists[i].flyin.web = links[j].link;
						artists[i].flyin.hasweb = 1;
					}
				}

				for (var j = 0, slen = shows.length; j < slen; j++) {
					if ( artists[i].id === shows[j].objectId ) {
						aShows.push(shows[j]);
					}
					artists[i].venues = aShows;
				}
			}

			composite.artistsWithShows.data = artists;

			for( i = 0; i < slen; i++ ){
				composite.showsById[ shows[i].id ] = shows[i];
				composite.showsByTitle[ shows[i].title ] = shows[i];
				if ( composite.showsByVenueId[ shows[i].venueId ] === undefined ){
					composite.showsByVenueId[ shows[i].venueId ] = [];
				}
				composite.showsByVenueId[ shows[i].venueId ].push( shows[i] );
				var showTime = shows[i].dateStart;

				if ( !composite.showsByDate.hasOwnProperty(shows[i].dateStart) ) {
					composite.showsByDate[showTime] = [];
					composite.showsByDateWithArtists[ showTime ] = [];
				}
				composite.showsByDate[showTime].push(shows[i]);
				composite.showsByDateWithArtists[ showTime ].push( shows[i].objectId );
			}

			for ( var i = 0; i < vlen; i++ ) {
				composite.venuesById[ venues[i].id ] = venues[i];
				composite.venuesByName[ venues[i].title ] = venues[i];
			}

			for ( var i in composite.showsById ){
				var venueId = composite.showsById[ i ].venueId;
				composite.venuesByShowId[ i ] = composite.venuesById[ venueId ];
			}
			self.onWindowLoadEvent(artistsWithVideos);
			return composite;
		},
		sortVenues:function( venues ){
			var l = venues.length,
				i=0;
			for( i=0;i<l;i++ ){
				if( venues[i].sortOrder === undefined ){
					var temp = venues[i];
					venues = [].concat( venues.slice(0,i), venues.splice(i+1, venues.length ), temp );
					l--;
					i--;
				}
			}

			venues.sort(function( a, b ){
				if( a.sortOrder === undefined && b.sortOrder === undefined ){
					return a.title.localeCompare( b.title );
				}
				return a.sortOrder > b.sortOrder;
			});
			return venues;
		},

		// ## Rendering: Root Template and Tabs
		handlebarInit: function( allRender ) {
			var self = this;
			Handlebars.partials = Handlebars.templates;
			/*// Register all partials
			document.querySelectorAll( "#all-partials script" ).forEach(function( scriptTag ){
				var id = scriptTag.id;
				Handlebars.registerPartial( id, $( "#" + id ).html() );
			});

			// Compile HB
			var hbTemplate = Handlebars.templates[ "hbinit" ],//$('#hbinit').html(),
				hbContent = allRender,
				hbTemplateScript = Handlebars.compile(hbTemplate),
				hbHTML = hbTemplateScript(hbContent);*/
			var
				hbHTML = Handlebars.templates.hbinit( allRender );
			$('#content-wrap').html(hbHTML);

			/*var removehb = document.getElementById('hbinit');
			removehb.remove();*/


			self.resizeIframe();
			// !Important: init tabs MUST be called after iFrame resized
			self.initTabs();

			// Garbage collection
			allRender = null;
			self.compositeJson = null;

		},
		// ## User Interface
		// findViewportSize method deleted: not in use
		lazyLoad: function() {
				var self = this,
					root = window,
					echo = {},
					offset, poll, delay, useDebounce, unload;

				var _callback = function() {};

				var _isHidden = function(element) {
					return (element.offsetParent === null);
				};

				var _inView = function(element, view) {
					if (_isHidden(element)) {
						return true;
					}

					var box = element.getBoundingClientRect();
					return (box.right >= view.l && box.bottom >= view.t && box.left <= view.r && box.top <= view.b);
				};

				var _debounceOrThrottle = function() {
					if (!useDebounce && !!poll) {
						return;
					}
					clearTimeout(poll);
					poll = setTimeout(function() {
						_render();
						poll = null;
					}, delay);
				};

				var _init = function() {
					opts = {
						offset: 400,
						throttle: 50,
						debounce: false,
						unload: false,
						callback: function (element, op) {

						}
					};
					var offsetAll = opts.offset || 0;
					var offsetVertical = opts.offsetVertical || offsetAll;
					var offsetHorizontal = opts.offsetHorizontal || offsetAll;
					var optionToInt = function(opt, fallback) {
						return parseInt(opt || fallback, 10);
					};
					offset = {
						t: optionToInt(opts.offsetTop, offsetVertical),
						b: optionToInt(opts.offsetBottom, offsetVertical),
						l: optionToInt(opts.offsetLeft, offsetHorizontal),
						r: optionToInt(opts.offsetRight, offsetHorizontal)
					};
					delay = optionToInt(opts.throttle, 250);
					useDebounce = opts.debounce !== false;
					unload = !!opts.unload;
					callback = opts.callback || callback;
					_render();
					if (document.addEventListener) {
						window.top.addEventListener('scroll', _debounceOrThrottle, false);
						root.addEventListener('scroll', _debounceOrThrottle, false);
						root.addEventListener('load', _debounceOrThrottle, false);
					} else {
						window.top.attachEvent('onscroll', _debounceOrThrottle);
						root.attachEvent('onscroll', _debounceOrThrottle);
						root.attachEvent('onload', _debounceOrThrottle);
					}
				};

				var _render = function() {
					var nodes = document.querySelectorAll('img[data-echo], [data-echo-background]');
					var length = nodes.length;
					var src, elem;
					var view = {
						l: 0 - offset.l,
						t: 0 - offset.t,
						b: (root.innerHeight || document.documentElement.clientHeight) + offset.b,
						r: (root.innerWidth || document.documentElement.clientWidth) + offset.r
					};
					for (var i = 0; i < length; i++) {
						elem = nodes[i];
						if (_inView(elem, view)) {
							if (unload) {
								elem.setAttribute('data-echo-placeholder', elem.src);
							}

							if (elem.getAttribute('data-echo-background') !== null) {
								elem.style.backgroundImage = "url(" + elem.getAttribute('data-echo-background') + ")";
							} else {
								elem.src = elem.getAttribute('data-echo');
							}

							if (!unload) {
								elem.removeAttribute('data-echo');
								elem.removeAttribute('data-echo-background');
							}

							_callback(elem, 'load');
						} else if (unload && !!(src = elem.getAttribute('data-echo-placeholder'))) {

							if (elem.getAttribute('data-echo-background') !== null) {
								elem.style.backgroundImage = "url(" + src + ")";
							} else {
								elem.src = src;
							}

							elem.removeAttribute('data-echo-placeholder');
							_callback(elem, 'unload');
						}
					}
					if (!length) {
						_detach();
					}
				};

				var _detach = function() {
					if (document.removeEventListener) {
						root.removeEventListener('scroll', _debounceOrThrottle);
					} else {
						root.detachEvent('onscroll', _debounceOrThrottle);
					}
					clearTimeout(poll);
				};
			_init();
		},
		initTabs: function() {
			var self = this,
				tabArray = [ '#main-outer-container', '#artist-inner-container' ],
				whenwhereTabs = [ '#where-outer-container', '#when-outer-container' ],
				tabOptions = {},
				today = new Date(),
				dd = today.getDate(),
				mm = today.getMonth()+1,
				yy = today.getFullYear();

			if ( mm < 10 ){
				mm = "0" + mm;
			}
			if ( dd < 10 ){
				dd = "0" + dd;
			}
			var d = [ yy, mm, dd ].join( '-' );

			for( var i = 0; i < whenwhereTabs.length;i++ ){
				var tab = $( whenwhereTabs[i] ),
					hash = w.top.location.hash;
				if( tab.length && tab.find( '.tab' ).length ){
					tabArray.push( whenwhereTabs[i] );
					if ( !(hash && hash.match( /#schedule\// ) ) ) {
						if( whenwhereTabs[ i ] === '#when-outer-container' ){
							var container = $( '#when-outer-container' ),
								dateMatchedElement = container.find( 'a[href="#schedule/'+d+'"]' );

							if( dateMatchedElement.length ){
								if( self.params.openCurrentSchedule ){
									tabOptions[ tabArray[ 0 ] ] = {
										defaultTab:$( "#main-outer-container #navtabs a[href='#nested-tab-2']" ).parent()
									};
								}

								tabOptions[ whenwhereTabs[ i ] ] = {
									defaultTab:dateMatchedElement.parent()
								};

							}
						}
					}
				}
			}
			for ( var i = 0; i < tabArray.length;i++ ) {
				var tab = $( tabArray[i] );
				tab.easytabs( tabOptions[ tabArray[i] ] || {} );
			}
		},
		initFlyin: function() {
			var self = this;
			//flyin module and animations
			$( '#nested-tab-1, .tab-0, .tab-1, .tab-2, .tab-3, .tab-4' ).dlmenu();
		},
		renderYTiFrame: function( vidlisting, event ) {

			var self = this,
				vidlisting = vidlisting,
				ytURL,
				youtubeEmbed,
				artistID = event.target.className,
				iframeArr = [];


			artistID = artistID.replace(/\D+/g, '');

			var artistVids = vidlisting[artistID],
				getID = document.getElementById('artist-tab-c');

			if ( vidlisting.hasOwnProperty(artistID) ) {
				for ( var i = 0, alen = artistVids.length; i < alen; i++ ) {
					var videoembedID = 'videoembed-'+i+'-'+artistID;
					var getiframe = document.getElementsByClassName(videoembedID);
					ytURL = artistVids[i];
					iframeArr.push(getiframe);
				}

				if ( event.target.id === 'video') {

					for ( var i = 0, alen = artistVids.length; i < alen; i++ ) {
						videoembedID = 'videoembed-'+i+'-'+artistID;
						ytURL = artistVids[i];
						getiframe = document.getElementsByClassName(videoembedID);

						for (var j = 0, ilen = getiframe.length; j < ilen; j++) {
							if ( ytURL === '' ){
								if ( getiframe[j] && getiframe[j].parentNode && getiframe[j].parentNode.parentNode ){
									getiframe[j].parentNode.parentNode.removeChild( getiframe[j].parentNode );
								}
							} else {
								getiframe[j].src = 'https:' + ytURL;
							}
						}

					}

				} else if ( event.target.id !== 'video') {

					for ( var i = 0, ilen = iframeArr[0].length; i < ilen; i++ ) {
						iframeArr[0][i].src = '';
					}
				}

			}
		},
		fancyHorizontalScroll: function( obj ){
			//so fancy :|
			var
				self = this,
				el = $( obj.menuSelector ),
				leftNav = $( '<div class="' + obj.namespace + '-nav horizontal-subnav-nav left-nav fa"></div>' ),
				rightNav = $( '<div class="' + obj.namespace + '-nav horizontal-subnav-nav right-nav fa"></div>' ),
				elContainer = $( '.' + obj.namespace + '-container' );

			var checkScroll = function( e ){
					var
						w = el.width(),
						sw = el[0].scrollWidth,
						sl = el[0].scrollLeft;

					if( w < sw ){
						if( sl === 0 ){
							leftNav.removeClass( 'on' );
						}else{
							leftNav.addClass( 'on' );
						}
						if( sl + w + 40 === sw ){
							rightNav.removeClass( 'on' );
						}else{
							rightNav.addClass( 'on' );
						}
					}
				},
				moveNav = function( dir ){
					if( dir ){
						el[0].scrollLeft += 100;
					}else{
						el[0].scrollLeft -= 100;
					}
				},
				init = function(){
					el.wrap( '<div class="' + obj.namespace + '-container subnav-container"></div>' );
					elContainer = $( '.' + obj.namespace + '-container' );
					elContainer.append( leftNav, rightNav );
					$( obj.outerContainer ).on( 'easytabs:after', checkScroll );
					el.on( 'scroll', checkScroll );
					leftNav.on( 'click', function(){
						moveNav( 0 );
					});
					rightNav.on( 'click', function(){
						moveNav( 1 );
					});
				};

			self.init = init;
			return self;
		},

		// ## Global Events
		onWindowLoadEvent : function( vidlisting ) {
			var self = this,
				vidlisting = vidlisting;
			$(window).load(function() {
				self.onNavTabClickEvent(vidlisting);
				self.initFlyin();
				$( '#main-outer-container #artist-inner-container' ).easytabs({});
				$('#overlay').remove();
			});
		},
		onNavTabClickEvent : function( vidlisting ) {

			var self = this,
				vidlisting = vidlisting,
				videoTab = $('.dl-subviewopen li.active'),
				navTabs = $('#navtabs.etabs li' );

			$('#navtabs, .panel-container, .artistSlot').on('click', function(){
					self.lazyLoad();
					self.resizeIframe();
			});
			$('#artist-inner-container .etabs li a').on('click', function( event ){
				self.renderYTiFrame(vidlisting, event);
			});
			$('#artist-inner-container' ).on( 'easytabs:before', function( e, $clicked, $targetPanel, settings ){
				var allClasses = [ 'globalabout-active', 'globalschedule-active', 'globalvideo-active', 'globalshare-active' ],
					target = $( e.target ),
					newClass = $targetPanel.attr( 'data-containername' ) + '-active',
					nonFirstActiveClass = 'nonfirst-active',
					allPanels = target.find(
						allClasses.map(function(cls){
							return 'div.' + cls.replace( '-active' ,'' )
						}).join( ',' )
					);

				if( allPanels[0] == $targetPanel[0] ){
					target.removeClass( nonFirstActiveClass );
				}else{
					target.addClass( nonFirstActiveClass );
				}
				target.removeClass( allClasses.join( ' ' ) );
				target.addClass( newClass );
			});
		},
		initGlobalEvents: function() {
			var self = this;
			$( 'body' ).on( 'click', '.artistShare', function(e){
				e.preventDefault();
				var elem = $( e.currentTarget );
				if( elem.find( '.fb' ).length ){
					self.popFbShare( elem.children( 'a' )[0] );
				}else if( elem.find( '.tw' ).length ){
					self.popTwitterShare( elem.children( 'a' )[0] );
				}
			}).on( 'click', '.dl-back', function( e ){
				self.resizeIframe();
			});
		},
		resizeIframe: function() {
			var self = this,
				iframeH = self.params.defaultHeight,
				body = $( 'body' ),
				ctr = 0,
				timer;
			timer = window.setInterval(function(){
				var newHeight = body.height();
				if( newHeight !== iframeH ){
					iframeH = newHeight;
					$( window.top.document.querySelector( '#lineupwidget-iframe' ) ).css({'min-height':100+'vh'});
					$( window.top.document.querySelector( '#lineupwidget-iframe' ) ).css({height:iframeH+'px'});
				}
				ctr++;
				if( ctr === 20 ){
					clearTimeout( timer );
				}
			}, 250 );
		},

		// ## Social Media
		FBShare: function() {
			var parentURL = document.referrer;
			FB.ui({
				method: 'share',
				href: parentURL,
				caption:'See artist at festival',
				picture:'http://popcrush.com/files/2016/04/glamour1.jpg?w=1020&h=495&zc=1&s=0&a=t&q=89',
				description:'See ',
				message:'See ',
				display:'popup'
			}, function(response){});
		},
		popFbShare: function( elem ){
			//use this when deeplinking is functional. will also need proper app id on the FB.init function then. that lives in the launch file.
			/*FB.ui({
				method: 'share',
				href: elem.href,
				caption: 'caption shows here',
				picture:elem.getAttribute( "data-shareimage" ),
				description:'description shows here',
				message:'message shows here',
				display:'popup'
			}, function(response){});*/
			w.open( [ 'https://www.facebook.com/sharer/sharer.php?u=', elem.getAttribute( 'data-shareurl' ).replace( '#', '%23' ) ].join( '' ), 'sharer', 'toolbar=0,status=0,width=548,height=325' );
		},
		popTwitterShare: function( elem ){
			w.open( [
				'https://twitter.com/intent/tweet?url=',
				elem.getAttribute( 'data-shareurl' ).replace( '#', '%23' ),
				'&text=See ',
				elem.getAttribute( 'data-artistname' ),
				' at ',
				elem.getAttribute( 'data-festivalname' ),
				'.'
			].join( '' ), 'sharer', 'toolbar=0,status=0,width=548,height=325' );
		}
	}
	lineupwWidget.init();

})(window,document,jQuery);