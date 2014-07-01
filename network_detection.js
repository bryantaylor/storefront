jQuery(document).ready(function() {
	var init = function() {
		// Define a function in case the main JS file has not loaded yet.
		if (!window.onnetworkconnection) {
			window.onnetworkconnection = function() {
				window.connected = true;
			}
		}
		
		//window.onnetworkconnection();
		
		jQuery.ajax({
			type: "GET",
			url: "http://www.google.com",
			success: function() {
				window.onnetworkconnection();
			},
			error: function() {
				jQuery('#wrap').remove();
				jQuery("body").append(
					"<div id='offlineBG'>" +
					"<div id='offline'>" +
 					"<img src='img/networkIcon.svg'>" +
 					"<h1>You must be connected to the internet to access the store.</h1>" +
					"</div>" +
					"</div>");
				console.log('not connected to network');
			}
		})

	}
	
	if (navigator.userAgent.toLowerCase().indexOf("ipad") == -1) // On desktop so call init() immediately. This will be the case for dev.
		init();
	else
		window.onadobedpscontextloaded = init; // On tablet so wait until onadobedpscontextloaded.
});