var bbtweets = require('../data/bbtweetstream.json');
/*
 * GET home page.
 */

exports.episode = function(req, res){

  	res.render('episode', { title: 'Snarky Pig', remarks: JSON.stringify(bbtweets) });
};