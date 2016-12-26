$(document).ready(function() {
	$(window).scroll(function(e) {
		console.log($(window).scrollTop())	;
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

	$('#fb-logo').hover(
		function(){
			$('#fb-logo').attr("src", "content\\icons\\facebook-logo-colored.png");

		},
		function(){
			$('#fb-logo').attr("src", "content\\icons\\facebook-logo.png");
	});

	$('#ig-logo').hover(
		function(){
			$('#ig-logo').attr("src", "content\\icons\\instagram-logo-colored.png")
		},
		function(){
			$('#ig-logo').attr("src", "content\\icons\\instagram-logo.png");
	});
});
