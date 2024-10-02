(function ($) {

  "use strict";

     // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

    // ANIMATE SKILLS PROGRESS BARS
  function animateSkills() {
    $('.progress-bar').each(function() {
      var bar = $(this);
      var value = bar.attr('aria-valuenow');
      bar.css('width', value + '%');
    });
  }

  // Check if element is in viewport
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

  // On scroll event
  $(window).on('scroll', function() {
    if (isScrolledIntoView('.skills')) {
      animateSkills();
    }
  });

  // Trigger animation on load if in view
  if (isScrolledIntoView('.skills')) {
    animateSkills();
  }

//   document
//   .getElementById("send-button")
//   .addEventListener("click", function () {
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var subject = document.getElementById("subject").value;
//     var message = document.getElementById("message").value;
    
//     // Construct the WhatsApp URL
// const phoneNumber = +2349029282035;
// const whatsappMessage = `
//   Name: ${name}
//   Email: ${email}
//   Subject: ${subject}
//   Message: ${message}
// `;
// const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

// // Open WhatsApp URL
// window.open(whatsappUrl, '_blank');
//   });


 })(jQuery);
