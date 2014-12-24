var scrollOld;
var scrollCurrent;

$(function(){
	$(window).scroll(function(){
		scrollOld = scrollCurrent;
		scrollCurrent = $(this).scrollTop();
		
		if (scrollCurrent - scrollOld > 0 && scrollCurrent > 400) {
			$(".navbar").fadeOut();
		}
		else {
			$(".navbar").fadeIn();
		}
	});
});