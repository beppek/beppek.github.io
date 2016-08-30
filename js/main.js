/**
 * This is the starting point for application
 * @author: beppek
 * @version: 0.1
*/

"use strict";

$(document).ready(function(){

    console.log($(window).height());

    console.log($(document).find("title").text());

    if ($(window).width() <= 600) {
        if ($(document).find("title").text() === "Beppe Karlsson") {
            $(".site-header").addClass("open");

        } else {
            $(".site-header").removeClass("open");
        }
    }

    $(".close-menu").click(function(e) {
       toggleMenu(e);
    });

    $(".open-menu").click(function(e) {
       toggleMenu(e);
    });

});

function toggleMenu(e) {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    $(".site-header").toggleClass("open closed");
}

// function openMenu(e) {
//     e.preventDefault();
//     e.stopPropagation();
//     $(".site-header").toggleClass("open closed");
// }