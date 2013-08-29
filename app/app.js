
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var episode = require('./routes/episode');
var user = require('./routes/user');
var data = require('./routes/data');
var assets = require('./routes/assets');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/episode', episode.episode);
app.get('/users', user.list);
app.get('/data', data.list);
app.get('/assets', assets.get);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
