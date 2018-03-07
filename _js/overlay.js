

$(document).ready(function () {
  'use strict';
  $('#toggle').click(function () {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
  });
});
