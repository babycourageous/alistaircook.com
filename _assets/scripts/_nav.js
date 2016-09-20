'use strict';
var $ = require('jquery');

$(document).ready(function() {
  var menuToggle = $("#nav-toggle").unbind();
  $("#js-navigation-menu").removeClass("show");

  menuToggle.on("click", function(e) {
    e.preventDefault();

    $("#nav-list").slideToggle(function(){
      if($("#nav-list").is(":hidden")) {
        $("#nav-list").removeAttr("style");
      }
    });
  });
});
