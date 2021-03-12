var express = require('express');

var router = express.Router();
var User = require('../models/user');

router.get('/', (req, res, next) => {
  User.find({}, (err, users) => {
    console.log(err, users);
    if (err) return next(err);
    res.render('users', { users: users });
  });
});

router.post('/', (req, res, next) => {
  console.log(req.body);
  User.create(req.body, (err, user) => {
    console.log(err, req.body);
    if (err) return next(err);
    res.redirect('/users');
  });
});

router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) next(err);
    res.render('singleUser', { user: user });
  });
});
router.put('/:id', (req, res, next) => {
  let id = req.params.id;
  User.findByIdAndUpdate(id, req.body, { new: true }, (err, updatedUser) => {
    if (err) next(err);
    console.log(err, updatedUser);
    res.json(updatedUser);
  });
});
router.delete('/:id', (req, res, next) => {
  let id = req.params.id;
  User.findByIdAndDelete(id, (err, deletedUser) => {
    console.log(err, deletedUser);
    res.json(deletedUser);
  });
});

module.exports = router;
