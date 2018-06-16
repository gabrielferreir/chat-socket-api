const express = require('express');
const router = express.Router();

const normal = require('../controllers/normal');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
