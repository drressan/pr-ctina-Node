var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const utils = require('./lib/utils');

var app = express();

// conectamos a la base de datos
require('./lib/connectMongoose');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').__express);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use('/pdfs', express.static('D:/pdfs'));

/**
 * Rutas de mi API
 */
app.use('/api/agentes',   require('./routes/api/agentes'));

// variables globales de las vistas
app.locals.title = 'NodeAPI';

/**
 * Rutas de mi website
 */
app.use('/',      require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/facturas', require('./routes/facturas'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {

  res.status(err.status || 500);

  if (utils.isAPIRequest(req)) {
    res.json({ error: err.message });
    return;
  }

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.render('error');
});

module.exports = app;
