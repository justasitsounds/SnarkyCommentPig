
/*
 * GET bbtweets.
 */
var bbtweets = require('../data/bbtweetstream.json');

exports.list = function(req, res){
  res.send(JSON.stringify(bbtweets));
};