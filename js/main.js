

$(window).scroll(function(){
	if($('.navbar').offset().top > 300){
		$('.fixed-top').addClass('top-nav-collapse');
	} else if($('.navbar').offset().top < 70) {
		$('.fixed-top').removeClass('top-nav-collapse');
	}
});

$(window).scroll(function(){
	if($('.navbar').offset().top > 300){
		$('.btnAlign').addClass('btnAlignActive');
	}
});

$(function(){
	$('.page-scroll a').bind('click', function(){
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 2000, 'easeInOutExpo');
		event.preventDefault();
	});
});

$(window).on('beforeunload', function() {
	$(window).scrollTop(0);
});



function showHide() {
	var divToToggle = document.getElementById("resumeShow");
	var mainEle = document.getElementById("resume");
	if  (divToToggle.style.display === "block") {
	 	divToToggle.style.display = 'none';
		$(mainEle).slideToggle(1000);
	}
	else {
		mainEle.style.display = 'none';
		$ (divToToggle).slideToggle(2000);
	 	divToToggle.style.display = 'block';
	}
}

