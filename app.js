var createError = require('http-errors');
var express = require('express');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var loadenv = require('dotenv').config();

var indexRouter = require('./routes/index');
var categoryRouter = require('./routes/category')
var productRouter = require('./routes/product')
var uploudRouter= require('./routes/uplode')
var brandRouter= require('./routes/brand')
var loadenv = require('dotenv').config();
 var salesRouter = require('./routes/sales');
 var cartsRouter = require('./routes/carts');
var ordersRouter = require('./routes/orders');
var app = express();
// connect to database
const db = require("./models");
db.sequelize.sync({alt:true}); 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/ca',categoryRouter);
app.use('/pro',productRouter);
app.use('/uploud',uploudRouter);
app.use('/br',brandRouter);
app.use('/sales', salesRouter);
app.use('/add', cartsRouter);
app.use('/delete', cartsRouter);
app.use('/view', cartsRouter);
app.use('/place', ordersRouter);
app.use('/get', ordersRouter);
app.use('/update', ordersRouter);
app.use('/delete', ordersRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
