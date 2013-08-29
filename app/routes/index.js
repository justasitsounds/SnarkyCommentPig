var bbtweets = require('../data/bbtweetstream.json');
/*
 * GET home page.
 */

exports.index = function(req, res){

  	res.render('index', { title: 'Snarky Pig', remarks: bbtweets });
};