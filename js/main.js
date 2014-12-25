var scrollOld;
var scrollCurrent;
var isMenuOpen = false;
var isMobile;

$(function(){
	$(window).resize(function(){
		adjustPage(navigator.platform, "resize");
	});
	
	$(window).scroll(function(){
		if ($(window).width() > 1148 && isMobile == false ){
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

function adjustPage(platform, event){
	switch (platform){
		case "iPhone":
		case "iPad":
		case "iPod":
		case "BlackBerry":
		case "Linux armv7l":
			$(".navbar").css("overflow-y", "scroll");
			
			toggleCss("small");
			if (isMenuOpen == false) {
				$(".navbar").hide();
			}
			else {
				$(".navbar").show();
			}
			break;
		default:
			alert(platform + " " + isMobile);
			$(".navbar").css("overflow-y", "visible");
			if ($(window).width() <= 1148 && isMobile == false) {
				toggleCss("small");
				if (event == "resize") {
					alert(isMobile);
					$(".navbar").fadeOut();
				}
				else {
					$(".navbar").hide();
				}
			}
			else {
				toggleCss("big");
				if (event == "resize") {
					$(".navbar").fadeIn();
				}
				else {
					$(".navbar").show();
				}
			}
			break;
	}
}

function toggleCss(screenSize) {
	if (screenSize == "small") {
		$(".navbar-list").css("width", "150px");
		$(".navbar-list, .navbar").css("height", "auto");
		$(".navbar-list").css("padding", "0");
		$(".navbar").css("width", "auto");
		$(".center").css("padding", "30px 40px 30px 30px");
		$("#intro").css("padding-top", "10px");
		$(".navbar").css("font-size", "20px");
		$(".menu").css("display", "block");
	}
	else if (screenSize == "big") {
		$(".navbar-list, .navbar").css("height", "auto");
		$(".navbar-list").css("width", "auto");
		$(".navbar-list").css("padding", "0px 150px 0px 150px");
		$(".navbar").css("width", "100%");
		$(".center").css("padding", "30px 150px 30px 150px");
		$("#intro").css("padding-top", "60px");
		$(".navbar").css("font-size", "15px");
		$(".menu").css("display", "none");
		$(".menu").css("left", "0px");
	}
}

function load(){
	var platform = navigator.platform;
	isMobile = (platform == "iPad" || platform == "iPhone" || platform == "BlackBerry" || platform == "iPod" || platform == "Linux armv7l")? true: false;
	adjustPage(platform, "onload");
}

function show(){
	$(".menu").css("left", "0px");
	$(".navbar").hide();
	isMenuOpen = false;
}