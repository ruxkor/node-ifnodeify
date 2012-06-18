/*
 * yo
 */

var matcher = require('./lib/matcher');

module.exports = function(bundle) {
	bundle.register(function(body, file) {
		return matcher(body, file);
	});
};
