$(document).ready(function() {
	
	$(window).scroll(function(e) {

		
		if ($(window).scrollTop() > 175) {
			$('#wrap').addClass("sticky");
				console.log($(window).scrollTop());
		
		} else {
			$('#wrap').removeClass("sticky");
		}

	});
	
	
});