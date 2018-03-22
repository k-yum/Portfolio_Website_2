 $(function() {
      // Select link by id and add click event
      $('.scroll-for-more').click(function() {

        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#about_intro").offset().top }, // Tell it to scroll to the top #bottom
          600 // How long scroll will take in milliseconds
        );

        // Prevent default behavior of link
        return false;
      });
    });