(function(w,d,$){
	//console.log('lineup widget iNiT');

	var lineupwWidget = {
		params:{
			defaultHeight:2000,
			festivalName:'',
			eventId:'',
			useProxy:0,
			useRelease:0,
			css:''
		},

		fetchParams: function(){
			this.params = $.extend( true, this.params, w.lineupSettings||{} );
		},

		init : function() {
			var self = this;
			self.fetchParams();
			if( self.params.festivalName !== '' && self.params.eventId !== '' ) {
				self.setEmbedStyles( self.params );
				self.preloader();
				self.onHashChangeEvent();
				self.lazyLoad();
				self.ajax();
				self.initGlobalEvents();
			}
		},
		ajax : function() {
			var self = this,
				proxyurl = 'http://ignitecampaigns.com/demos/lineupwidget/lineupproxy.php',
				// proxyurl = 'http://tsmfestivalapps.com/festivals/mountain-jam/event/9/data',
				endpoint = [ 'http://tsmfestivalapps.com/festivals/', self.params.festivalName, '/event/', self.params.eventId, '/data' ].join( '' ),
				endpointRelease = ['http://release12.tsmfestivalapps.com/festivals/', self.params.festivalName, '/event/', self.params.eventId, '/data' ].join( '' ),
				scr = document.createElement( 'script' );

			if( self.params.useRelease ){
				endpoint = endpointRelease;
			}

			if( self.params.useProxy ){
				endpoint = [ proxyurl, '?v=', new Date().getTime(), '&callback=lineupCallback&url=', endpoint ].join( '' );
			} else {
				endpoint += '?callback=lineupCallback';
			}

			var isEmptyObj = function(obj) {
				for (var key in obj) {
					if (obj.hasOwnProperty(key)) {
						return false;
					}
					return true && JSON.stringify(obj) === JSON.stringify({});
				}
			}

			scr.id = "eventJSON";
			//scr.src = [ proxyurl, '?callback=lineupCallback&url=', ajaxurl3 ].join( '' );
			scr.src = endpoint;

			document.head.appendChild( scr );

				window.lineupCallback = function(json) {
					if ( !navigator.onLine || isEmptyObj(json) ) {
						self.buildErrorScreen();
					}

					/*if ( typeof lineupSettings !== undefined ) {
						var settings = lineupSettings;
						lineupSettings = json.lineupSettings;
					} else {
						//console.log('lineup settings not defined');
					}*/

					//self.processJSON(json, settings);
					self.processJSON( json );
				}
		},
		preloader: function() {
			var self = this,
				body = $('body');
				overlay = "<div id='overlay'><div class='forceaspectratio'></div><div class='img-container'><img src='http://tsm-festival-lineup-widget.s3.amazonaws.com/img/Preloader.gif' /></div><div id='progress'></div></div>";
				$(overlay).appendTo(body);
		},
		makeIndexedObjects: function( json ){
			var self = this,
				baseURL = location.protocol + '//' + location.host + location.pathname,
				artists = json.artists.data,
				venues = json.venues,
				shows = json.shows,
				vlen = venues.length,
				slen = shows.length,
				composite = {
                    artistsById: {},
					artistsWithShows: {},
					baseURL: baseURL,
					festivalName: json.name,
					isSchedule: slen,
					isVenue: vlen,
					showsByDate: {},
                    showsByDateWithArtists: {},
					showsById: {},
					showsByTitle: {},
					showsByVenueId: {},
					showDays: {},
					venuesById: {},
					venuesByName: {},
					venuesByShowId: {}
				},
				artistsWithVideos = {};
                //console.log('about to test scanning for social media');
			for ( var i = 0, alen = artists.length; i < alen; i++ ) {
				/*if( artists[i].id == 27 ){
					artists[i].featuredArtist = 1;
				}*/
                composite.artistsById[ artists[i].id ] = artists[i];
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
				var aShows = [],
                    aSocial = [],
                    links = artists[i].artistDetail.links,
                    hideIcons = [];

                for ( var j = 0, llen = links.length; j < llen; j++ ) {
                	if ( links[j].info.type === 'youtube' ) {
		                if ( typeof artists[i].embedvideos !== 'undefined' ) {
		                	artists[i].embedvideos.push(links[j].info.embed);
		                	artistsWithVideos[ artists[i].id ].push(links[j].info.embed);
		                } else {
		                	artists[i].embedvideos = [];
		                	artists[i].embedvideos.push(links[j].info.embed);
		                	artistsWithVideos[ artists[i].id ] = [];
		                	artistsWithVideos[ artists[i].id ].push(links[j].info.embed);
		                }
		            }
		            if ( links[j].info.type === 'facebook' ) {
		                artists[i].facebook = links[j].link;
		            }
		            if ( links[j].info.type === 'twitter' ) {
		                artists[i].twitter = links[j].link;
		            }
		            if ( links[j].info.type === 'youtube_channel' ) {
		                artists[i].youtube_channel = links[j].link;
		            }
		            if ( links[j].info.type === 'instagram' ) {
		                artists[i].instagram = links[j].link;
		            }
		            if ( links[j].info.type === 'web' ) {
		                artists[i].web = links[j].link;
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
		processJSON : function(json){

			var self = this,
				artists = json.artists.data,
				venues = json.venues,
				shows = json.shows,
				iframeContainer = $( window.top.document.querySelector( '#lineupwidget-iframe' ) ),
				iframeWrapper = $( window.top.document.querySelector( '#lineupwidget-iframe' ) );


				//console.log('*********Inside process JSON, show me lineupSettings: ', settings);

			self.compositeJson = self.makeIndexedObjects( json );
			//console.log('showing compositeJSON: ', self.compositeJson );

			iframeContainer.css({height:self.params.defaultHeight + 'px'});

			// change yyyy-mm-dd to string month day
			var _convertDate = function(shows, sIndex) {
				//console.log('----mobile test: ABOUT TO CONVERT DATE----');
				var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
					months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
					startDateStr,
					startDateObj,
					formattedStartDay,
					formattedStartMonth,
					startDateDayOnly;

				Date.prototype.getDayName = function() {
					return days[ this.getDay() ];
				};
				Date.prototype.getMonthName = function() {
					return months[ this.getMonth() ];
				};
				/* Format month and day correctly for artist module schedule tab */
				startDateStr = shows[sIndex].dateStart;
				startDateStr = startDateStr.replace(/\-/g,'/');
				startDateObj = new Date(startDateStr);
				formattedStartDay = startDateObj.getDayName();
				formattedStartMonth = startDateObj.getMonthName();
				startDateDayOnly = startDateObj.getDate();
				shows[sIndex].formattedStartDay = formattedStartDay;
				shows[sIndex].formattedStartMonth = formattedStartMonth;
				shows[sIndex].startDateDayOnly = startDateDayOnly;

			}


			var _convertDateWhenTab = function(shows) {
				var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
					months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
					startDateStr,
					startDateObj,
					formattedStartDay,
					formattedStartMonth,
					formattedDayofMonth,
					slen = shows.length,
					dateconvertedComposite = {},
					compositeDays = [],
					compositeDateArr = [],
					compositeShowtimeDates = [];

				Date.prototype.getDayName = function() {
					return days[ this.getDay() ];
				};
				Date.prototype.getMonthName = function() {
					return months[ this.getMonth() ];
				};

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

				}
				dateconvertedComposite.days = compositeDays;
				dateconvertedComposite.daysOfMonth = compositeDateArr;
				dateconvertedComposite.showtimeDates = compositeShowtimeDates;

				return dateconvertedComposite;
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
				/* associate correct classes to artist object if featured */
				if ( artists[aIndex].featuredArtist && artists[aIndex].featuredArtist == 1 ) {
					artists[aIndex].artistObjLi = headlinerClasses.li;
					artists[aIndex].artistObjA = headlinerClasses.a;
					artists[aIndex].artistObjImg = headlinerClasses.img;
				} else {
					artists[aIndex].artistObjLi = nonheadlinerClasses.li;
					artists[aIndex].artistObjA = nonheadlinerClasses.a;
					artists[aIndex].artistObjImg = nonheadlinerClasses.img;
				}
				return artists;
			};
			// build Artist Tab
			var prepArtistTab = function(venues, shows, artists) {
				//console.log('inside prepartist tab');
				var artistsWithShows =  self.compositeJson.artistsWithShows.data,
					vlen = venues.length;
				var date_sort_asc = function (a, b) {
				  if (a.dateStart > b.dateStart) {
				  	return 1;
				  }
				  if (a.dateStart < b.dateStart) {
				  	return -1;
				  }
				  return 0;
				};
				/* call _prepArtistModule and convert date */

				// associate shows name with show id
				if( !vlen ){
					for ( var j = 0, slen = shows.length; j < slen ; j++ ) {
						_convertDate(shows, j);
					}
				}else{
					for ( var i = 0; i < vlen; i++) {
						for ( var j = 0, slen = shows.length; j < slen ; j++ ) {
							// add class flags
							_convertDate(shows, j);
							if ( shows[j].venueId === venues[i].id ) {
								shows[j].venueId = venues[i].title;
							}
						}
					};
				}
				// place shows object within artist
				//console.log('about to place shows object within artist obj');
				for ( var i = 0, alen = artists.length; i < alen; i++ ) {
					// convert sort order from string to number
					artists[i].sortOrder = Number(artists[i].sortOrder);
					_prepArtistModule( artists, i );
					var aShows = [];
					////console.log('artist: ', artists[i].title);
					for (var j = 0, slen = shows.length; j < slen; j++) {
						if ( artists[i].id === shows[j].objectId ) {
							aShows.push(shows[j]);
						}
						artists[i].venues = aShows;
					}
					if ( artists[i].venues && artists[i].venues.length > 1 ) {
						artists[i].venues.sort(date_sort_asc);
					}

				}

				// show/hide tabs
				for ( var i = 0, alen = artists.length; i < alen; i++ ) {
					/* schedule */
					if ( artists[i].venues && artists[i].venues.length == 0 ) {
						artists[i].scheduleTab = 'hide';
					}
					/* about */
					if ( artists[i].artistDetail.main.description == "" ) {
						artists[i].aboutTab = 'hide';
					}
					/* embedvideos */
					if ( !artists[i].hasOwnProperty('embedvideos') ) {
						artists[i].videoTab = 'hide';
					}
					/* social */
					if ( (!artists[i].hasOwnProperty('facebook')) && (!artists[i].hasOwnProperty('twitter')) && (!artists[i].hasOwnProperty('web')) && (!artists[i].hasOwnProperty('youtube_channel')) && (!artists[i].hasOwnProperty('instagram'))  ) {
						artists[i].socialTab = 'hide';
					}
					if ( artists[i].facebook == ''  ) {
						artists[i].fbToggle = 'hide';
					}
					if ( artists[i].twitter == '' ) {
						artists[i].twToggle = 'hide';
					}
					if ( artists[i].youtube_channel == '' ) {
						artists[i].ycToggle = 'hide';
					}
					if ( artists[i].instagram == '' ) {
						artists[i].inToggle = 'hide';
					}
					if ( artists[i].web == '' ) {
						artists[i].wsToggle = 'hide';
					}
				}
				return artists;
			}
			var prepArtistTabNEW = function() {

				var artistsWithShows =  self.compositeJson.artistsWithShows.data;
					alen = artistsWithShows.length;
				/* call _prepArtistModule and convert date */

				// associate shows name with show id
				for ( var i = 0, alen = venues.length; i < alen; i++) {
					 for ( var j = 0, slen = shows.length; j < slen ; j++ ) {
						// add class flags
						_convertDate(shows, j);
						if ( shows[j].venueId === venues[i].id ) {
							shows[j].venueId = venues[i].title;
						}
					}
				};
				// place shows object within artist
				for ( var i = 0, alen = artists.length; i < alen; i++ ) {
					// convert sort order from string to number
					artists[i].sortOrder = Number(artists[i].sortOrder);
					var aShows = [];
					for (var j = 0, slen = shows.length; j < slen; j++) {
						if ( artists[i].id === shows[j].objectId ) {
							aShows.push(shows[j]);
						}
					artists[i].venues = aShows;
					_prepArtistModule(artists, i)
					}
				}
				return artists;
			}

			// buildWhenTab
			var prepWhenTab = function() {
				var showsByDate = self.compositeJson.showsByDate,
					showtimes = []
					shlen = showtimes.length,
					showtimeComposite = {};
				for (var i in showsByDate) {
					_sortByKey( showsByDate[i], 'dateStart', 'timeStart');
				}
				for (var i in showsByDate) {
					showtimes.push(i);
				}
				showtimes.sort();

				var rootTemplate = _convertDateWhenTab(showtimes);
				showtimeComposite.rootTemplate = rootTemplate;
				showtimeComposite.showsByDate = showsByDate;

                //console.log(typeof self.compositeJson.artistsById);
                for (var i in showtimeComposite.showsByDate ) {

                    for (var j = 0, slen = showtimeComposite.showsByDate[i].length; j < slen; j++ ) {

                        //console.log('***-',showtimeComposite.showsByDate[i][j].objectId);

                        for ( var k in self.compositeJson.artistsById ) {
                            //console.log(self.compositeJson.artistsById[k].id);
                            //console.log( showtimeComposite.showsByDate[i][j].objectId, i, j );
                            if (showtimeComposite.showsByDate[i][j].objectId == self.compositeJson.artistsById[k].id ) {

                                // console.log('ding');
                                showtimeComposite.showsByDate[i][j] = self.compositeJson.artistsById[k];
                            }

                        }
                    }
                }
                //console.log('finished preping when tab: ', showtimeComposite.showsByDate);
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
					venueTabComposite = [],
					sanitized = [],
					toSanitize,
					venuesById = self.compositeJson.venuesById,
					showsById = self.compositeJson.showsById,
					showsByVenueId = self.compositeJson.showsByVenueId;
				for ( var i in showsByVenueId ) {
					_sortByKey( showsByVenueId[i], 'dateStart', 'timeStart');
					venueTab[ venuesById[ i ].title ] = showsByVenueId[i];
				}
				for ( key in venueTab ){
					venueTabNames.push(key);
				}
				venueTabNames.sort();
				// venueTabComposite.push(venueTabNames);
				// venueTabComposite.push(venueTab);

                venueTabComposite.rootTemplate = venueTabNames;

                for (var i = 0, rlen = venueTabComposite.rootTemplate.length; i < rlen; i++) {
                	toSanitize = venueTabComposite.rootTemplate[i].replace(/\s+/g, '-').replace(/[^a-zA-Z-]/g, '').toLowerCase();
                	sanitized.push(toSanitize);
                }

                venueTabComposite.sanitizedVenueNames = sanitized;

                venueTabComposite.showsByVenueName = venueTab;
                //venueTabCompoiste.festivalName = self.compositeJson.name;

                for (var i in venueTabComposite.showsByVenueName ) {

                    for (var j = 0, vlen = venueTabComposite.showsByVenueName[i].length; j < vlen; j++ ) {

                        //console.log('***-',showtimeComposite.showsByDate[i][j].objectId);

                        for ( var k in self.compositeJson.artistsById ) {
                            //console.log(self.compositeJson.artistsById[k].id);

                            if (venueTabComposite.showsByVenueName[i][j].objectId == self.compositeJson.artistsById[k].id ) {

                                // console.log('ding');
                                venueTabComposite.showsByVenueName[i][j] = self.compositeJson.artistsById[k];
                            }

                        }
                    }
                }
                //console.log('**********finished preping where tab: ', venueTabComposite.showsByVenueName);

				return venueTabComposite;
			}
			/*-- end all private process JSON methods --*/

			var whenRender = prepWhenTab(),
				whereRender = prepWhereTab(),
				artistRender = prepArtistTab(venues, shows, artists),
				allRender = {};

			artistRender = _sortByKey(artistRender, 'artistObjImg');

			allRender.artists = artistRender;
			allRender.when = whenRender;
			allRender.where = whereRender;
			allRender.settings = self.params;

			self.buildRootTemplate(allRender);

		},
		// buildRootTemplate : function(artistRender, whereRender, whenRender) {
		buildRootTemplate : function(allRender) {
			//console.log('inside buildRootTemplate, show me allRender w/ settings: ', allRender);
			var self = this,
				parent = $('.content-wrap'),
				showsByVenueId = self.compositeJson.venuesById,
				wlen = allRender.where.rootTemplate.length,
				whlen = allRender.when.rootTemplate.days.length,
				allRender = allRender,
				rootMenus = [
					"<li class='etabs-nav tab'><a href='#nested-tab-1'>artists</a></li>"
				];
				if( self.compositeJson.isSchedule ){
					rootMenus.push( "<li class='etabs-nav tab'><a href='#nested-tab-2'>schedule</a></li>" );
					if( self.compositeJson.isVenue ){
						rootMenus.push( "<li class='etabs-nav tab'><a href='#nested-tab-3'>stages</a></li>" );
					}
				}
				var rootView = "<div class='tab-container dl-menuopen' id='main-outer-container'> <ul class='etabs' id='navtabs'>" + rootMenus.join( '' ) + "</ul> <div class='panel-container'> <div id='nested-tab-1' class='rootTab'>";

			if ( (allRender.settings.widgetMessage) && (allRender.settings.widgetMessage !=='') ) {
				rootView += "<div class='widgetMessage-container'><div class='widgetMessage'>"+allRender.settings.widgetMessage+"</div></div>";
			}

			rootView += "<ul id='artists' class='dl-menu dl-menuopen artists'></ul>";

			if ( (allRender.settings.buttonText !== '') && (allRender.settings.buttonURL !== '') ){
				rootView +="<div id='customArtistButton/test' class='customArtistButtonTextRoot'><a target='_blank' href='"+allRender.settings.buttonURL+"'><p>"+allRender.settings.buttonText+"</p></a></div></div>"
			} else {
				rootView += "</div>";
			}

			/* build when tab root */
			rootView += "<div id='nested-tab-2' class='rootTab'> <div class='tab-container' id='when-outer-container'> <div class='month'>"+allRender.when.rootTemplate.month+"</div><ul class='etabs days'>";
			for (var i = 0; i < whlen; i++ ) {
				rootView += " <li class='tab'> <a href='#schedule/"+allRender.when.rootTemplate.showtimeDates[i]+"' class='active'> <span>"+allRender.when.rootTemplate.days[i]+"</span> <div class='dayofmonth'>"+allRender.when.rootTemplate.daysOfMonth[i]+"</div> </a> </li>";
			}
			rootView += "</ul><div id='schedule' class='panel-container'>";

			for (var i = 0; i < whlen; i++) {
				rootView += "<div id='schedule/"+allRender.when.rootTemplate.showtimeDates[i]+"' class='tab-"+i+"'>";
				if ( (allRender.settings.buttonText !== '') && (allRender.settings.buttonURL !== '') ) {
					rootView +="<ul class='dl-menu dl-menuopen artists'></ul><div class='customArtistButtonTextRoot'><a target='_blank' href='"+allRender.settings.buttonURL+"'><p>"+allRender.settings.buttonText+"</p></a></div></div>";
				} else {
					rootView += "</div>";
				}

			}
			rootView += "</div></div></div>";

			/* build where tab root*/
			rootView += "<div id='nested-tab-3' class='rootTab'> <div class='tab-container' id='where-outer-container'> <ul class='etabs places'>"
			for ( var i = 0; i < wlen; i++ ) {
				rootView += "<li class='tab'><a href='#stages/"+allRender.where.sanitizedVenueNames[i]+"'>"+allRender.where.rootTemplate[i]+"</a></li>";
			}

			rootView += "</ul><div id='stages' class='panel-container'>";

			for ( var i = 0; i < wlen; i++ ) {
				rootView += "<div id='stages/"+allRender.where.sanitizedVenueNames[i]+"' class='tab-"+i+"'>";

				if ( (allRender.settings.buttonText !== '') && (allRender.settings.buttonURL !== '') ) {
					rootView +="<ul class='dl-menu dl-menuopen artists'></ul><div class='customArtistButtonTextRoot'><a target='_blank' href='"+allRender.settings.buttonURL+"'><p>"+allRender.settings.buttonText+"</p></a></div></div>";
				} else {
					rootView +="</div>";
				}

			}

			rootView += "</div></div></div></div></div></div>'";

			$(rootView).prependTo(parent);

			self.initTabs();

			self.buildTab(allRender);
			self.resizeIframe();
		},

		resizeIframe:function(){
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

		buildTab: function(allRender) {
			//console.log('=-=-=-=-=-= inside buildTab, showing allRender, ', allRender);
			var self = this,
				artistsArea = $('.panel-container #nested-tab-1 .dl-menu'),
				dparams = "?w=480&h=218&zc=1&a=t",
				pparams = "?w=960&a=t",
				nonFeaturedArtistParams = '?w=120&h=120&a=t',
				lastFeatured = true,
				multiShowArtistWhen = {};

			var _renderArtists = function(allRender, tabName, areaToInject) {
				//console.log('***inside _renderArtists');

				var test = tabName,
                    artistsTab = '',
                    //blankImg = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
                    blankImg = "https://s3.amazonaws.com/tsm-images/global/1x1.gif";

                var allRenderVar = '',
                	multiShowArtist = {},
                	nonFeaturedCount = 0;

                if ( tabName === 'artists' ) {
                    allRenderVar = allRender['artists'];
                    if ( allRender.settings.widgetMessage ) {
                    	var artistsTab = "<div class='featured'>";
                    } else {
                    	var artistsTab = "<div class='featured topPadding'>";
                    }
                }
                else {
                    allRenderVar = allRender;
                }

				for (var i = 0, alen = allRenderVar.length; i < alen; i++) {
					//console.log(allRenderVar[i]);
					if ( allRenderVar[i].artistObjLi === "headline") {
                        if ( tabName == 'when' ) {
							artistsTab += '<div class="artist-row-separator"></div>';
                            artistsTab += "<li class='artistSlot mediaObj'><a class='mediaObj' href=''><img class='media' src='" + blankImg + "' data-echo='" + self.cleanImageUrl( allRenderVar[i].imageURL ) + ""+nonFeaturedArtistParams+"'><div class='artistInfo'><p>"+allRenderVar[i].title+"</p><p><span class='artistTime'>"+allRenderVar[i].venues[0].formattedStartDay+" "+( allRenderVar[i].venues[0].formattedTimeStart?allRenderVar[i].venues[0].formattedTimeStart:'' )+"</span> <span class='artistPlace'>" + ( self.compositeJson.isVenue?allRenderVar[i].venues[0].venueId:'' ) + "</span></p></div></a>";
                        }
                        else if ( tabName == 'where' ) {
							artistsTab += '<div class="artist-row-separator"></div>';
                        	artistsTab += "<li id='"+allRenderVar[i].id+"' class='artistSlot mediaObj'><a class='mediaObj' href=''><img class='media' src='" + blankImg + "' data-echo='" + self.cleanImageUrl( allRenderVar[i].imageURL ) + ""+nonFeaturedArtistParams+"'><div class='artistInfo'><p>"+allRenderVar[i].title+"</p><p><span class='artistTime'>"+allRenderVar[i].venues[0].formattedStartDay+" " + ( allRenderVar[i].venues[0].formattedTimeStart?allRenderVar[i].venues[0].formattedTimeStart : '' ) + "</span></p></div></a>";
                        }
                        else {
                            if ( allRenderVar[i].artistBadge ) {
                                artistsTab += "<li id='"+allRenderVar[i].id+"' class='artistSlot "+allRenderVar[i].artistObjLi+"'><a class='"+allRenderVar[i].artistObjA+"' href='' data-echo-background='"+allRenderVar[i].artistDetail.generics.generic1+""+dparams+"'><div class='ribbon'><span>"+allRenderVar[i].artistBadge+"</span></div><img class='"+allRenderVar[i].artistObjImg+"' src='" + blankImg + "' data-echo='"+allRenderVar[i].artistDetail.generics.generic1+""+dparams+"'><div class='artistInfo'><p>"+allRenderVar[i].title+"</p><p>More info</p></div></a>";
                            } else {
                                artistsTab += "<li id='"+allRenderVar[i].id+"' class='artistSlot "+allRenderVar[i].artistObjLi+"'><a class='"+allRenderVar[i].artistObjA+"' href='' data-echo-background='"+allRenderVar[i].artistDetail.generics.generic1+""+dparams+"'><img class='"+allRenderVar[i].artistObjImg+"' src='" + blankImg + "' data-echo='"+allRenderVar[i].artistDetail.generics.generic1+""+dparams+"'><div class='artistInfo'><p>"+allRenderVar[i].title+"</p><p>More info</p></div></a>";
                            }
                        }

						/* testing inline version of artist mod */
						var showtimes = allRenderVar[i].venues,
							artistInfo,
							artistModuleSubTabs = [];

						if( self.compositeJson.isSchedule ){
							artistModuleSubTabs.push( "<li class='etabs-nav tab "+allRenderVar[i].scheduleTab+"'> <a href='#artist-tab-a' class='embed-"+allRenderVar[i].id+"'>schedule</a> </li>" );
						}
						artistModuleSubTabs.push(
							"<li class='etabs-nav tab "+allRenderVar[i].aboutTab+"'> <a href='#artist-tab-b' class='embed-"+allRenderVar[i].id+"'>about</a> </li>",
							"<li class='etabs-nav tab "+allRenderVar[i].videoTab+"'> <a id='video' href='#artist-tab-c' class='globalvideo embed-"+allRenderVar[i].id+"'>video</a> </li>",
							"<li class='etabs-nav tab "+allRenderVar[i].mediaTab+"'> <a href='#artist-tab-d' class='embed-"+allRenderVar[i].id+"'>share</a> </li>"
						);

						artistsTab += "<ul class='dl-submenu'> <div class='tab-container' id='artist-inner-container'> <ul class='etabs'>" + artistModuleSubTabs.join( '' ) + "</ul> <div class='panel-container'> <div class='bg' data-echo-background='" + self.cleanImageUrl( allRenderVar[i].imageURL ) + ""+pparams+"'> <img class='full' src='" + blankImg + "' data-echo='" + self.cleanImageUrl( allRenderVar[i].imageURL ) + ""+pparams+"'/><div class='flyinProfileGrad'></div></div>";

						if( self.compositeJson.isSchedule ){
							artistsTab += "<div id='artist-tab-a' class='globalschedule'><div class='artistWrapper'><h2>"+allRenderVar[i].title+"</h2>";

							for ( var j = 0, slen = showtimes.length; j < slen; j++ ) {
								var divider = ( showtimes[j].venueId && showtimes[j].venueId!== '' && showtimes[j].formattedTimeStart && showtimes[j].formattedTimeStart !== '' )?" | ":"";
								artistsTab += "<div class='artistInfo'><p>"+showtimes[j].formattedStartMonth+" "+showtimes[j].startDateDayOnly+"</p><p><span class='artistTime'>" + ( showtimes[j].formattedTimeStart?showtimes[j].formattedTimeStart:"" ) + "</span>" + ( self.compositeJson.isVenue?"<span class='artistPlace'>"+ divider + showtimes[j].venueId+"</span>" : "" ) + "</p></div>"
							}
							artistsTab += "</div></div>";
						}

						artistsTab += "<div id='artist-tab-b' class='globalabout'><div class='abouttext'> <h4>"+allRenderVar[i].title+"</h4> "+allRenderVar[i].artistDetail.main.description.replace( /\&lt;/g, '<' ).replace( /\&gt;/g, '>' ).replace( /\&amp;/g, '&' ) +" </div>";


						if ( (allRenderVar[i].customArtistButtonText) && (allRenderVar[i].customArtistLink) ) {
							artistsTab += "<div class='customArtistButtonText'><a target='_blank' href='"+allRenderVar[i].customArtistLink+"'><p>"+allRenderVar[i].customArtistButtonText+"</p></a></div></div><div id='artist-tab-c' class='globalvideo embed-"+allRenderVar[i].id+" video'>";
						} else {
							artistsTab += "</div><div id='artist-tab-c' class='globalvideo embed-"+allRenderVar[i].id+" video'>";
						}


						if ( allRenderVar[i].hasOwnProperty('embedvideos') ) {
							for ( var j = 0, vlen = allRenderVar[i].embedvideos.length; j < vlen; j++ ) {
								//console.log(allRenderVar[i]);
								artistsTab +="<div class='embed-container'><iframe class='videoembed-"+j+"-"+allRenderVar[i].id+"' src='' frameborder='0' allowfullscreen></iframe></div>"

							}
						}
						artistsTab += "</div><div id='artist-tab-d' class='globalshare'><div class='artistWrapper'><h2>Share</h2><div class='artistShare mediaObj'> <a target='_blank' data-shareimage='" + self.cleanImageUrl( allRenderVar[i].imageURL ) + "' data-shareurl='"+self.compositeJson.baseURL+"#artists/"+allRenderVar[i].id+"/"+allRenderVar[i].sanitizedName+"' data-festivalname='"+self.compositeJson.festivalName+"' data-artistname='"+allRenderVar[i].sanitizedName+"' data-href='"+allRenderVar[i].facebook+"' class=''> <div class='siconcircle fb media'> <i class='fa fa-facebook-f'></i></div><p>share on facebook</p></a> </div><div class='artistShare mediaObj'><a target='_blank' href='"+allRenderVar[i].twitter+"' data-festivalname='"+self.compositeJson.festivalName+"' data-artistname='"+allRenderVar[i].title+"' class=''><div class='siconcircle tw media'> <i class='fa fa-twitter'></i> </div><p>share on twitter</p></a></div><div class='artistShare mediaObj'> </div></div></div></div></div>";
						artistsTab += "<footer class='socialfooter'> <div class='socialIcons'>";
						if( allRenderVar[i].web && allRenderVar[i].web !== '' ){
							artistsTab += "<a target='_blank' href='"+allRenderVar[i].web+"'><div class='siconcircle ws "+allRenderVar[i].wsToggle+"'> <i class='fa fa-bullseye'></i> </div></a>";
						}
						if( allRenderVar[i].facebook && allRenderVar[i].facebook !== '' ){
							artistsTab += "<a target='_blank' href='"+allRenderVar[i].facebook+"'><div class='siconcircle fb "+allRenderVar[i].fbToggle+"'> <i class='fa fa-facebook-f'></i> </div></a>";
						}
						if( allRenderVar[i].youtube_channel && allRenderVar[i].youtube_channel !== '' ){
							artistsTab += "<a target='_blank' href='"+allRenderVar[i].youtube_channel+"'><div class='siconcircle yt "+allRenderVar[i].ycToggle+"'> <i class='fa fa-youtube'></i> </div></a>";
						}
						if( allRenderVar[i].twitter && allRenderVar[i].twitter !== '' ){
							artistsTab += "<a target='_blank' href='"+allRenderVar[i].twitter+"'><div class='siconcircle tw "+allRenderVar[i].twToggle+"'> <i class='fa fa-twitter'></i> </div></a>";
						}
						if( allRenderVar[i].instagram && allRenderVar[i].instagram !== '' ){
							artistsTab += "<a target='_blank' href='"+allRenderVar[i].instagram+"'><div class='siconcircle ig "+allRenderVar[i].inToggle+"'> <i class='fa fa-instagram'></i> </div></a>";
						}
						artistsTab += "</div></footer></ul>";
						/*testing inline version of artist mod */

						artistsTab += "</li>";


					} else {
						if ( lastFeatured ) {
							lastFeatured = false;
							artistsTab += "</div>";
						}
							artistsTab += '<div class="artist-row-separator"></div>';
							var artistId = allRenderVar[i].id;
                            if ( tabName == 'artists' ) {
                            	artistsTab += "<li id='"+allRenderVar[i].id+"' class='artistSlot "+allRenderVar[i].artistObjLi+"'><a class='"+allRenderVar[i].artistObjA+"' href=''><img class='"+allRenderVar[i].artistObjImg+"' src='" + blankImg + "' data-echo='"+self.cleanImageUrl( allRenderVar[i].imageURL )+nonFeaturedArtistParams+"'><div class='artistInfo'><p>"+allRenderVar[i].title+"</p><p>More info</p></div></a>";
                            }
                            else if ( tabName == 'when' ) {

	            	        	if ( multiShowArtistWhen[ artistId ] === undefined ) {
	            					multiShowArtistWhen[ artistId ] = 0;
	            				}else{
	            					multiShowArtistWhen[ artistId ]++;
	            				}
								artistsTab += "<li id='"+allRenderVar[i].id+"' class='artistSlot "+allRenderVar[i].artistObjLi+"'><a class='"+allRenderVar[i].artistObjA+"' href=''><img class='"+allRenderVar[i].artistObjImg+"' src='" + blankImg + "' data-echo='"+self.cleanImageUrl( allRenderVar[i].imageURL )+""+nonFeaturedArtistParams+"'><div class='artistInfo'><p>"+allRenderVar[i].title+"</p><p><span class='artistTime'>"+allRenderVar[i].venues[multiShowArtistWhen[ artistId ]].formattedStartDay+" "+( allRenderVar[i].venues[multiShowArtistWhen[ artistId ]].formattedTimeStart?allRenderVar[i].venues[multiShowArtistWhen[ artistId ]].formattedTimeStart:"")+"</span> <span class='artistPlace'>"+( self.compositeJson.isVenue ? allRenderVar[i].venues[0].venueId : '' )+"</span></p></div></a>";
                            }
                            else {

                            	if ( multiShowArtist[ artistId ] === undefined ) {
                    				multiShowArtist[ artistId ] = 0;
                    			}else{
                    				multiShowArtist[ artistId ]++;
                    			}
                            	artistsTab += "<li id='"+allRenderVar[i].id+"' class='artistSlot "+allRenderVar[i].artistObjLi+"'><a class='"+allRenderVar[i].artistObjA+"' href=''><img class='"+allRenderVar[i].artistObjImg+"' src='" + blankImg + "' data-echo='"+self.cleanImageUrl( allRenderVar[i].imageURL )+""+nonFeaturedArtistParams+"'><div class='artistInfo'><p>"+allRenderVar[i].title+"</p><p><span class='artistTime'>"+allRenderVar[i].venues[multiShowArtist[ artistId ]].formattedStartDay+" "+(allRenderVar[i].venues[multiShowArtist[ artistId ]].formattedTimeStart?allRenderVar[i].venues[multiShowArtist[ artistId ]].formattedTimeStart:"")+"</span></p></div></a>";
                            }

							/* testing inline version of artist mod */
							var showtimes = allRenderVar[i].venues,
								artistModuleSubTabs = [];
							if( self.compositeJson.isSchedule ){
								artistModuleSubTabs.push( "<li class='etabs-nav tab "+allRenderVar[i].scheduleTab+"'> <a href='#artist-tab-a' class='embed-"+allRenderVar[i].id+"'>schedule</a> </li>" );
							}
							artistModuleSubTabs.push(
								"<li class='etabs-nav tab "+allRenderVar[i].aboutTab+"'> <a href='#artist-tab-b' class='embed-"+allRenderVar[i].id+"'>about</a> </li>",
								"<li class='etabs-nav tab "+allRenderVar[i].videoTab+"'> <a id='video' href='#artist-tab-c' class='embed-"+allRenderVar[i].id+"'>video</a> </li>",
								"<li class='etabs-nav tab "+allRenderVar[i].mediaTab+"'> <a href='#artist-tab-d' class='embed-"+allRenderVar[i].id+"'>share</a> </li>"
							);

							artistsTab += "<ul class='dl-submenu'> <div class='tab-container' id='artist-inner-container'> <ul class='etabs'> " + artistModuleSubTabs.join( '' ) + "</ul> <div class='panel-container'> <div class='bg' data-echo-background='"+self.cleanImageUrl( allRenderVar[i].imageURL )+""+pparams+"'> <img class='full' src='" + blankImg + "' data-echo='"+self.cleanImageUrl( allRenderVar[i].imageURL )+""+pparams+"'/><div class='flyinProfileGrad'></div></div>";
							if( self.compositeJson.isSchedule ){
								artistsTab += " <div id='artist-tab-a' class='globalschedule'> <div class='artistWrapper'><h2>"+allRenderVar[i].title+"</h2>";
								for ( var j = 0, slen = showtimes.length; j < slen; j++ ) {
									var divider = ( showtimes[j].venueId && showtimes[j].venueId!== '' && showtimes[j].formattedTimeStart && showtimes[j].formattedTimeStart !== '' )?" | ":"";
									artistsTab += "<div class='artistInfo'><p>"+showtimes[j].formattedStartMonth+" "+showtimes[j].startDateDayOnly+"</p><p><span class='artistTime'>"+( showtimes[j].formattedTimeStart?showtimes[j].formattedTimeStart:"" )+"</span>"+ ( self.compositeJson.isVenue ? "<span class='artistPlace'>" + divider + showtimes[j].venueId+"</span>" : "" )+"</p></div>"
								}
								artistsTab += "</div></div>";
							}

							artistsTab += "<div id='artist-tab-b' class='globalabout'> <div class='abouttext'> <h4>"+allRenderVar[i].title+"</h4> "+allRenderVar[i].artistDetail.main.description.replace( /\&lt;/g, '<' ).replace( /\&gt;/g, '>' ).replace( /\&amp;/g, '&' ) + " </div>";

							if ( (allRenderVar[i].customArtistButtonText) && (allRenderVar[i].customArtistLink) ) {
								artistsTab += "<div class='customArtistButtonText'><a target='_blank' href='"+allRenderVar[i].customArtistLink+"'><p>"+allRenderVar[i].customArtistButtonText+"</p></a></div></div><div id='artist-tab-c' class='globalvideo embed-"+allRenderVar[i].id+" video'>";
							} else {
								artistsTab += "</div><div id='artist-tab-c' class='globalvideo embed-"+allRenderVar[i].id+" video'>";
							}


							if ( allRenderVar[i].hasOwnProperty('embedvideos') ) {

								for ( var j = 0, vlen = allRenderVar[i].embedvideos.length; j < vlen; j++) {
									artistsTab += "<div class='embed-container'><iframe class='videoembed-"+j+"-"+allRenderVar[i].id+"' src='' frameborder='0' allowfullscreen></iframe></div>";
								}
							}
							artistsTab += "</div><div id='artist-tab-d' class='globalshare'><div class='artistWrapper'><h2>Share</h2><div class='artistShare mediaObj'> <a target='_blank' data-shareimage='"+self.cleanImageUrl( allRenderVar[i].imageURL )+"' data-shareurl='"+self.compositeJson.baseURL+"#artists/"+allRenderVar[i].id+"/"+allRenderVar[i].sanitizedName+"' data-festivalname='"+self.compositeJson.festivalName+"' data-artistname='"+allRenderVar[i].sanitizedName+"' href='"+allRenderVar[i].facebook+"' class=''> <div class='siconcircle fb media'> <i class='fa fa-facebook-f'></i></div><p>share on facebook</p></a> </div><div class='artistShare mediaObj'><a target='_blank' href='"+allRenderVar[i].twitter+"' data-festivalname='"+self.compositeJson.festivalName+"' data-artistname='"+allRenderVar[i].title+"' class=''><div class='siconcircle tw media'> <i class='fa fa-twitter'></i> </div><p>share on twitter</p></a></div><div class='artistShare mediaObj'> </div></div></div></div></div>";
							artistsTab += "<footer class='socialfooter'> <div class='socialIcons'>";
							if( allRenderVar[i].web && allRenderVar[i].web !== '' ){
								artistsTab += "<a target='_blank' href='"+allRenderVar[i].web+"'><div class='siconcircle ws "+allRenderVar[i].wsToggle+"'> <i class='fa fa-bullseye'></i> </div></a>";
							}
							if( allRenderVar[i].facebook && allRenderVar[i].facebook !== '' ){
								artistsTab += "<a target='_blank' href='"+allRenderVar[i].facebook+"'><div class='siconcircle fb "+allRenderVar[i].fbToggle+"'> <i class='fa fa-facebook-f'></i> </div></a>";
							}
							if( allRenderVar[i].youtube_channel && allRenderVar[i].youtube_channel !== '' ){
								artistsTab += "<a target='_blank' href='"+allRenderVar[i].youtube_channel+"'><div class='siconcircle yt "+allRenderVar[i].ycToggle+"'> <i class='fa fa-youtube'></i> </div></a>";
							}
							if( allRenderVar[i].twitter && allRenderVar[i].twitter !== '' ){
								artistsTab += "<a target='_blank' href='"+allRenderVar[i].twitter+"'><div class='siconcircle tw "+allRenderVar[i].twToggle+"'> <i class='fa fa-twitter'></i> </div></a>";
							}
							if( allRenderVar[i].instagram && allRenderVar[i].instagram !== '' ){
								artistsTab += "<a target='_blank' href='"+allRenderVar[i].instagram+"'><div class='siconcircle ig "+allRenderVar[i].inToggle+"'> <i class='fa fa-instagram'></i> </div></a>";
							}
							artistsTab += "</div></footer></ul>";
							//<footer class='socialfooter'><div class='socialIcons'>
							// <a target='_blank' href='"+allRenderVar[i].web+"'><div class='siconcircle ws "+allRenderVar[i].wsToggle+"'> <i class='fa fa-bullseye'></i> </div></a>
							// <a target='_blank' target='_blank' href='"+allRenderVar[i].facebook+"'><div class='siconcircle fb "+allRenderVar[i].fbToggle+"'> <i class='fa fa-facebook-f'></i> </div></a>
							// <a target='_blank' href='"+allRenderVar[i].youtube_channel+"'><div class='siconcircle yt "+allRenderVar[i].ycToggle+"'> <i class='fa fa-youtube'></i> </div></a>
							// <a target='_blank' href='"+allRenderVar[i].twitter+"'><div class='siconcircle tw "+allRenderVar[i].twToggle+"'> <i class='fa fa-twitter'></i> </div></a>
							// <a target='_blank' href='"+allRenderVar[i].instagram+"'><div class='siconcircle ig "+allRenderVar[i].inToggle+"'> <i class='fa fa-instagram'></i> </div></a>
							// </div></footer></ul>";
							artistsTab += "</li>";
					}
				}

				/*var markupObj = $(artistsTab);//,
					//rootTabs = markupObj.find( '.rootTab' ).eq(0);
				//console.log( markupObj );
				var lis = markupObj.filter( 'li.mediaObj' ),
					l = lis.length;
				console.log( lis );
				for( var i=0;i<l;i++ ){
					if( i%3 === 0 ){
						console.log( "here" );
						$( lis[i] ).before( '<div class="artist-row-separator"></div>' );
					}
				}*/
				var markupObj = $(artistsTab);
				markupObj.appendTo(areaToInject);
			/*end*/
			};
			var _renderWhenWhere = function(allRender) {
				var showDays = allRender.when.rootTemplate.showtimeDates,
                    showVenues = allRender.where.rootTemplate;
                // console.log('SHOW ME SHOWDAYS: ', showDays);

				if ( allRender.when ) {
					for ( var i = 0, sl = showDays.length; i < sl; i++ ) {
						var key = showDays[i],
							obj = allRender.when.showsByDate[key];

							toInject = $('#nested-tab-2 .panel-container #schedule\\/'+allRender.when.rootTemplate.showtimeDates[i]+' .dl-menu');
							//console.log('inside renderWhenWhere, show me toInject: ', toInject);

						_renderArtists(obj, 'when', toInject);
					}

				}
				if ( allRender.where ) {
					for ( var i = 0, sl = showVenues.length; i < sl; i++ ) {
                        var key = showVenues[i],
                            obj = allRender.where.showsByVenueName[key];

                            toInject = $('#nested-tab-3 .panel-container #stages-'+allRender.where.sanitizedVenueNames[i]+' .dl-menu');

                        _renderArtists(obj, 'where', toInject);
                    }
                    // console.log('whereRender complete');
				}
			/*end*/
			}
            //console.log('####renderWhenWhere complete');

			_renderArtists(allRender, 'artists', artistsArea);
			_renderWhenWhere(allRender);
            //console.log('end of line, _renderWhenWhere');

		},

		cleanImageUrl: function( url ){
			return url.split( '?' )[0];
		},

		buildErrorScreen: function() {
			//console.log('build error screen');
			var self = this,
				body = $('body'),
				errorView ="<div id='overlay'><div class='forceaspectratio'></div><div class='errormsg'><p>we're sorry, there is some sort of error.</p><p>we're working to fix the issue, please try again later.</p></div><div class='img-container'><img src='http://tsm-festival-lineup-widget.s3.amazonaws.com/img/Preloader.gif' /></div></div>";
				$(errorView).appendTo(body);
		},
		findViewportSize: function() {
			var body = document.body;
			function _findViewportSize() {
				var rect = body.getBoundingClientRect();
				return {
					height: rect.bottom - rect.top,
					width: rect.right - rect.left
				 }
			};
			var viewportSize = _findViewportSize();
			//console.log('*******viewport size:');
			//console.log(viewportSize);
		},
		lazyLoad: function() {
				var self = this;
				var root = window;

			    var echo = {};

			    var _callback = function() {};

			    var offset, poll, delay, useDebounce, unload;

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
		        	    	//console.log(element, 'has been', op + 'ed')
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

			    _detach = function() {
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
				whenwhereTabs = [ '#where-outer-container', '#when-outer-container' ];
			for( var i = 0; i < whenwhereTabs.length; i++ ){
				var tab = $( whenwhereTabs[i] );
				if( tab.length && tab.find( '.tab' ).length ){
					//tab.easytabs();
					tabArray.push( whenwhereTabs[ i ] );
				}
			}
			$( tabArray.join( ',' ) ).easytabs();
			//$('#main-outer-container, #artist-inner-container, #where-outer-container, #when-outer-container').easytabs();
		},
		initFlyin: function(){
			var self = this;
			//flyin module and animations
			//console.log('about to init flyin ##');
			$( '#nested-tab-1, .tab-0, .tab-1, .tab-2, .tab-3, .tab-4' ).dlmenu();

		},
		onWindowLoadEvent : function(vidlisting) {
			var self = this,
				vidlisting = vidlisting;
			$(window).load(function() {
                self.onNavTabClickEvent(vidlisting);
				self.initTabs();
				self.initFlyin();
				//console.log('removing overlay');
				$('#overlay').remove();
			});
		},
		setEmbedStyles: function(embedSettings) {
			//console.log('within setEmbedStyles, show me embedSettings: ', embedSettings)
			var self = this;
			var customStyles = 
			".tab-container {background-color: "+embedSettings.bodyBGColor+"}"+
			".artists .artistSlot .artistInfo, .artists .artistSlot .artistInfo p, .customArtistButtonTextRoot, .customArtistButtonText, .artistShare a p, .widgetMessage {color: "+embedSettings.artistCopyColor+"}"+
			"#nested-tab-1 .artists .artistSlot .artistInfo p:last-child, .dl-submenu .artistTime, .artists li a div p span.artistTime {color: "+embedSettings.artistCTAColor+"}"+
			".customArtistButtonText a, .customArtistButtonTextRoot, ul.days li.active i, .places a:hover, .places li.active a, .customArtistButtonTextRoot, .dl-submenu li.dl-back > a, .ribbon span{background-color: "+embedSettings.artistCTABGColor+"}"+
			".artist-row-separator {background-color:"+embedSettings.artistModuleBorderColor+";}";
			if( embedSettings.css !== '' ){
				customStyles += embedSettings.css;
			}
			$( [ "<style id='embedCodeStyles' type='text/css'>", customStyles, "</style>" ].join( '' ) ).appendTo('head');
		},
		renderiFrame: function(vidlisting, event) {

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
					// console.log('<<<<,inside src adding loop within renderiFrame');
					//console.log('artistVids: ',artistVids,' artistVids length: ', artistVids.length);
					for ( var i = 0, alen = artistVids.length; i < alen; i++ ) {
						videoembedID = 'videoembed-'+i+'-'+artistID;
						ytURL = artistVids[i];
						getiframe = document.getElementsByClassName(videoembedID);
						//console.log( getiframe[j] );
						for (var j = 0, ilen = getiframe.length; j < ilen; j++) {
							if( ytURL === '' ){
								if( getiframe[j] && getiframe[j].parentNode && getiframe[j].parentNode.parentNode ){
									getiframe[j].parentNode.parentNode.removeChild( getiframe[j].parentNode );
								}
							}else{
								getiframe[j].src = 'https:' + ytURL;
							}
						}
					
					}

				} else if ( event.target.id !== 'video') {

					for ( var i = 0, ilen = iframeArr[0].length; i < ilen; i++ ) {
						iframeArr[0][i].src = '';
					}
				}

			} else {
				//console.log('no videos found in vidlisting');
			}

		},
		FBShare: function() {
			var parentURL = document.referrer;
			FB.ui(
			 {
			  method: 'share',
			  href: parentURL,
			caption:'See artist at festival',
			picture:'http://popcrush.com/files/2016/04/glamour1.jpg?w=1020&h=495&zc=1&s=0&a=t&q=89',
			description:'See ',
			message:'See ',
			display:'popup'
			}, function(response){});
		},
		onNavTabClickEvent : function(vidlisting) {
			var self = this,
				vidlisting = vidlisting,
				videoTab = $('.dl-subviewopen li.active'),
				navTabs = $('#navtabs.etabs li');

            $('#navtabs, .panel-container, .artistSlot').on('click', function(){
            		self.lazyLoad();
            		self.resizeIframe();
            });
            //$('.active #video').on('click', function(){
            $('#artist-inner-container .etabs li a').on('click', function( event ){
            	//console.log('render iframe event clicked');
            	self.renderiFrame(vidlisting, event);
            });
		},
		onHashChangeEvent: function() {
			var self = this;
			var afterHash = window.location.hash.slice(1);
			// console.log('------inside onHashChangeEvent');

			var _getPageName = function(){
				var pathName = window.location.pathname,
					pageName = '';

				if ( pathName.indexOf('/') != -1 ) {
					pageName = pathName.split('/').pop();
				}
				else {
					pageName = pathName;
				}
				return pageName;
			}
			var pgName = _getPageName();
			// console.log('showing page name from URL: ',pgName);
			// console.log('showing string in URL after hash: ', afterHash);
			// if ("onhashchange" in window) {
			//     alert("The browser supports the hashchange event!");
			// }

			// if (location.hash === "#artists") {
			// 	alert('onHashChangeEvent found #artists');
			// }
		},
		initGlobalEvents: function(){
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
			// w.open( 'https://www.facebook.com/sharer/sharer.php?u=' + w.top.location.href + '?trackback=tsm_lineupwidget' , 'sharer', 'toolbar=0,status=0,width=548,height=325' );

			var shareUrl = elem.getAttribute( 'data-shareurl' ).split( '#' );
			w.open( 'https://www.facebook.com/sharer/sharer.php?u='+ shareUrl[0] + '?trackback=tsm_lineupwidhet#' + shareUrl[1], 'sharer', 'toolbar=0,status=0,width=548,height=325' );
		},
		popTwitterShare: function( elem ){
			w.open( 'https://twitter.com/intent/tweet?url=' + w.top.location.href + '?trackback=tsm_lineupwidget&text=See ' + elem.getAttribute( 'data-artistname' ) + ' at ' + elem.getAttribute( 'data-festivalname' ) + '.' , 'sharer', 'toolbar=0,status=0,width=548,height=325' );
		}
	}
	lineupwWidget.init();

})(window,document,jQuery);