/**
 * This is the starting point for application
 * @author: beppek
 * @version: 0.1
*/

"use strict";

$(document).ready(function(){

    console.log($(window).width());


    if ($(window).width() <= 600) {
        closeMenu();

    }

    $(".close-menu").click(function(e) {
       closeMenu(e);
    });

    $(".open-menu").click(function(e) {
       openMenu(e);
    });

});

function closeMenu(e) {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    // $(".open-menu").show();
    $(".site-header").toggleClass("closed open");
}

function openMenu(e) {
    e.preventDefault();
    e.stopPropagation();
    $(".site-header").toggleClass("open closed");
    // $(".open-menu").hide();
}