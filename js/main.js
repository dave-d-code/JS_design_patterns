require(
	[],
	function() {
		'use strict';
		// object to store our init modules. this will get filled up
		var examples = {};

		// global method to view example in the console

		window.runExample = function(example) {
			examples[example].init();
		};

	}

);