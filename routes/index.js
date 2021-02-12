const express = require('express');
const router = express.Router();
const path = require('path');

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
  //path.join   
  res.sendFile(path.resolve('public/stats.html'));
  });

module.exports = router;