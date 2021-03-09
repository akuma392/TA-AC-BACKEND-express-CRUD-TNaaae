var express = require('express');

var router = express.Router();
var User = require('../models/user');

router.get('/', (req, res) => {
  User.find({}, (err, users, next) => {
    console.log(err, users);
    if (err) return next(err);
    res.render('users', { users: users });
  });
});

router.post('/', (req, res) => {
  console.log(req.body);
  User.create(req.body, (err, user, next) => {
    console.log(err, req.body);
    if (err) return next(err);
    res.redirect('/users');
  });
});

router.get('/:id', (req, res) => {
  let id = req.params.id;
  User.findById(id, (err, user, next) => {
    if (err) next(err);
    res.render('singleUser', { user: user });
  });
});
router.put('/:id', (req, res, next) => {
  let id = req.params.id;
  User.findByIdAndUpdate(id, req.body, { new: true }, (err, updatedUser) => {
    if (err) next(err);
    res.redirect('/users');
  });
});
router.delete('/:id', (req, res, next) => {
  let id = req.params.id;
  User.findByIdAndDelete(id, (err) => {
    res.redirect('/users');
  });
});

module.exports = router;
