var express = require('express');
var logger = require('morgan');
var mongoose = require('mongoose');
var path = require('path');
var ejs = require('ejs');
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
app.use(logger('dev'));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(4001, () => {
  console.log('server is running at 4001');
});
