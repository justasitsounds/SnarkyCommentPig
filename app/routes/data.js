
/*
 * GET bbtweets.
 */
var bbtweets = require('../data/bbtweetstream.json');
var sheepTweets = require('../data/bbstreamfriends.json');

exports.list = function(req, res){
  var source = req.query.source;
  if(source === 'snark'){
    res.send(bbtweets);
  }else{
    res.send(sheepTweets);
  }
  
};