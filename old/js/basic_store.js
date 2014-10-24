$(document).ready(function() {
	var init = function() {
		
		///
		// SETUP
		// 1.  Define your own productId below.  It must be one that you have published as public within your Adobe fulfillment account (via Folio Producer)
		//     You can define it either as FREE or RETAIL depending upon what you want to test.
		///
		var productID = 'storefolio1';
		
		
	
		
	}
	
	if (window.connected)
		init();
	else
		window.onnetworkconnection = init;
});
