function carousel(){
    	$('.carousel').carousel({
        interval: 6000
    })
   };

$('.social_media li').on('mouseenter', function(){
	var animationName = "animated shake";
	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	$(this).addClass(animationName).one(animationEnd, function(){
		$(this).removeClass(animationName);
	});
})
$('.donate_button').on('mouseenter', function(){
	var animationName = "animated tada";
	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	$(this).addClass(animationName).one(animationEnd, function(){
		$(this).removeClass(animationName);
	});
})

$("#about_but").click(function() {
    $('html, body').animate({
        scrollTop: $(".social_media").offset().top
    }, 2000);
});
$("#mission_but").click(function() {
    $('html, body').animate({
        scrollTop: $("#mission").offset().top
    }, 2000);
});
$("#contact_but").click(function() {
    $('html, body').animate({
        scrollTop: $("#location").offset().top
    }, 2000);
});

$(window).scroll(function(){
      if ($(this).scrollTop() > 135) {
          $('.navbar-brand').addClass('fixed');
      } else {
          $('.navbar-brand').removeClass('fixed');
      }
  });

$(document).ready(function(){
	carousel();
	$('#carousel-example-generic').on('slide.bs.carousel', function () {
  		// $('nav').addClass('animated slideInLeft');
  		var animationName = 'animated bounceInRight';
		var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
		$('.nav').addClass(animationName).one(animationEnd, function(){
			$(this).removeClass(animationName);	
		});
  		$('nav').toggleClass('blue');
	});
	$('.fa').on('click',function(){
		var animationName = 'animated shake'
		$(this).addClass(animationName);
	})
});