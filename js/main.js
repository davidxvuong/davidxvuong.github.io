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
		if (document.getElementById("blog-link").getAttribute("href") != "http://lifeinece.ca"){
			event.preventDefault();
			$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
			
			if (isMobile == true || (isMobile == false && $(window).width() <= MIN_SCREEN_SIZE)){
				$(".menu").css("left", "0px");
				$(".navbar").hide();
				isMenuOpen = false;
			}
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
		$("#displayPdf, #desc-width").css("width", "100%");
		$("#logo-width").css("width", "0%");
		$("#circle").css("height", "100px");
		$("#circle").css("width", "100px");
		for (var i = 1; i < 5; i++){
			$("#logo" + i).css("display", "none");
			$("#logo" + i+ "-hide").css("display", "block");
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
		$("#displayPdf, #desc-width").css("width", "75%");
		$("#logo-width").css("width", "25%");
		$("#circle").css("height", "200px");
		$("#circle").css("width", "200px");
		for (var i = 1; i < 5; i++){
			$("#logo" + i).css("display", "block");
			$("#logo" + i+ "-hide").css("display", "none");
		}
	}
}

function load(){
	var platform = navigator.platform;
	isMobile = (platform == "iPad" || platform == "iPhone" || platform == "BlackBerry" || platform == "iPod" || platform == "Linux armv7l")? true: false;
	adjustPage(platform, "onload");
}

function showVideo(obj, vid){
	if (obj.innerHTML == "Show Video") {
		document.getElementById(vid).style.display = "block";
		obj.innerHTML = "Hide Video";
	}
	else {
		document.getElementById(vid).style.display = "none";
		obj.innerHTML = "Show Video";
	}
}

function showEvaluation(eval){
	var directory = "doc/";
	
	switch (eval) {
		case "1A":
			directory += "1APerformanceEvaluation.pdf";
			break;
		case "1B":
			directory += "1BPerformanceEvaluation.pdf";
			break;
	}
	document.getElementById("addLink").href = directory;
	document.getElementById("displayPdf").setAttribute("data", directory);
	$("#displayPdf").css("visibility", "visible");
}

function showResOrRef(obj){
	var directory = "doc/";
	
	switch (obj) {
		case "Resume":
			directory += "DavidVuongResumeWeb.pdf";
			break;
		case "Lightheart":
			directory += "ReferenceLightheart.pdf";
			break;
		case "Kellawan":
			directory += "ReferenceKellawan.pdf";
			break;
		case "Sutcliffe":
			directory += "ReferenceSutcliffe.pdf";
			break;
	}
	document.getElementById("addLink1").href = directory;
	document.getElementById("displayPdf1").setAttribute("data", directory);
}

var imageCount = 7;

function togglePhoto(value) {
	var image = document.getElementById("project-img");
	imageCount += value;
	
	if (imageCount == 8) {
		imageCount = 0;
	}
	
	if (imageCount == -1) {
		imageCount = 7;
	}
	$('#project-img').fadeOut(500, function() {
        $('#project-img').attr("src","images/project" + imageCount + ".jpg");
        $('#project-img').fadeIn(500);
    });
	
	if (imageCount == 0) {
		document.getElementById("project-desc").innerHTML = "In a team of four, we designed a roller coaster using VeX robotics pieces for the structure and a Parallax microcontroller for automation purposes, written in PBASIC. I was responsible for assisting of building the structure of the roller coaster and programming the microcontroller to meet the automation objectives.";
		document.getElementById("project-link").style.display = "none";
	}
	else if (imageCount == 1) {
		document.getElementById("project-desc").innerHTML = "I co-developed a two-player Battleship game, written in C#. This isn't any ordinary Battleship game, where two users share a computer and battle it out; it utilizes the existing LAN to develop an interactive game between two users on two separate computers. We implemented multithreading techniques as well as socket programming to fulfill this requirement.";
		document.getElementById("project-link").style.display = "block";
		document.getElementById("project-link").href = "https://github.com/davidxvuong/Battleship";
	}
	else if (imageCount == 2) {
		document.getElementById("project-desc").innerHTML = "Get Up and Go is a website developed in a team of two at EngHack - Winter 2015, a hackathon held by the Engineering Society at the University of Waterloo. It allows users to easily explore the area that they are currently in using one of four modes of transportation. We used the Google Maps API to get the current user location, and fetch the set of directions from Google that takes the user to the undisclosed location generated behind the scenes.";
		document.getElementById("project-link").style.display = "block";
		document.getElementById("project-link").href = "https://github.com/davidxvuong/GetUpAndGo";
	}
	else if (imageCount == 3) {
		document.getElementById("project-desc").innerHTML = "I participated in WearHacks Toronto 2015. In a team of six, we experimented with the Intel Edison + Arduino Expansion board, Thalmic Lab's Myo armband, and the new Xadow Wearable Kit for Intel Edison. Using these technologies, we then developed My-O-Lock: a multi-digital key that uses motion gestures to unlock doors! We wrote code in both Python and Arduino to allow both the Myo and Intel Edison communicate with each other.";
		document.getElementById("project-link").style.display = "block";
		document.getElementById("project-link").href = "https://github.com/davidxvuong/My-O-Lock";
	}
	else if (imageCount == 4) {
		document.getElementById("project-desc").innerHTML = "I have some five-banded resistors at home, and it was really hard to determine the value of the resistor because the stripes was so hard to read. Using an Arduino and some basic knowledge of analog circuits, I created a simple ohmmeter that would output the value of the resistor in question to the console window.";
		document.getElementById("project-link").style.display = "block";
		document.getElementById("project-link").href = "https://github.com/davidxvuong/Arduino-Ohmmeter";
	}
	else if (imageCount == 5) {
		document.getElementById("project-desc").innerHTML = "FitChallenge is an app that I co-developed in a team of four at EngHack - Spring 2015, a hackathon held by the Engineering Society at the University of Waterloo. Fit Challenge is an app designed to change personal fitness into interpersonal fitness. The app allows users to choose a fitness activity and challenge a nearby opponent. We developed the app in Android Studio, with a backend server running Node.js.";
		document.getElementById("project-link").style.display = "block";
		document.getElementById("project-link").href = "https://github.com/Yifei-Li/FitChallenge";
	}
	else if (imageCount == 6) {
		document.getElementById("project-desc").innerHTML = "Back when I took my Cisco CCNA courses in high school, my teacher would always give us subnetting quizzes, asking us to break down the address space given the user requirements. So, I developed an application that will generate subnetting questions and provides the answer by solving the question recursively. The console application is implemented in C++. Eventually, I will implement a GUI in C# to make it user friendly.";
		document.getElementById("project-link").style.display = "block";
		document.getElementById("project-link").href = "https://github.com/davidxvuong/VLSMSubnettingPractice";
	}
	else if (imageCount == 7) {
		document.getElementById("project-desc").innerHTML = "FacePay is a web application developed in a team of three at BattleHack Toronto 2015. FacePay is a new method of processing online payments. By utilizing your existing webcam on your computer, we simply take a snapshot of you and we will fetch your credit card information to complete the transaction! It is as simple as a couple button clicks. We implemented the front end using JavaScript and CSS, and the back end using PHP and Java. We used the SkyBiometry API to perform facial recognition and detection, and the Braintree API to process online payments."; 
		document.getElementById("project-link").style.display = "block";
		document.getElementById("project-link").href = "https://github.com/davidxvuong/FacePay";
	}
}