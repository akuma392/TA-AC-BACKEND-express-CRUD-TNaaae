var express = require('express');

var path = require('path');
var userRoutes = require('./routes/users');
var ejs = require('ejs');

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', userRoutes);

app.use((req, res, next) => {
  res.status(404).send('Page not found');
});

app.listen(4455, () => {
  console.log('Server is running at 4455');
});
