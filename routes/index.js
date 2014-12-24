var express = require('express');
var router = express.Router();
var List = require('./photos.js');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('photos', {title: 'Hello World', photos: photos.list() });

});

module.exports = router;
