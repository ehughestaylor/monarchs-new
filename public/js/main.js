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