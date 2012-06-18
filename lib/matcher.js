var startTag = /^\s*\/\/\s*if node\s*/;
var endTag = /^\s*\/\/\s*end\s*$/;

module.exports = function(body, file) {
	var lines = body.split(/\r\n|\r|\n/);
	var parsed = [];
	var matched = false;

	lines.forEach(function(line,nr) {
		var startMatched = line.match(startTag);
		var endMatched = line.match(endTag);
		if (!matched && startMatched) {
			matched = true;
		}
		else if (startMatched) {
			throw new Error('duplicate start tag found in file '+file+', line '+(nr+1));
		}
		else if (matched && endMatched) {
			matched = false;
		}
		else if (endMatched) {
			throw new Error('duplicate end tag found in file '+file+', line '+(nr+1));
		}
		else if (!matched) {
			parsed.push(line);
		}
	});

	return parsed.join('\n');
}
