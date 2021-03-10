var express = require('express');

var router = express.Router();

var User = require('../models/user');

router.get('/new', (req, res) => {
  res.render('userForm');
});

router.post('/', (req, res, next) => {
  User.create(req.body, (err, user) => {
    console.log(err, req.body);
    if (err) return next(err);
    res.redirect('/users');
  });
});
router.get('/', (req, res) => {
  User.find({}, (err, users, next) => {
    console.log(err, users);
    if (err) return next(err);
    res.render('users', { users: users });
  });
});

router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render('singleUser', { user: user });
  });
});

router.get('/:id/edit', (req, res, next) => {
  let id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) next(err);
    res.render('editUserForm', { user: user });
  });
});

router.post('/:id', (req, res) => {
  let id = req.params.id;
  console.log(req.body);
  User.findByIdAndUpdate(id, req.body, { new: true }, (err, updatedUser) => {
    if (err) next(err);
    res.redirect('/users/' + id);
  });
});
router.get('/:id/delete', (req, res, next) => {
  User.findByIdAndDelete(req.params.id, (err, user) => {
    if (err) next(err);
    res.redirect('/users');
  });
});

module.exports = router;
