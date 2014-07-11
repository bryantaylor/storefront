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

function playerControl() {
	var iframe = document.getElementById('player'),
	player = $f(iframe),
	close = document.getElementById('close-container');

	close.addEventListener('click', function() {
		player.api('pause');
	});
}

jQuery(window).load(function(){
	slider();
	preloader();
	playerControl();
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
		jQuery('body').css('overflow','hidden');
		console.log('Video Open');
	});

	jQuery(closeBttn).click(function(e) {
		e.preventDefault();
		toggleOverlay();
		vimeoWrap = jQuery('.video');
   		//vimeoWrap.html(vimeoWrap.html());
   		jQuery('body').removeAttr('style');
   		console.log('Video Closed');
	});

})();

});