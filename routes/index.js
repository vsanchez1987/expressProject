var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { layout: 'photos/index',title: 'Hello World' });
});

module.exports = router;
