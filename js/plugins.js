// Config plugins jQuery

// FLEXSLIDER
$(window).load(function() {
	$('.slideshow').flexslider();
});

// SKROLLR
skrollr.init({
	forceHeight: false
});

// SCROLL EFFECT BUTTON
var mainmenu = $('.roll');
mainmenu.each(function(){
	$(this).click(function(event){
		var anchorID = $(this).attr("href");
		//$(anchorID).slideDown();
		$('html, body').animate({
		    scrollTop: $(anchorID).offset().top-40
		}, 'slow');
	});
});



