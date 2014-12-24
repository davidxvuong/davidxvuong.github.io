var scrollOld;
var scrollCurrent;
var screenWidth;

$(function(){
	$(window).resize(function(){
		screenWidth = $(window).width();
		adjustPage();
	});
	
	$(window).scroll(function(){
		if (screenWidth > 1000){
			scrollOld = scrollCurrent;
			scrollCurrent = $(this).scrollTop();
			
			if (scrollCurrent - scrollOld > 0 && scrollCurrent > 400) {
				$(".navbar").fadeOut();
			}
			else {
				$(".navbar").fadeIn();
			}
		}
	});
});

function adjustPage(){
	if ($(window).width() <= 1010){
			$(".navbar-list").css("width", "128px");
			$(".navbar-list, .navbar").css("height", "100%");
			$(".navbar-list").css("padding", "0");
			$(".navbar").css("width", "auto");
			$(".center").css("padding-top", "10px");
			$(".navbar").fadeOut();
		}
		else {
			$(".navbar-list, .navbar").css("height", "auto");
			$(".navbar-list").css("width", "auto");
			$(".navbar-list").css("padding", "0px 150px 0px 150px");
			$(".navbar").css("width", "100%");
			$(".center").css("padding-top", "60px");
			$(".navbar").fadeIn();
		}
}

function load(){
	adjustPage();
	screenWidth = $(window).width();
}