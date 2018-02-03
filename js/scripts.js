/*  Copyright 2014 gokoururi
    This work is free. You can redistribute it and/or modify it under the
    terms of the Do What The Fuck You Want To Public License, Version 2,
    as published by Sam Hocevar. See the COPYING file for more details. */

/*  Remove mascot class from element "main" if its width is <= mascotMinWidth */
function controlMascot(mascot, mascotMinWidth) {
    $(window).resize(function(event) {
        if ( $(window).width() <= mascotMinWidth && $("main").hasClass("mascot") ) {
            removeMascot();
        } else if( $(window).width() > mascotMinWidth && ! $("main").hasClass("mascot") ) {
            setMascot(mascot);
        }
    });
}

function setMascot(mascot) {
    $('main').addClass("mascot");
    $('main').css("background-image", "url(" + mascot + ")");
    $('main').removeClass("plain");
}

function removeMascot() {
    $('main').removeClass("mascot");
    $('main').css("background-image", "");
    $('main').addClass("plain");
}

$(document).ready(function(event) {
    var mascotEnable    = true;
    var mascotPath      = "images/mascots/";
	
	/*
		Dark Souls Pixel Art: 	https://goo.gl/ooT8iQ
		Dark Souls Pixel Art2:	http://zedotagger.deviantart.com/gallery/?offset=24
		Outrun Pixel Art: 		https://goo.gl/E2ZChC

		Note: File has to be in /images/mascots/ with the correct file format.
	*/
	var mascotList      = 	[ 
								'ss1.png','ds1.png','ds2.png','ds3.png','ds4.png',
								'ds6.png','ds7.gif','ds8.png','ds9.gif','ds10.gif',
								'ds11.gif','ds12.gif','ds13.gif','ds14.gif','ds5.png',
								'ds15.gif','ds16.gif','ds17.gif','ds18.gif','ds19.gif',
								'ds21.gif','ds22.gif','ds23.gif','ds24.gif','ds25.gif',
								'ds26.gif','ds27.gif','ds28.gif','ds29.gif','ds30.gif',
								'gs1.png','gs2.png','gs3.png','b1.png','b2.png','b3.png',
								'b4.png','b5.gif','b6.gif','b7.gif','b8.gif','b9.gif',
								'ow1.gif','w1.gif','w2.gif',
                        	];

    var mascot          = mascotPath + mascotList[Math.floor(Math.random() * mascotList.length)];
    var mascotMinWidth  = '0';

    if ( mascotEnable ) {
        setMascot(mascot);
        controlMascot(mascot, mascotMinWidth);
    } else { removeMascot(); }
});
