'use strict';

var $ = require('jquery');

$(function() {

  var $inputs = $('.c-input');
  $inputs.on("focusout", ".c-input__field", function(){

    var text_val = $(this).val();

    if(text_val === "") {

      $(this).parent().removeClass('is-filled');

    } else {

      $(this).parent().addClass('is-filled');

    }


  });

});
