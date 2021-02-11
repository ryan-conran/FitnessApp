var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile(path.resolve('public/index.html'));
});

/* GET home page. */
router.get('/exercise', function(req, res) {
    res.sendFile(path.resolve('public/exercise.html'));
});

  /* GET home page. */
router.get('/stats', function(req, res) {
    res.sendFile(path.resolve('public/stats.html'));
  });

module.exports = router;