$(document).ready(function() {
  
  // About page - hide element
  $('.about_me').css('opacity', 0);
  $('.about_HIT').css('opacity', 0);
  $('.icons').css('opacity', 0);
  $('.HIT_info').css('opacity',0);
  $('.hire').css('opacity', 0);
  
  // GW showcase - hide element
  $('#GW-title-section').css('opacity', 0);
  $('#GW-info-section').css('opacity', 0);
  $('.GW-about-services').css('opacity', 0);
  $('.showcase-GWService-pics').css('opacity', 0);
  $('.showcase-GW-pics').css('opacity', 0);
  
  // Ascend showcase - hide element
  $('#ascend-title-section').css('opacity', 0);
  $('#ascend-info-section').css('opacity', 0);
  $('.showcase-ascend-pics.newcomers').css('opacity', 0);
  $('.ascend-for-newcomers').css('opacity', 0);
  $('.showcase-ascend-pics.members').css('opacity', 0);
  $('.ascend-for-members').css('opacity', 0);
  
  // About page - waypoints
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

  // GW showcase - waypoints
  $('#GW-title-section').waypoint(function() {
    $('#GW-title-section').addClass('animated_fast fadeInLeft');
  }, {
    offset: '80%'
  });
  $('#GW-info-section').waypoint(function() {
    $('#GW-info-section').addClass('animated_fast fadeInUp');
  }, {
    offset: '70%'
  });
  $('.GW-about-services').waypoint(function() {
    $('.GW-about-services').addClass('animated_fast fadeInUpBig');
  }, {
    offset: '70%'
  });
  $('.showcase-GWService-pics').waypoint(function() {
    $('.showcase-GWService-pics').addClass('animated_fast fadeInRightBig');
  }, {
    offset: '70%'
  });
  $('.showcase-GW-pics').waypoint(function() {
    $('.showcase-GW-pics').addClass('animated_fast fadeInLeftBig');
  }, {
    offset: '80%'
  });
  
  // Ascend showcase - waypoints
  $('#ascend-title-section').waypoint(function() {
    $('#ascend-title-section').addClass('animated_fast fadeInLeft');
  }, {
    offset: '80%'
  });
  $('#ascend-info-section').waypoint(function() {
    $('#ascend-info-section').addClass('animated_fast fadeInUp');
  }, {
    offset: '70%'
  });
  $('.showcase-ascend-pics.newcomers').waypoint(function() {
    $('.showcase-ascend-pics.newcomers').addClass('animated_fast fadeInLeftBig');
  }, {
    offset: '70%'
  });
  $('.ascend-for-newcomers').waypoint(function() {
    $('.ascend-for-newcomers').addClass('animated_fast fadeInUpBig');
  }, {
    offset: '70%'
  });
  $('.showcase-ascend-pics.members').waypoint(function() {
    $('.showcase-ascend-pics.members').addClass('animated_fast fadeInLeftBig');
  }, {
    offset: '70%'
  });
  $('.ascend-for-members').waypoint(function() {
    $('.ascend-for-members').addClass('animated_fast fadeInUpBig');
  }, {
    offset: '70%'
  });
  
});