/**
 * This is the starting point for application
 * @author: beppek
 * @version: 0.1
 * */

"use strict";

$(document).ready(function(){

    console.log($(window).height());

    console.log($(document).find("title").text());

    if ($(window).width() <= 600) {
        if ($(document).find("title").text() === "Beppe Karlsson") {
            $(".site-header").addClass("open");
        }
    } else {
        $(".site-header").addClass("open");
    }

    $(".close-menu").click(function(e) {
       toggleMenu(e);
    });

    $(".open-menu").click(function(e) {
       toggleMenu(e);
    });

});

/**
 * This function toggles the menu
 * @param e - Event parameter
 * */
function toggleMenu(e) {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }

    if ($(".site-header").hasClass("open")) {
        $(".site-header").removeClass("open");
        $(".site-header").addClass("closed");
    } else {
        $(".site-header").removeClass("closed");
        $(".site-header").addClass("open");
    }
}