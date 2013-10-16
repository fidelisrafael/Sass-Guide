var sassGuide = sassGuide || {};
/*
*
*
*
*
*/
sassGuide.menu = function () {
    'use strict';
    $(window).scroll(function () {
        if (isScrolledIntoView("#fixNav")) {
            $(".submenu").removeClass("fixed");
        } else {
            $(".submenu").addClass("fixed");
        }
        if (isScrolledIntoView("#bloco-1")) {
            $(".submenu a[href^='#']").removeClass("current");
            $("#la1").addClass("current");
        } else {
            if (isScrolledIntoView("#bloco-2")) {
                $(".submenu a[href^='#']").removeClass("current");
                $("#la2").addClass("current");
            } else {
                if (isScrolledIntoView("#bloco-3")) {
                    $(".submenu a[href^='#']").removeClass("current");
                    $("#la3").addClass("current");
                } else {
                    if (isScrolledIntoView("#bloco-4")) {
                        $(".submenu a[href^='#']").removeClass("current");
                        $("#la4").addClass("current");
                    } else {
                        if (isScrolledIntoView("#bloco-5")) {
                            $(".submenu a[href^='#']").removeClass("current");
                            $("#la5").addClass("current");
                        }
                    }
                }
            }
        }
    });
};