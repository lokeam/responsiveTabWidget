(function( $, window ){

	'use strict';

	// global
	var Modernizr = window.Modernizr, $body = $( 'body' ),
		hashCheckedOnLoad = 0;
	$.DLMenu = function( options, element ){
		this.$el = $( element );
		this._init( options );
	};

	// the options
	$.DLMenu.defaults = {
		// classes for the animation effects
		animationClasses: {
			classin: 'dl-animate-in-2',
			classout: 'dl-animate-out-2'
		},
		// callback: click a link that has a sub menu
		// el is the link element (li); name is the level name
		onLevelClick: function( el, name ){
			return false;
		},
		// callback: click a link that does not have a sub menu
		// el is the link element (li); ev is the event obj
		onLinkClick: function( el, ev ){
			return false;
		},
		backLabel: 'Back',
		// Change to "true" to use the active item as back link label.
		useActiveItemAsBackLabel: true,
		// Change to "true" to add a navigable link to the active item to its child
		// menu.
		useActiveItemAsLink: false,
		// On close reset the menu to root
		resetOnClose: true
	};

	$.DLMenu.prototype = {
		_init: function( options ){
			// options
			this.options = $.extend( true, {}, $.DLMenu.defaults, options );
			// cache some elements and initialize some variables
			this._config();

			var animEndEventNames = {
				'WebkitAnimation': 'webkitAnimationEnd',
				'OAnimation': 'oAnimationEnd',
				'msAnimation': 'MSAnimationEnd',
				'animation': 'animationend'
			}, transEndEventNames = {
				'WebkitTransition': 'webkitTransitionEnd',
				'MozTransition': 'transitionend',
				'OTransition': 'oTransitionEnd',
				'msTransition': 'MSTransitionEnd',
				'transition': 'transitionend'
			};
			// animation end event name
			this.animEndEventName = animEndEventNames[Modernizr.prefixed( 'animation' )] + '.dlmenu';
			// transition end event name
			this.transEndEventName = transEndEventNames[Modernizr.prefixed( 'transition' )] + '.dlmenu';
			// support for css animations and css transitions
			this.supportAnimations = Modernizr.cssanimations;
			this.supportTransitions = Modernizr.csstransitions;

			this._initEvents();

		},
		_config: function(){
			this.open = false;
			this.$trigger = this.$el.children( '.dl-trigger' );

			/*

			 2/24/2016
			 change root $menu from ul.artists to #tabs
			 */
			// this.$menu = this.$el.children( 'ul.artists' );
			this.$menu = this.$el.children( 'ul.artists' );
			this.$menutop = $( '#tabs' );
			this.$menuitems = this.$menu.find( 'li:not(.dl-back)' );
			this.$el.find( 'ul.dl-submenu' ).prepend( '<li class="dl-back top"><i class="fa fa-angle-left fa-2x"></i><a id="dl-back-a" href="javascript:void(0)">' + this.options.backLabel + '</a></li>' );
			this.$back = this.$menu.find( 'li.dl-back' );
			// Set the label text for the back link.
			if( this.options.useActiveItemAsBackLabel ){
				this.$back.each( function(){
					var $this = $( this ), parentLabel = $this.parents( 'li:first' ).find( 'a:first' ).find( '.artistInfo' ).find( 'p:first' ).text();
					$this.find( 'a' ).html( parentLabel );
				} );
			}
			// If the active item should also be a clickable link, create one and put
			// it at the top of our menu.
			if( this.options.useActiveItemAsLink ){
				this.$el.find( 'ul.dl-submenu' ).prepend( function(){
					var parentli = $( this ).parents( 'li:not(.dl-back):first' ).find( 'a:first' );
					var hideLast = $( '.dl-menu li' ).last().toggleClass( 'hideme' );
					return '<li class="dl-parent"><a href="' + parentli.attr( 'href' ) + '">' + parentli.text() + '</a></li>';
				} );
			}

		},
		_initEvents: function(){
			var self = this;

			var
				triggerHashFlyin = function( target ){
					var $item = target, $everything = $item.children( 'div.tab-container' ), $submenu = $item.children( 'ul.dl-submenu' ), $parent = $( 'ul.dl-menu' ), $lastchild = $( 'ul.dl-menu' ).children().last(), $customButton = $( '.customArtistButtonTextRoot' ), $widgetMessage = $( '.widgetMessage' ), $places = $( '.places' ), $month = $( '.month' ), $days = $( '.days' ), $announce = $( '.announcements' ), $menutop = $( '#outer-container' ), $wrapper = $( '.wrapper' );

					$lastchild.addClass( 'hideme' );
					$customButton.addClass( 'hide' );
					$announce.addClass( 'hide' );
					//console.log( event, event.currentTarget );
					if( ($submenu.length > 0) ){//} && !($( event.currentTarget ).hasClass( 'dl-subviewopen' )) ){	//rishi - commenting this shit out - 1: event.currentTarget not being used anywhere. 2: its always window on the browsers it work... so i doubt $(window).hasClass will return any shit ever

						var $flyin = $submenu.clone().css( 'opacity', 0 ).insertAfter( self.$menu );
						var onAnimationEndFn = function(){
							self.$menu.off( self.animEndEventName ).removeClass( self.options.animationClasses.classout ).addClass( 'dl-subview' );
							$widgetMessage.addClass( 'hide' );
							$places.addClass( 'hide' );
							$month.addClass( 'hide' );
							$days.addClass( 'hide' );
							$item.find( '.tab-container' ).addClass( 'top' );
							$item.addClass( 'dl-subviewopen' ).parents( '.dl-subviewopen:first' ).removeClass( 'dl-subviewopen' ).addClass( 'dl-subview' );
							$flyin.remove();
						};

						setTimeout( function(){
							$flyin.addClass( self.options.animationClasses.classin );
							self.$menu.addClass( self.options.animationClasses.classout );
							if( self.supportAnimations ){
								self.$menu.on( self.animEndEventName, onAnimationEndFn );

							}else{
								onAnimationEndFn.call();
							}

							self.options.onLevelClick( $item, $item.children( 'a:first' ).text() );
						} );
						return false;

					}else{
						self.options.onLinkClick( $item, event );
					}
				},
				hashCheck = function(){
					var artistDeeplink = true, afterHash = window.top.location.hash.slice( 1 );

					if( (new RegExp( 'artists' )).test( afterHash ) ){

						var artistId = afterHash.match( /\d+/g );
						if( artistId != null ){

							var numbersOnly = afterHash.replace( /\D/g, '' );
							var elementToOpen = $( 'li#' + numbersOnly );

							if( typeof elementToOpen[0] !== 'undefined' ){


								triggerHashFlyin( elementToOpen );
							}
						}
					}
				};


			if( window.top.location.hash ){
				if( !hashCheckedOnLoad ){
					hashCheckedOnLoad = 1;
					hashCheck();
				}
			}

			this.$menuitems.on( 'click.dlmenu', function( event ){
				//event.stopPropagation();
				if( !$( event.currentTarget ).hasClass( 'dl-subviewopen' ) ){
					var elem = window.top.document.querySelector( '#lineupwidget-iframe' ), rect = elem.getBoundingClientRect(),
						padding = 0;
					if( window.lineupSettings && window.lineupSettings.topSnapPadding !== undefined && window.lineupSettings.topSnapPadding !== '' ){
						padding = parseInt( window.lineupSettings.topSnapPadding, 10 );
					}

					//window.top.scrollTo( 0, window.top.document.body.scrollTop + rect.top - padding );	//rishi - firefox was returns 0 on document.body.scrollTop on sites, but not on dev environment(for some weird reason). $(window.top).scrollTop() does all the browser checks. so switching to that shit.
					window.top.scrollTo( 0, $( window.top ).scrollTop() + rect.top - padding );
				}
				var $item = $( this ), $everything = $item.children( 'div.tab-container' ), $submenu = $item.children( 'ul.dl-submenu' ), $parent = $( 'ul.dl-menu' ), $lastchild = $( 'ul.dl-menu' ).children().last(), $customButton = $( '.customArtistButtonTextRoot' ), $widgetMessage = $( '.widgetMessage' ), $places = $( '.places' ), $month = $( '.month' ), $days = $( '.days' ), $announce = $( '.announcements' ), $menutop = $( '#outer-container' ), $wrapper = $( '.wrapper' );

				$lastchild.addClass( 'hideme' );
				$customButton.addClass( 'hide' );
				$announce.addClass( 'hide' );

				// Only go to the next menu level if one exists AND the link isn't the
				// one we added specifically for navigating to parent item pages.
				if( ($submenu.length > 0) && !($( event.currentTarget ).hasClass( 'dl-subviewopen' )) ){

					var $flyin = $submenu.clone().css( 'opacity', 0 ).insertAfter( self.$menu );
					//var $flyin = $everything.clone().css( 'opacity', 0 ).insertAfter( $menutop ),
					var onAnimationEndFn = function(){
						self.$menu.off( self.animEndEventName ).removeClass( self.options.animationClasses.classout ).addClass( 'dl-subview' );
						$widgetMessage.addClass( 'hide' );
						$places.addClass( 'hide' );
						$month.addClass( 'hide' );
						$days.addClass( 'hide' );
						$item.find( '.tab-container' ).addClass( 'top' );
						$item.addClass( 'dl-subviewopen' ).parents( '.dl-subviewopen:first' ).removeClass( 'dl-subviewopen' ).addClass( 'dl-subview' );

						$flyin.remove();
					};

					setTimeout( function(){
						$flyin.addClass( self.options.animationClasses.classin );
						self.$menu.addClass( self.options.animationClasses.classout );
						if( self.supportAnimations ){
							self.$menu.on( self.animEndEventName, onAnimationEndFn );

						}else{
							onAnimationEndFn.call();
						}

						self.options.onLevelClick( $item, $item.children( 'a:first' ).text() );
					} );
					return false;

				}else{
					self.options.onLinkClick( $item, event );
				}

			} );

			this.$back.on( 'click.dlmenu', function( event ){
				var $this = $( this );

				// if ( artistDeeplink ) {
				//     $this = elementToOpen;
				// }

				var $submenu = $this.parents( 'ul.dl-submenu:first' ), $item = $submenu.parent(), $flyin = $submenu.clone().insertAfter( self.$menu ), $lastchild = $( 'ul.dl-menu' ).children().last(), $customButton = $( '.customArtistButtonTextRoot' ), $widgetMessage = $( '.widgetMessage' ), $places = $( '.places' ), $month = $( '.month' ), $days = $( '.days' ), $announce = $( '.announcements' );

				$widgetMessage.removeClass( 'hide' );
				$places.removeClass( 'hide' );
				$month.removeClass( 'hide' );
				$days.removeClass( 'hide' );

				var onAnimationEndFn = function(){
					self.$menu.off( self.animEndEventName ).removeClass( self.options.animationClasses.classin );
					$flyin.remove();
					$lastchild.removeClass( 'hide' );
					$customButton.removeClass( 'hide' );

				};

				setTimeout( function(){
					$flyin.addClass( self.options.animationClasses.classout );
					self.$menu.addClass( self.options.animationClasses.classin );
					if( self.supportAnimations ){
						self.$menu.on( self.animEndEventName, onAnimationEndFn );
					}else{
						onAnimationEndFn.call();
					}

					$announce.removeClass( 'hide' );
					$item.removeClass( 'dl-subviewopen' );

					var $subview = $this.parents( '.dl-subview:first' );
					if( $subview.is( 'li' ) ){
						$subview.addClass( 'dl-subviewopen' );
					}
					$subview.removeClass( 'dl-subview' );
				} );
			} );

		},
		closeMenu: function(){
			if( this.open ){
				this._closeMenu();
			}
		},
		_closeMenu: function(){
			var self = this, onTransitionEndFn = function(){
				self.$menu.off( self.transEndEventName );
				if( self.options.resetOnClose ){
					self._resetMenu();
				}
			};

			this.$menu.removeClass( 'dl-menuopen' );
			this.$menu.addClass( 'dl-menu-toggle' );
			this.$trigger.removeClass( 'dl-active' );

			if( this.supportTransitions ){
				this.$menu.on( this.transEndEventName, onTransitionEndFn );
			}else{
				onTransitionEndFn.call();
			}

			this.open = false;
		},
		openMenu: function(){
			if( !this.open ){
				this._openMenu();
			}
		},
		_openMenu: function(){
			var self = this;
			// clicking somewhere else makes the menu close
			$body.off( 'click' ).on( 'click.dlmenu', function(){
				self._closeMenu();
			} );
			this.$menu.addClass( 'dl-menuopen dl-menu-toggle' ).on( this.transEndEventName, function(){
				$( this ).removeClass( 'dl-menu-toggle' );
			} );
			this.$trigger.addClass( 'dl-active' );
			this.open = true;
		},
		// resets the menu to its original state (first level of options)
		_resetMenu: function(){
			this.$menu.removeClass( 'dl-subview' );
			this.$menuitems.removeClass( 'dl-subview dl-subviewopen' );
		}
	};

	var logError = function( message ){
		if( window.console ){
			window.console.error( message );
		}
	};

	$.fn.dlmenu = function( options ){
		if( typeof options === 'string' ){
			var args = Array.prototype.slice.call( arguments, 1 );
			this.each( function(){
				var instance = $.data( this, 'dlmenu' );
				if( !instance ){
					logError( "cannot call methods on dlmenu prior to initialization; " + "attempted to call method '" + options + "'" );
					return;
				}
				if( !$.isFunction( instance[options] ) || options.charAt( 0 ) === "_" ){
					logError( "no such method '" + options + "' for dlmenu instance" );
					return;
				}
				instance[options].apply( instance, args );
			} );
		}else{
			this.each( function(){
				var instance = $.data( this, 'dlmenu' );
				if( instance ){
					instance._init();
				}else{
					instance = $.data( this, 'dlmenu', new $.DLMenu( options, this ) );
				}
			} );
		}
		return this;
	};

})( jQuery, window );