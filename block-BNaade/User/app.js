var express = require('express');

var path = require('path');
var mongoose = require('mongoose');
var userRoutes = require('./routes/users');
var indexRouter = require('./routes/index');
mongoose.connect(
  'mongodb://localhost/user',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : 'Connected to database');
  }
);

var app = express();

// ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// static MW

app.use(express.static(path.join(__dirname, 'public')));

// form data mw
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', userRoutes);

app.use((req, res, next) => {
  res.status(404).send('Page not found');
});

app.listen(3001, () => {
  console.log('Server is running at 3001');
});
