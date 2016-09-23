'use strict';
var $ = require('jquery');

/*
 *
 * Find elements on scroll
 *
 * Source: http://codetheory.in/change-active-state-links-sticky-navigation-scroll/
 */
var sections = $('section'),
    nav = $('nav'),
    nav_height = 50; //nav.outerHeight();

$(window).scroll(function () {
  var cur_pos = $(this).scrollTop();

  var scrollHeight = $(document).height();
  var scrollPosition = $(window).height() + $(window).scrollTop();


  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('nav__link--active');
      //sections.removeClass('active');

      //$(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('nav__link--active');
    } else if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
        console.log('end');
        nav.find('a').removeClass('nav__link--active');
        nav.find('a[href="#contact"]').addClass('nav__link--active');
    }

  });
});

$(document).ready(function() {
  /***************** Nav Toggle ******************/

  var menuToggle = $("#nav-toggle");
  //$("#nav-list").removeClass("show");

  /* When hamburger icon is clicked */
  menuToggle.click(function() {
    event.preventDefault();
    $(this).toggleClass('is-active');

    $("#nav-list").slideToggle();

  });

  /* When nav item is clicked */
  $('#nav-list').find('a').on('click', function (e) {
    e.preventDefault();

    menuToggle.toggleClass('is-active');
    $("#nav-list").slideToggle();

    var $el = $(this),
        id = $el.attr('href');


    $('html, body').animate({
      scrollTop: $(id).offset().top - nav_height
    }, 500);

  });


});
