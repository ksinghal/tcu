// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
// = require jquery
// = require jquery_ujs
// = require bootstrap
// = require galleria
// = require_tree .

$( document ).ready(function() {
  $('body').on('touchstart.dropdown', '.dropdown-menu', function (e) { e.stopPropagation(); });
  if(!$("#galleria").length == 0) {
    Galleria.loadTheme('galleria/themes/classic/galleria.classic.min.js');
    Galleria.run('#galleria', {
      autoplay: 5000,
      transition: 'fadeslide',
      easing: 'swing',
      showInfo: false,
      showCounter: false,
      thumbnails: false,
      height: 0.45,
      imageCrop: 'height',
      fullscreenDoubleTap: false,
      imagePan: true,
    });
  };
  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash,
    $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top - 50
    }, 900, 'swing', function () {
        window.location.hash = target;
    });
  });
});