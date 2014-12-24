var scrollOld;
var scrollCurrent;
var isMobile = false;
var isMenuOpen = false;

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
	
	$(".menu").hover(function(){
		$('.menu').css( 'cursor', 'pointer' );
	});
	
		
	$(".menu").click(function(){
		if (isMenuOpen == false){
			$(".menu").css("left", "150px");
			$(".navbar").show();
			isMenuOpen = true;
		}
		else {
			$(".menu").css("left", "0px");
			$(".navbar").hide();
			isMenuOpen = false;
		}
	});
});

function adjustPage(){
	if ($(window).width() <= 1148){
			isMobile = true;
			$(".navbar-list").css("width", "150px");
			$(".navbar-list, .navbar").css("height", "100%");
			$(".navbar-list").css("padding", "0");
			$(".navbar").css("width", "auto");
			$(".center").css("padding", "30px 40px 30px 30px");
			$("#intro").css("padding-top", "10px");
			$(".navbar").css("font-size", "20px");
			$(".menu").css("display", "block");
			$("#navbar-item").css("height", "45px");
			$(".navbar").fadeOut();
		}
		else {
			isMobile = false;
			$(".navbar-list, .navbar").css("height", "auto");
			$(".navbar-list").css("width", "auto");
			$(".navbar-list").css("padding", "0px 150px 0px 150px");
			$(".navbar").css("width", "100%");
			$(".center").css("padding", "30px 150px 30px 150px");
			$("#intro").css("padding-top", "60px");
			$(".navbar").css("font-size", "15px");
			$(".menu").css("display", "none");
			$(".menu").css("left", "0px");
			$("#navbar-item").css("height", "inherit");
			$(".navbar").fadeIn();
		}
}

function load(){
	adjustPage();
	if ($(window).width() <= 1148){
		$(".navbar").hide();
	}
}

function show(){
	$(".menu").css("left", "0px");
	$(".navbar").hide();
	isMenuOpen = false;
}