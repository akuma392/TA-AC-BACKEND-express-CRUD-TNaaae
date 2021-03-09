var express = require('express');

var router = express.Router();

var User = require('../models/userSchema');

router.get('/new', (req, res) => {
  res.render('userForm');
});

router.post('/', (req, res) => {
  User.create(req.body, (err, user) => {
    console.log(err, req.body);
    if (err) return next(err);
    res.redirect('/');
  });
});

router.get('/:id', (req, res, next) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render('userDetails', { user: user });
  });
});
router.get('/', (req, res) => {
  User.find({}, (err, users, next) => {
    console.log(err, users);
    if (err) return next(err);
    res.render('users', { users: users });
  });
});

module.exports = router;
