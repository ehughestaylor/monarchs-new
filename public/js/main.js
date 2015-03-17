function carousel(){
    	$('.carousel').carousel({
        interval: 6000
    })
   };



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

function loopColor(){
	for (var counter = 0; counter < 4; counter++) {

	}
}

$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");
		$(".donate_button").show("slow");
});
$(document).ready(function(){
	carousel();
	loopColor();
	$('.donate_button').hide();
	var count= 0;
	$('#carousel-example-generic').on('slide.bs.carousel', function () {
  		// $('nav').addClass('animated slideInLeft');
  		count++;
  		console.log(count);
  		if (count < 3) {
  			var animationName = 'animated bounceInRight';
			var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
			$('.nav').addClass(animationName).one(animationEnd, function(){
				$(this).removeClass(animationName);	
			});
	  		$('nav').toggleClass('blue');
  		};
	});

	$('.fa').on('click',function(){
		var animationName = 'animated shake'
		$(this).addClass(animationName);
	});


});
