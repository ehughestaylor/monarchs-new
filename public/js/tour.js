$(document).ready(function(){
	// $('#player-container').hide();
	$('#show-players').on('click',function(){
		$('#player-container').slideToggle("slow");
	});
	$('.player').on('click', function(){
		$(this).siblings().hide();
		var animationName = 'animated bounceIn';
		var animationEnd ='webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		$(this).addClass(animationName).toggleClass('full').one(animationEnd, function(){
			$(this).removeClass(animationName);	
		});
		if (!$(this).hasClass("full")){
			$(this).siblings().show();
		}
	});
});
