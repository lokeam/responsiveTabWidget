this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["artistSlot"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "            <div class='ribbon'>\n                <span>"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.artistBadge : depth0), depth0))
    + "</span>\n            </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=helpers.helperMissing;

  return "<li id='"
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "' class='artistSlot "
    + alias2(alias1((depth0 != null ? depth0.artistObjLi : depth0), depth0))
    + "'>\n    <a class='"
    + alias2(alias1((depth0 != null ? depth0.artistObjA : depth0), depth0))
    + "' href='javascript:' data-echo-background='"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.artistDetail : depth0)) != null ? stack1.generics : stack1)) != null ? stack1.generic1 : stack1), depth0))
    + "?w=480&h=218&zc=1&a=t'>\n\n<!--         If uses ribbon -->\n"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.artistBadge : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n        <img class='"
    + alias2(alias1((depth0 != null ? depth0.artistObjImg : depth0), depth0))
    + "' src='https://s3.amazonaws.com/tsm-images/global/1x1.gif' data-echo='"
    + alias2((helpers.cleanImageUrl || (depth0 && depth0.cleanImageUrl) || alias4).call(alias3,((stack1 = ((stack1 = (depth0 != null ? depth0.artistDetail : depth0)) != null ? stack1.generics : stack1)) != null ? stack1.generic1 : stack1),{"name":"cleanImageUrl","hash":{},"data":data}))
    + "?w=480&h=218&zc=1&a=t'>\n        <div class='artistInfo'>\n            <p class='artist-title'>"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "\n                <span class='artist-subtitle'>"
    + alias2((helpers.ifValEmpty || (depth0 && depth0.ifValEmpty) || alias4).call(alias3,(depth0 != null ? depth0.subtitle : depth0),{"name":"ifValEmpty","hash":{},"data":data}))
    + "</span>\n            </p>\n            <p class='more-info'>More info</p>\n        </div>\n    </a>\n\n   <!-- Artist flyin -->\n"
    + ((stack1 = container.invokePartial(partials.flyin,depth0,{"name":"flyin","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n</li>";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["artistSlotScheduleTab"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<li id='"
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "' class='artistSlot mediaObj'>\n    <a class='mediaObj' href='javascript:'>\n        <img class='media' src='https://s3.amazonaws.com/tsm-images/global/1x1.gif' data-echo='"
    + alias2((helpers.cleanImageUrl || (depth0 && depth0.cleanImageUrl) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.artistInfo : depth0)) != null ? stack1.imageURL : stack1),{"name":"cleanImageUrl","hash":{},"data":data}))
    + "?w=120&h=120&a=t'>\n            <div class='artistInfo'>\n                <p class='artist-title'>"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "<span class='artist-subtitle'>"
    + alias2(alias1((depth0 != null ? depth0.subtitle : depth0), depth0))
    + "</span></p>\n                <p><span class='artistTime'>"
    + alias2(alias1((depth0 != null ? depth0.originalFormattedStartDay : depth0), depth0))
    + " "
    + alias2(alias1((depth0 != null ? depth0.formattedTimeStart : depth0), depth0))
    + " - "
    + alias2(alias1((depth0 != null ? depth0.formattedTimeEnd : depth0), depth0))
    + "</span>\n                <span class='artistPlace'>"
    + alias2(alias1((depth0 != null ? depth0.venueId : depth0), depth0))
    + "</span></p>\n            </div>\n    </a>\n<!--     Artist flyin -->\n"
    + ((stack1 = container.invokePartial(partials.flyin,depth0,{"name":"flyin","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</li>";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["artistSlotVenueTab"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<li id='"
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "' class='artistSlot mediaObj'>\n    <a class='mediaObj' href='javascript:'>\n        <img class='media' src='https://s3.amazonaws.com/tsm-images/global/1x1.gif' data-echo='"
    + alias2((helpers.cleanImageUrl || (depth0 && depth0.cleanImageUrl) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.artistInfo : depth0)) != null ? stack1.imageURL : stack1),{"name":"cleanImageUrl","hash":{},"data":data}))
    + "?w=120&h=120&a=t'>\n        <div class='artistInfo'>\n            <p class='artist-title'>"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "<span class='artist-subtitle'>"
    + alias2(alias1((depth0 != null ? depth0.subtitle : depth0), depth0))
    + "</span></p>\n            <p><span class='artistTime'>"
    + alias2(alias1((depth0 != null ? depth0.formattedStartDay : depth0), depth0))
    + " "
    + alias2(alias1((depth0 != null ? depth0.formattedTimeStart : depth0), depth0))
    + " - "
    + alias2(alias1((depth0 != null ? depth0.formattedEndDay : depth0), depth0))
    + " "
    + alias2(alias1((depth0 != null ? depth0.formattedTimeEnd : depth0), depth0))
    + "</span></p>\n        </div>\n    </a>\n    <!-- Artist flyin -->\n"
    + ((stack1 = container.invokePartial(partials.flyin,depth0,{"name":"flyin","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</li>";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["artistTab"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <div class='widgetMessage-container'><div class='widgetMessage'>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.widgetMessage : stack1), depth0))
    + "</div></div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.mediaObj : depth0),{"name":"unless","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.artistSlot,depth0,{"name":"artistSlot","data":data,"indent":"                    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.mediaObj : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                <div class='artist-row-separator'></div>\n"
    + ((stack1 = container.invokePartial(partials.artistSlot,depth0,{"name":"artistSlot","data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.customArtistButton,depth0,{"name":"customArtistButton","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div id='nested-tab-1' class='rootTab'>\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.widgetMessage : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    <ul id='artists' class='dl-menu dl-menuopen artists'>\n        <div class='featured'>\n\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.artists : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n        </div>\n\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.artists : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    </ul>\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.buttonText : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n</div>";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["customArtistButton"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class='customArtistButtonTextRoot'><a target='_blank' href='"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.buttonURL : stack1), depth0))
    + "'><p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.buttonText : stack1), depth0))
    + "</p></a></div>";
},"useData":true});

this["Handlebars"]["templates"]["flyin"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                        <div class='artistInfo'>\n                            <p>"
    + alias2(alias1((depth0 != null ? depth0.formattedStartMonth : depth0), depth0))
    + " "
    + alias2(alias1((depth0 != null ? depth0.startDateDayOnly : depth0), depth0))
    + "</p>\n                            <p>\n                                <span class='artistTime'>"
    + alias2(alias1((depth0 != null ? depth0.formattedTimeStart : depth0), depth0))
    + " - "
    + alias2(alias1((depth0 != null ? depth0.formattedTimeEnd : depth0), depth0))
    + "</span>\n                                <span class='artistPlace'>"
    + alias2((helpers.divider || (depth0 && depth0.divider) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.venueId : depth0),(depth0 != null ? depth0.formattedTimeStart : depth0),{"name":"divider","hash":{},"data":data}))
    + " "
    + alias2(alias1((depth0 != null ? depth0.venueId : depth0), depth0))
    + "</span>\n                            </p>\n                        </div>  \n\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                    <div class='customArtistButtonText'>\n                        <a target='_blank' href='"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.flyin : depth0)) != null ? stack1.customArtistLink : stack1), depth0))
    + "'>\n                            <p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.flyin : depth0)) != null ? stack1.customArtistButtonText : stack1), depth0))
    + "</p>\n                        </a>\n                    </div>\n";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.flyin : depth0)) != null ? stack1.embedvideos : stack1),{"name":"each","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=container.escapeExpression;

  return "\n                        <div class='embed-container'>\n                            <iframe class='videoembed-"
    + alias1(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data}) : helper)))
    + "-"
    + alias1(container.lambda((depths[1] != null ? depths[1].objectId : depths[1]), depth0))
    + "' src='' frameborder='0' allowfullscreen></iframe>\n                        </div>\n\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                    <a target='_blank' href='"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.flyin : depth0)) != null ? stack1.web : stack1), depth0))
    + "'>\n                        <div class='siconcircle ws "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.flyin : depth0)) != null ? stack1.wsToggle : stack1), depth0))
    + "'>\n                            <i class='fa fa-bullseye'></i>\n                        </div>\n                    </a>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                    <a target='_blank' href='"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.flyin : depth0)) != null ? stack1.facebook : stack1), depth0))
    + "'>\n                        <div class='siconcircle fb "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.flyin : depth0)) != null ? stack1.fbToggle : stack1), depth0))
    + "'>\n                            <i class='fa fa-facebook-f'></i>\n                        </div>\n                    </a>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                    <a target='_blank' href='"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.flyin : depth0)) != null ? stack1.youtube_channel : stack1), depth0))
    + "'>\n                        <div class='siconcircle yt "
    + alias2(alias1((depth0 != null ? depth0.ycToggle : depth0), depth0))
    + "'>\n                            <i class='fa fa-youtube'></i>\n                        </div>\n                    </a>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                    <a target='_blank' href='"
    + alias2(alias1((depth0 != null ? depth0.twitter : depth0), depth0))
    + "'>\n                        <div class='siconcircle tw "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.flyin : depth0)) != null ? stack1.twToggle : stack1), depth0))
    + "'>\n                            <i class='fa fa-twitter'></i>\n                        </div>\n                    </a>\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                    <a target='_blank' href='"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.flyin : depth0)) != null ? stack1.instagram : stack1), depth0))
    + "'>\n                        <div class='siconcircle ig "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.flyin : depth0)) != null ? stack1.inToggle : stack1), depth0))
    + "'>\n                            <i class='fa fa-instagram'></i>\n                        </div>\n                    </a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=helpers.helperMissing;

  return "<ul class='dl-submenu'>\n    <div id='artist-inner-container' class='tab-container globalabout-active'>\n        <ul class='etabs'>\n            <li class='etabs-nav tab "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.flyin : depth0)) != null ? stack1.scheduleTab : stack1), depth0))
    + "'>\n                <a href='#artist-tab-a' class='embed-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.flyin : depth0)) != null ? stack1.id : stack1), depth0))
    + "'>schedule</a>\n            </li>\n            <li class='etabs-nav tab "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.flyin : depth0)) != null ? stack1.aboutTab : stack1), depth0))
    + "'>\n                <a href='#artist-tab-b' class='embed-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.flyin : depth0)) != null ? stack1.id : stack1), depth0))
    + "'>about</a>\n            </li>\n            <li class='etabs-nav tab "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.flyin : depth0)) != null ? stack1.videoTab : stack1), depth0))
    + "'>\n                <a id='video' href='#artist-tab-c' class='globalvideo embed-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.flyin : depth0)) != null ? stack1.id : stack1), depth0))
    + "'>video</a>\n            </li>\n            <li class='etabs-nav tab "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.flyin : depth0)) != null ? stack1.mediaTab : stack1), depth0))
    + "'>\n                <a href='#artist-tab-d' class='embed-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.flyin : depth0)) != null ? stack1.id : stack1), depth0))
    + "'>share</a>\n            </li>\n        </ul>\n        <div class='panel-container'>\n            <div class='bg' data-echo-background='"
    + alias2((helpers.cleanImageUrl || (depth0 && depth0.cleanImageUrl) || alias4).call(alias3,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.flyin : depth0)) != null ? stack1.artistDetail : stack1)) != null ? stack1.generics : stack1)) != null ? stack1.generic1 : stack1),{"name":"cleanImageUrl","hash":{},"data":data}))
    + "?w=960&a=t'>\n                <img class='full' src='https://s3.amazonaws.com/tsm-images/global/1x1.gif' data-echo='"
    + alias2((helpers.cleanImageUrl || (depth0 && depth0.cleanImageUrl) || alias4).call(alias3,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.flyin : depth0)) != null ? stack1.artistDetail : stack1)) != null ? stack1.generics : stack1)) != null ? stack1.generic1 : stack1),{"name":"cleanImageUrl","hash":{},"data":data}))
    + "?w=960&a=t'/>\n                <div class='flyinProfileGrad'></div>\n            </div>\n\n            <div id='artist-tab-a' class='globalschedule' data-containername='globalschedule'>\n                <div class='artistWrapper'>\n                    <h2>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.flyin : depth0)) != null ? stack1.title : stack1), depth0))
    + "<span class='artist-subtitle'>"
    + alias2((helpers.ifValEmpty || (depth0 && depth0.ifValEmpty) || alias4).call(alias3,((stack1 = (depth0 != null ? depth0.flyin : depth0)) != null ? stack1.subtitle : stack1),{"name":"ifValEmpty","hash":{},"data":data}))
    + "</span></h2>\n\n                    <!-- render venues in schedule tab of artist flyin -->\n"
    + ((stack1 = helpers.each.call(alias3,((stack1 = (depth0 != null ? depth0.flyin : depth0)) != null ? stack1.venues : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </div>\n            </div>\n\n            <!-- render about tab of artist flyin -->\n            <div id='artist-tab-b' class='globalabout' data-containername='globalabout'>\n                <div class='abouttext'>\n                    <h4>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.flyin : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h4> "
    + ((stack1 = (helpers.replaceChars || (depth0 && depth0.replaceChars) || alias4).call(alias3,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.flyin : depth0)) != null ? stack1.artistDetail : stack1)) != null ? stack1.main : stack1)) != null ? stack1.description : stack1),{"name":"replaceChars","hash":{},"data":data})) != null ? stack1 : "")
    + "\n                </div>\n\n"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.customArtistButtonText : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n\n            <!-- render the video tab of artist flyin -->\n            <div id='artist-tab-c' class='globalvideo embed-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.flyin : depth0)) != null ? stack1.id : stack1), depth0))
    + " video' data-containername='globalvideo'>\n"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.flyin : depth0)) != null ? stack1.embedvideos : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n\n            <!-- render share tab of artist flyin -->\n            <div id='artist-tab-d' class='globalshare' data-containername='globalshare'>\n                <div class='artistWrapper'>\n                    <h2>Share</h2>\n                    <div class='artistShare mediaObj'>\n                        <a target='_blank' data-shareimage='"
    + alias2((helpers.cleanImageUrl || (depth0 && depth0.cleanImageUrl) || alias4).call(alias3,((stack1 = (depth0 != null ? depth0.flyin : depth0)) != null ? stack1.imageURL : stack1),{"name":"cleanImageUrl","hash":{},"data":data}))
    + "' data-shareurl='"
    + alias2(alias1(((stack1 = (data && data.root)) && stack1.baseURL), depth0))
    + "#artists/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.flyin : depth0)) != null ? stack1.id : stack1), depth0))
    + "/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.flyin : depth0)) != null ? stack1.sanitizedName : stack1), depth0))
    + "' data-festivalname='"
    + alias2(alias1(((stack1 = (data && data.root)) && stack1.compFestivalName), depth0))
    + "' data-artistname='"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.flyin : depth0)) != null ? stack1.sanitizedName : stack1), depth0))
    + "' href='"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.flyin : depth0)) != null ? stack1.facebook : stack1), depth0))
    + "' class=''>\n                            <div class='siconcircle fb media'>\n                                <i class='fa fa-facebook-f'></i>\n                            </div>\n                            <p>share on facebook</p>\n                        </a>\n                    </div>\n                    <div class='artistShare mediaObj'>\n                        <a target='_blank' href='"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.flyin : depth0)) != null ? stack1.twitter : stack1), depth0))
    + "' data-shareurl='"
    + alias2(alias1(((stack1 = (data && data.root)) && stack1.baseURL), depth0))
    + "#artists/"
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.flyin : depth0)) != null ? stack1.sanitizedName : stack1), depth0))
    + "' data-festivalname='"
    + alias2(alias1(((stack1 = (data && data.root)) && stack1.compFestivalName), depth0))
    + "' data-artistname='"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.flyin : depth0)) != null ? stack1.title : stack1), depth0))
    + "' class=''>\n                            <div class='siconcircle tw media'>\n                                <i class='fa fa-twitter'></i>\n                            </div>\n                            <p>share on twitter</p>\n                        </a>\n                    </div>\n                    <div class='artistShare mediaObj'></div>\n                </div>\n            </div>\n        </div>\n    <!-- render the footer share icon bar -->\n        <footer class='socialfooter'>\n            <div class='socialIcons'>\n\n"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.flyin : depth0)) != null ? stack1.hasweb : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.flyin : depth0)) != null ? stack1.hasfb : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.flyin : depth0)) != null ? stack1.hasyt : stack1),{"name":"if","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.flyin : depth0)) != null ? stack1.hastw : stack1),{"name":"if","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.flyin : depth0)) != null ? stack1.hasig : stack1),{"name":"if","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n            </div>\n        </footer>\n</ul>";
},"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["hbinit"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "		<li class='etabs-nav tab'><a href='#nested-tab-2'>schedule</a></li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "		<li class='etabs-nav tab'><a href='#nested-tab-3'>stages</a></li>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "		<div id='nested-tab-2' class='rootTab'>\n			<div class='tab-container' id='when-outer-container'>\n				<div class='month'>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.when : depth0)) != null ? stack1.rootTemplate : stack1)) != null ? stack1.month : stack1), depth0))
    + "</div>\n				<ul class='etabs days'>\n\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.when : depth0)) != null ? stack1.rootTemplate : stack1)) != null ? stack1.compositeHBWhen : stack1),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n				</ul>\n				<div id='schedule' class='panel-container'>\n\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.when : depth0)) != null ? stack1.rootTemplate : stack1)) != null ? stack1.compositeHBWhen : stack1),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.buttonText : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</div>\n			</div>\n		</div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "					<li class='tab'>\n						<a href='#schedule/"
    + alias2(alias1((depth0 != null ? depth0.showTimeDate : depth0), depth0))
    + "' class='active'>\n							<span>"
    + alias2(alias1((depth0 != null ? depth0.day : depth0), depth0))
    + "</span>\n							<div class='dayofmonth'>"
    + alias2(alias1((depth0 != null ? depth0.dayOfMonth : depth0), depth0))
    + "</div>\n						</a>\n					</li>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "					<div id='schedule/"
    + alias1(container.lambda((depth0 != null ? depth0.showTimeDate : depth0), depth0))
    + "' class='tab-"
    + alias1(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias2,{"name":"index","hash":{},"data":data}) : helper)))
    + "'>\n						<ul class='dl-menu dl-menuopen artists'>\n\n"
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0.shows : depth0),{"name":"each","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n						</ul>\n					</div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "							<div class='artist-row-separator'></div>\n"
    + ((stack1 = container.invokePartial(partials.artistSlotScheduleTab,depth0,{"name":"artistSlotScheduleTab","data":data,"indent":"\t\t\t\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.customArtistButton,depth0,{"name":"customArtistButton","data":data,"indent":"\t\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "		<div id='nested-tab-3' class='rootTab'>\n			<div class='tab-container' id='where-outer-container'>\n				<ul class='etabs places'>\n\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.where : depth0)) != null ? stack1.compositeHBWhere : stack1),{"name":"each","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n				</ul>\n				<div id='stages' class='panel-container'>\n\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.where : depth0)) != null ? stack1.compositeHBWhere : stack1),{"name":"each","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.buttonText : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</div>\n			</div>\n		</div>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "					<li class='tab'><a href='#stages/"
    + alias2(alias1((depth0 != null ? depth0.sanitizedName : depth0), depth0))
    + "'>"
    + alias2(alias1((depth0 != null ? depth0.venueName : depth0), depth0))
    + "</a></li>\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "					<div id='stages/"
    + alias1(container.lambda((depth0 != null ? depth0.sanitizedName : depth0), depth0))
    + "' class='tab-"
    + alias1(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias2,{"name":"index","hash":{},"data":data}) : helper)))
    + "'>\n						<ul class='dl-menu dl-menuopen artists'>\n\n"
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0.shows : depth0),{"name":"each","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n						</ul>\n					</div>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "							<div class='artist-row-separator'></div>\n"
    + ((stack1 = container.invokePartial(partials.artistSlotVenueTab,depth0,{"name":"artistSlotVenueTab","data":data,"indent":"\t\t\t\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class='tab-container dl-menuopen' id='main-outer-container'>\n\n	<!--/* Navigation Tabs Root */-->\n	<ul class='etabs' id='navtabs'>\n\n		<!--auto render artist tab by default-->\n		<li class='etabs-nav tab'><a href='#nested-tab-1'>artists</a></li>\n\n		<!--render schedule tab-->\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.hasDates : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n		<!--render stages tab-->\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.hasVenues : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n	</ul>\n\n	<!--Begin Panel Container-->\n	<div class='panel-container'>\n\n		<!--/* Artists Tab */-->\n"
    + ((stack1 = container.invokePartial(partials.artistTab,depth0,{"name":"artistTab","data":data,"indent":"\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n		<!--/* Schedule Tab */-->\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.hasDates : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.hasVenues : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n	</div>\n</div>";
},"usePartial":true,"useData":true});