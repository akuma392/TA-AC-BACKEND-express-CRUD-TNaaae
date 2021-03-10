var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('Welcome to Website');
});
module.exports = router;
