var fs = require('fs');
var path = require('path');

exports.get = function(req, res){

	var samplepath = path.join(__dirname, '../data', 'sample.svg');
	console.log(samplepath);
	var svgdata = fs.readFileSync(samplepath);
	res.send(svgdata);
};