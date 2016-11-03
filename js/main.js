require(
	['factory/init', 'pubsub/init'],
	function(factory, pubsub) {
		'use strict';
		
		// object to store our init modules. this will get filled up
		var examples = {
			factory: factory,
			pubsub: pubsub
		};

		// global method to view example in the console

		window.runExample = function(example) {
			examples[example].init();
		};

	}

);