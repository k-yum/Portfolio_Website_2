$(document).ready(function() {
  
  $('.about_me').css('opacity', 0);
  $('.about_HIT').css('opacity', 0);
  $('.icons').css('opacity', 0);
  $('.HIT_info').css('opacity',0);
  $('.hire').css('opacity', 0);
  
  $('.about_me').waypoint(function() {
    $('.about_me').addClass('animated_fast fadeInLeft');
  }, {
    offset: '50%'
  });
  $('.about_HIT').waypoint(function() {
    $('.about_HIT').addClass('animated_fast fadeInUp');
  }, {
    offset: '90%'
  });
  $('.icons').waypoint(function() {
    $('.icons').addClass('animated_fast fadeInRight');
  }, {
    offset: '50%'
  });
  $('.HIT_info').waypoint(function() {
    $('.HIT_info').addClass('animated_fast fadeInUp');
  }, {
    offset: '50%'
  });
  $('.hire').waypoint(function() {
    $('.hire').addClass('animated_fast fadeInRight');
  }, {
    offset: '100%'
  });

  
});