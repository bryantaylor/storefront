jQuery.noConflict();

function slider() {
	var mySwiper = new Swiper('.swiper-container',{
    pagination: '.pagination',
    loop:true,
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

jQuery(window).load(function(){
	slider();
	preloader();
});



