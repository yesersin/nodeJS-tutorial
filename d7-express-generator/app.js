const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose =require('mongoose');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const profileRouter= require('./routes/profile');
const booksRouter= require('./routes/books');
const myconfig = require('./myconf');
const verifyJwtToken = require('./middleware/verify-jwt');
const app = express();

// mongoose.connect('mongodb://localhost:27017/udemy');
// mongoose.connection.on('open',()=>{
//   console.log("Mongo Baglandı");
// });
// mongoose.connection.on('error',(err)=>{
//   console.log("Mongo hata:"+err);
// });

mongoose.connect("mongodb://localhost:27017/udemy", {
      useNewUrlParser: true,
      useUnifiedTopology: true, 
    })
    .then(() => console.log("Connected to DB"))
    .catch (console.error);

//   if (err) console.log("hata");
//   else console.log("ok");
// });
// .then(()=>{
//     console.log("baglandı");
// })
// .catch(()=>{
//   console.log("hata");
// });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('apiKey_jsonwebtoken', myconfig.apiKey_jsonwebtoken);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use('/',verifyJwtToken);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/profile', verifyJwtToken, profileRouter);
app.use('/books', verifyJwtToken, booksRouter);


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
