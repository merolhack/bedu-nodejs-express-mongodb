const createError = require('http-errors');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');

// Pages (Server Side Rendering)
const indexRouter = require('./routes/index');
// API
const usersApiRouter = require('./routes/api/users');
const questionsApiRouter = require('./routes/api/questions');
const answersApiRouter = require('./routes/api/answers');
const tagsApiRouter = require('./routes/api/tags');

const app = express();
app.disable('x-powered-by');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, '../public'),
  dest: path.join(__dirname, '../public'),
  indentedSyntax: false, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/api/users', usersApiRouter);
app.use('/api/questions', questionsApiRouter);
app.use('/api/answers', answersApiRouter);
app.use('/api/tags', tagsApiRouter);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  const statusCode = err.status || 500;
  // Render the error API
  if (/.api/.test(req.url)) {
    return res.status(statusCode).json({
      code: statusCode,
      message: "Not found"
    });
  }
  // Render the error page
  res
    .status(statusCode)
    .render('error');
});

module.exports = app;
