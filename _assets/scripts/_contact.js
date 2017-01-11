'use strict';

var $ = require('jquery');
var mfp = require('magnific-popup');
require('jquery-validation');

$(function() {
  var $contactForm =  $('#js-contactForm');

  // initialize the form validation plugin
  $contactForm.validate({
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      name: "required",
      _replyto: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      subject: "required",
      message: "required"
    },
    debug: true,
    // Specify validation error messages
    messages: {
      name: "Please enter your firstname",
      subject: "Please enter your subject",
      _replyto: "Please enter a valid email address",
      message: "Please enter your message"
    },
    errorLabelContainer: "#form-errors",
    wrapper: "li",
    submitHandler: function(form) {
      console.log('no errors in the form');
      console.log($(form).serialize());

      // do other things for a valid form
      // The AJAX
      $.ajax({
        type: 'POST',
        url: 'non.htm',
        data: $(form).serialize(),
        dataType: "json",
        success: function(data) {
          // This is a callback that runs if the submission was a success.
          $.magnificPopup.open({
            items: {
              src: '#mfp-contact-success',
              type: 'inline'
            },
            callbacks: {
              close: function() {
                // Will fire when popup is closed
                console.log('modal close');
                $(form)[0].reset();
              }

            }
          });
          return false;
        },
        error: function(){
          $.magnificPopup.open({
            items: {
              src: '#mfp-contact-error',
              type: 'inline'
            },
            callbacks: {
              close: function() {
                // Will fire when popup is closed
                console.log('modal close');
                //$(form)[0].reset();
              }

            }
          });
        }
      });
      return false;

    }
  });

});

function formSubmitHandler (e) {
  e.preventDefault();
  console.log('form submitted');
  var $form = $(e.target);

  // Open directly via API
  /*$.magnificPopup.open({
    items: {
      src: '#mfp-contact-success',
      type: 'inline'
    }
  });*/
}
