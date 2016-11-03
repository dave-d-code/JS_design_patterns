// The publisher / subscriber (pubsub) pattern. For having modules that can be coupled, or decoupled 
// from a project

define(function() {
	'use strict';

	// object to store callbacks or subscribers
	var subscribers = {};

	return {

		// recieve topic to publish
		// & data Optional to pass to subscribers
		publish: function(topic, data) {
			// check for subscribers, if none, dont publish
			if (!subscribers[topic]) {
				return;
			}
			// go thru the array and push to subscribers
			subscribers[topic].forEach(function(subscriber) {
				subscriber(data);
			});


		},

		// topic, event name to subscribe too
		// callback to evoke when published
		subscribe: function(topic, callback) {
			// if topic doesnt exist, create as an array
			if (!subscribers[topic]) {
				subscribers[topic] = [];
			}

			// push the callback into the array
			subscribers[topic].push(callback);

		}

	}

});