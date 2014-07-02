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
	var shadow = document.getElementById('shadow');
	var loader = document.getElementById('preloader');
	jQuery(loader).fadeOut('slow');
	jQuery(loader).promise().done(function() {
		loader.remove();
	});
	jQuery(shadow).show();
}

function videoPlayer() {
	var container = document.getElementById('video-container');
	jQuery('#video-link').click(function(e) {
		e.preventDefault();
		jQuery(container).show();
		jQuery(container).addClass('expand');
		console.log('Hi!');
	});

	jQuery('#close-container').click(function(e) {
		e.preventDefault();
		jQuery(container).hide();
		console.log('Bye!!');
	});

}

jQuery(window).load(function(){
	slider();
	preloader();
	videoPlayer();
});