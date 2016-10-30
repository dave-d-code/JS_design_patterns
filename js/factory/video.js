define(function() {
	'use strict';

	// video constructor for the factory pattern
	
	var Video = function(attributes) {
		this.length = attributes.length || 0;
		this.name = attributes.name || '';
	};

	return Video;
});