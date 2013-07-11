var path = require('path')
  , express = require('express')

var app = express();

// all environments
app.set('port', process.env.PORT || 1234);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.session({
  secret: 'YOUR SECRET',
}));

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function ( req, res ) {
  res.sendfile(__dirname + "/index.html");
});

app.listen(app.get('port'), function () {
  console.log('express listening on port ' + app.get('port'));
});
