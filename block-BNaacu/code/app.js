var express = require('express');
var logger = require('morgan');
var mongoose = require('mongoose');
var path = require('path');
// var ejs = require('ejs');
var studentRoutes = require('./routes/student');

mongoose.connect(
  'mongodb://localhost/sample',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : 'Connected to database');
  }
);
var app = express();

// ejs

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use('/', require('./routes/index'));
app.use('/students', studentRoutes);

app.use((req, res, next) => {
  res.status(404).send('Page not found');
});
app.listen(4002, () => {
  console.log('server is running at 4001');
});
