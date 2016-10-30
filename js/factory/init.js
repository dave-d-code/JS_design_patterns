// factory pattern. Used for creation of complex objects, or multiple instances.
// use runExample('factory') in the index.html console for output

define(function(require) {
	'use strict';

	return {
		init: function() {

			// declare the variables.

			var myVideo, myImage,
				mediaFactory = require('factory/mediaFactory');

			// send to the factory to make ur objects

			myVideo = mediaFactory.createMedia('Video', {
				length: 3.5,
				name: 'My Video'
			});

			myImage = mediaFactory.createMedia('Image', {
				width: 100,
				height: 100,
				name: 'My image'
			});

			// lets have a look
			console.log(myVideo);
			console.log(myImage);
			
		}
	};
});