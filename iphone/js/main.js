jQuery.noConflict();

function slider() {
	var mySwiper = new Swiper('.swiper-container',{
    pagination: '.pagination',
    loop: true,
    grabCursor: true,
    paginationClickable: true
  })
}

function preloader() {
	var loader = document.getElementById('preloader');
	jQuery(loader).fadeOut('slow');
	jQuery(loader).promise().done(function() {
		loader.remove();
	});
}

jQuery(window).load(function(){
	slider();
	preloader();

	jQuery(document).on('click', '#video-link', function(e) {
		e.preventDefault();
		jQuery('.video-container').fadeIn("slow");
		jQuery('body').css('overflow','hidden');
		console.log('Video Open');
	});

	jQuery(document).on('click', '#close-container', function(e) {
		e.preventDefault();
		jQuery('#bates-video')[0].pause();
		jQuery('.video-container').fadeOut("slow");
   		jQuery('body').removeAttr('style');
   		console.log('Video Closed');
	});

});