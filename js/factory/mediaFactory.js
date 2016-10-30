define(function(require) {
	'use strict';

	// load in the constructors into our factory. More can be added at will
	 var media = {
	 	Video : require('factory/video'),
	 	Image: require('factory/image')
	 };

	// detemine the type, and the properties to be added, and make
	 return {
	 	createMedia: function(type, attributes) {
	 		var MediaType = media[type];

	 		return new MediaType(attributes);
	 	}
	 };


});