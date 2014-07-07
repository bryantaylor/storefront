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

<<<<<<< HEAD
jQuery(window).load(function(){
	slider();
	preloader();
	(function() {
	var triggerBttn = document.getElementById('video-link'),
		overlay = document.querySelector('div.video-container'),
		closeBttn = document.getElementById('close-container');
		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ],
		support = { transitions : Modernizr.csstransitions };

	function toggleOverlay() {
		if( classie.has(overlay, 'open')) {
			classie.remove(overlay, 'open');
			classie.add(overlay, 'close');
			var onEndTransitionFn = function(ev) {
				if(support.transitions) {
					if(ev.propertyName !== 'visibility') return;
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				classie.remove(overlay,'close');
			};
			if(support.transitions) {
				overlay.addEventListener(transEndEventName, onEndTransitionFn);
			}
			else {
				onEndTransitionFn();
			}
		}
		else if(!classie.has(overlay, 'close')) {
			classie.add(overlay, 'open');
		}
	}

	jQuery(triggerBttn).click(function(e) {
		e.preventDefault();
		toggleOverlay();
		console.log('Open');
	});

	jQuery(closeBttn).click(function(e) {
		e.preventDefault();
		toggleOverlay();
		vimeoWrap = jQuery('.video');
   		vimeoWrap.html( vimeoWrap.html());
		console.log('Close');
	});

	//triggerBttn.addEventListener( 'click', toggleOverlay );
	//closeBttn.addEventListener( 'click', toggleOverlay );
})();

=======
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
>>>>>>> e5d25cc901d6a0140a29d9a3eea110a6ae4cb72e
});