var express = require('express');
var router = express.Router();

// router.set('view engine', 'ejs');
// router.set('views', path.join(__dirname, 'views'));

router.get('/new', (req, res) => {
  res.render('index');
});
router.post('/', (req, res) => {
  res.json(req.body);
});

module.exports = router;
