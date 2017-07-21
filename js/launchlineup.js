(function(w,d){
    var 
        target = d.querySelector( w.lineupSettings.target ),
        settings = JSON.stringify( w.lineupSettings ),
		baseurl = w.lineupSettings.useAmazon ? "http://tsm-festival-lineup-widget.s3.amazonaws.com/" : "http://wac.450f.edgecastcdn.net/80450F/townsquaredigital.com/lineup-widget/",
    	html = "<!doctype html>"+
"<html>"+
    "<head>"+
        "<meta charset='utf-8'>"+
        "<meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'>"+
        "<title>Lineup Widget Prototype</title>"+
        "<meta name='description' content=''>"+
        "<meta name='viewport' content='width=device-width, initial-scale=1'>"+
        "<link href='https://fonts.googleapis.com/css?family=Droid+Sans|Oswald:400,700|Oswald:Light' rel='stylesheet' type='text/css'>"+
        "<link rel='stylesheet' type='text/css' href='" + baseurl + "css/redux.css'>"+
        "<link rel='stylesheet' type='text/css' href='" + baseurl + "css/_mediaqueries.css'>"+
        "<link rel='stylesheet' type='text/css' href='" + baseurl + "css/_animations.css'>"+
        "<script type='text/javascript'>var lineupSettings = " + settings + ";</script>"+
    "</head>"+
    "<body class='content-wrap'>"+
        "<script>"+
            "window.fbAsyncInit = function() {"+
                "FB.init({"+
                    "appId      : '429093007158021',"+
                    "xfbml      : true,"+
                    "version    : 'v2.5'"+
                "});"+
            "};"+
            "(function(d, s, id){"+
                "var js, fjs = d.getElementsByTagName(s)[0];"+
                "if (d.getElementById(id)) {return;}"+
                "js = d.createElement(s); js.id = id;"+
                "js.src = '//connect.facebook.net/en_US/sdk.js';"+
                "fjs.parentNode.insertBefore(js, fjs);"+
            "}(document, 'script', 'facebook-jssdk'));"+
        "</script>"+
        "<script type='text/javascript' src='" + baseurl + "js/lineupwidget.min.js'></script>"+
    "</body>"+
"</html>",
		ifr = d.createElement( 'iframe' );

    ifr.src='javascript:""';
    ifr.id='lineupwidget-iframe';
    ifr.height="100%";
    ifr.width="100%";
    ifr.marginwidth="0";
    ifr.marginheight="0";
    ifr.frameborder="0";
    ifr.scrolling="no";
    ifr.setAttribute( "style","width:100%; min-height:100vh; border:none; border:none;" );
    target.insertBefore( ifr, target.firstChild );
    ifr.contentWindow.document.open();
    ifr.contentWindow.document.write( html );
    ifr.contentWindow.document.close();
})(window.top,window.top.document);