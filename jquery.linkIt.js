/*
* name: LinkIt
* author: Mikki
* version: 0.1.0
* license: MIT
*/

(function($) {
	$.fn.linkIt = function(options) {
		// alert(this.html());
		
		// Default Settings
		var settings = $.extend({
			href: null,
			text: null,
			target: '_self'
		}, options);
		
		// alert(settings.whatever);
		
		// Validation
		if (settings.href == null) {
			console.log('You need an href option for LinkIt to work.');
			return this;
		}
		
		return this.each(function() {
			var object = $(this);				// each object which LinkIt() applied on. A set of those stored in jQuery object (see at the bottom line)
			
			if (settings.text == null) {
				settings.text = object.text();
			}
			
			object.wrap('<a target="' + settings.target + '" href="' + settings.href + '"></a>').text(settings.text);
		});
	}
}(jQuery));											// ?-> a jQuery object that represents a set of DOM elements (later we apply LinkIt() to some of those) <-?