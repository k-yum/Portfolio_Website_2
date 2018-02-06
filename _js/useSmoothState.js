$(document).ready(function(){
    // to fade in on page load
    $("body").css("display", "none");
    $("body").fadeIn(500); 
    // to fade out before redirect
    $('a').click(function(e){
        redirect = $(this).attr('href');
        e.preventDefault();
        $('body').fadeOut(500, function(){
            document.location.href = redirect
        });
    });
})