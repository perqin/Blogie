// get config first
var fs = require('fs');
var config;
try {
    fs.accessSync('config.js', fs.R_OK);
    //noinspection JSFileReferences
    config = require('./config');
} catch (err) {
    config = require('./config_default');
    console.warn('Cannot read config.js, use default config.');
    console.warn(err);
}
var express = require('express');
var vitrines = require('./vitrines/index');
var themeManager = require('./themes/index');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var RedisSessionStore = require('connect-redis')(session);
var bodyParser = require('body-parser');

var controller = require('./controllers/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser(config.sessionSecret));
app.use(session({
    cookie: { path: '/', httpOnly: true, secure: false, maxAge: config.sessionCookieMaxAge * 1000 },
    name: 'blogie.sid',
    resave: false,  // TODO : confused about the meaning of this option
    rolling: true,
    saveUninitialized: false,
    secret: config.sessionSecret,
    store: new RedisSessionStore({
        host: 'localhost',
        port: 6379,
        ttl: config.sessionCookieMaxAge
    })
}));
app.use(express.static(path.join(__dirname, 'public')));
vitrines.serveStatic(app);
themeManager.serveStatic(app);

controller.route(app);
vitrines.route(app);
controller.routeDefault(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    //noinspection JSUnusedLocalSymbols
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
//noinspection JSUnusedLocalSymbols
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
