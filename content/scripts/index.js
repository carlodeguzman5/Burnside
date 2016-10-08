$(document).ready(function() {
	$(window).scroll(function(e) {
		if ($(window).scrollTop() > 175) {
			$('#wrap').addClass("sticky");
		} else {
			$('#wrap').removeClass("sticky");
		}
	});

	$('.carousel').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2500
	});


});
