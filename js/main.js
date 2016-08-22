/**
 * This is the starting point for application
 * @author: beppek
 * @version: 0.1
*/

"use strict";

$(document).ready(function(){

    $(".close-menu").click(function(e) {
       e.preventDefault();
       e.stopPropagation();
       $(".open-menu").show();
       $(".site-header").toggleClass("closed open");
    });

    $(".open-menu").click(function(e) {
       e.preventDefault();
       e.stopPropagation();
       $(".site-header").toggleClass("open closed");
       $(".open-menu").hide();
    });

});