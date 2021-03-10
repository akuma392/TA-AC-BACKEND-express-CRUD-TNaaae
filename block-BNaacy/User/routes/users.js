var express = require('express');

var router = express.Router();

var User = require('../models/userSchema');

router.get('/new', (req, res) => {
  res.render('userForm');
});

router.post('/', (req, res) => {
  User.create(req.body, (err, res) => {
    console.log(err, req.body);
  });
});

router.get('/:id', (req, res) => {});
router.get('/', (req, res) => {});

module.exports = router;
