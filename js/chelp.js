// helper list
function cleanImageUrl( url ) {
	if (url == undefined) {
		return '';
	} else {
		return url.split( '?' )[0];
	}

}

function ifValEmpty ( val ) {
	return val || '';
}

function divider( venueId, timeStart ) {
	if ( (venueId && venueId!== '') && (timeStart && timeStart !== '') ) {
		return '|';
	} else {
		return '';
	}
}

function replaceChars( description ) {
	return description.replace( /\&lt;/g, '<' ).replace( /\&gt;/g, '>' ).replace( /\&amp;/g, '&' );
}

// register helpers
Handlebars.registerHelper("cleanImageUrl", cleanImageUrl);
Handlebars.registerHelper("ifValEmpty", ifValEmpty);
Handlebars.registerHelper("divider", divider);
Handlebars.registerHelper("replaceChars", replaceChars);