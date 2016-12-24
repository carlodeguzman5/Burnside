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


	var modal = document.getElementById('myModal');
	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = document.getElementById('myImg');
	var modalImg = document.getElementById("img01");
	var captionText = document.getElementById("caption");

	$('.gallery-image').click(function(){
		modal.style.display = "block";
		modalImg.src = this.src;
		captionText.innerHTML = this.alt;
	});

	// img.onclick = function(){
	//     modal.style.display = "block";
	//     modalImg.src = this.src;
	//     captionText.innerHTML = this.alt;
	// }

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	  modal.style.display = "none";
	}


});
