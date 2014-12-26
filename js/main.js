var isMenuOpen = false;
var isMobile;
const MIN_SCREEN_SIZE = 1247;
var scrollOld;
var scrollCurrent;

$(function(){
	$(window).resize(function(){
		adjustPage(navigator.platform, "resize");
	});
	
	$(window).scroll(function(){
		if ($(window).width() > MIN_SCREEN_SIZE && isMobile == false ){
			scrollOld = scrollCurrent;
			scrollCurrent = $(this).scrollTop();
			
			if (scrollCurrent - scrollOld > 0 && scrollCurrent > 100) {
				$(".navbar").fadeOut();
			}
			else {
				$(".navbar").fadeIn();
			}
		}
		
		if ($(this).scrollTop() > 100) {
			$(".returnToTop").css("visibility", "visible");
			$(".returnToTop").fadeIn();
		}
		else {
			$(".returnToTop").fadeOut();
		}
	});
	
	$(".menu").hover(function(){
		$('.menu').css( 'cursor', 'pointer' );
	});
	
	$(".returnToTop").click(function(){
		$("html, body").animate({scrollTop: 0}, 500);
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
	
	$(".navbar-item").click(function(event){
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
		
		if (isMobile == true || (isMobile == false && $(window).width() <= MIN_SCREEN_SIZE)){
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
			toggleCss("small");
			if (isMenuOpen == false) {
				$(".navbar").hide();
			}
			else {
				$(".navbar").show();
			}
			$(".navbar").css("overflow-y", "scroll");
			break;
		default:
			if ($(window).width() <= MIN_SCREEN_SIZE && isMobile == false) {
				toggleCss("small");
				if (event == "resize") {
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
		$(".navbar-list, .navbar").css("height", "100%");
		$(".navbar-list").css("padding", "0");
		$(".navbar").css("width", "auto");
		$(".center").css("padding", "30px 40px 30px 30px");
		$("#intro").css("padding-top", "10px");
		$(".navbar").css("font-size", "20px");
		$(".menu").css("display", "block");
		for (var i = 1; i < 4; i++){
			$("#logo" + i).css("float", "left");
		}
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
		for (var i = 1; i < 4; i++){
			$("#logo" + i).css("float", "right");
		}
	}
}

function load(){
	var platform = navigator.platform;
	isMobile = (platform == "iPad" || platform == "iPhone" || platform == "BlackBerry" || platform == "iPod" || platform == "Linux armv7l")? true: false;
	adjustPage(platform, "onload");
}

function showVideo(obj){
	if (obj.innerHTML == "Show Video") {
		document.getElementById("video").style.display = "block";
		obj.innerHTML = "Hide Video";
	}
	else {
		document.getElementById("video").style.display = "none";
		obj.innerHTML = "Show Video";
	}
}