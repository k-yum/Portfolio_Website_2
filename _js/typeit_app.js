$(document).ready(function() {
  
  new TypeIt('#about-type', {
    speed: 25,
    autoStart: false
  })
  .type('The name\'s Yum')
  .break();
$('.ti-cursor').remove();

new TypeIt('#about-type-2', {
    speed: 25,
    autoStart: false
  })
  .pause(1000)
  .type('Kevin Yum')
  .break();
$('.ti-cursor').remove();

new TypeIt('#about-type-3', {
    speed: 10,
    autoStart: false
  })
  .pause(2000)
  .type('UX/UI designer &amp;')
  .break()
  .type('Front End Developer');
$('.ti-cursor').remove();
  
});


