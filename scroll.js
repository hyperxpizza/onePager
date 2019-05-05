$().ready (function () {
	$('#about-me').click (function (event){
		// event.preventDefault();
		var goTop = $('#personal').offset().top;
		$("html, body").scrollTop(goTop);
	});
	
	$('#my-work').click (function (event){
		// event.preventDefault();
		var goTop = $('#area-2').offset().top;
		$("html, body").animate({
			scrollTop: goTop
		}, 2000);
	});
	
	$('#contact').click (function (event){
		var goTop = $('#area-3').offset().top;
		$("html, body").animate({
			scrollTop: goTop
		}, 2000);
	});
});
