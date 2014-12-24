var scrollOld;
var scrollCurrent;

$(function(){
	$(window).resize(function(){
		adjustPage();
	});
	
	$(window).scroll(function(){
		if ($(window).width() > 1148){
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
	if ($(window).width() <= 1148){
			$(".navbar-list").css("width", "150px");
			$(".navbar-list, .navbar").css("height", "100%");
			$(".navbar-list").css("padding", "0");
			$(".navbar").css("width", "auto");
			$(".center").css("padding", "30px 40px 30px 30px");
			$("#intro").css("padding-top", "10px");
			$(".navbar").css("font-size", "20px");
			$(".navbar").fadeOut();
		}
		else {
			$(".navbar-list, .navbar").css("height", "auto");
			$(".navbar-list").css("width", "auto");
			$(".navbar-list").css("padding", "0px 150px 0px 150px");
			$(".navbar").css("width", "100%");
			$(".center").css("padding", "30px 150px 30px 150px");
			$("#intro").css("padding-top", "60px");
			$(".navbar").css("font-size", "15px");
			$(".navbar").fadeIn();
		}
}

function load(){
	adjustPage();
	if ($(window).width() <= 1148){
		$(".navbar").hide();
	}
}