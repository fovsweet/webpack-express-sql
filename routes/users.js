var express = require('express');
var router = express.Router();

var userDao = require('../dao/userDao');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 增加用户
//TODO 同时支持get,post
router.get('/query', function(req, res, next) {
  userDao.queryById(req, res, next);
});

router.post('/queryAll', function(req, res, next) {
  userDao.queryAll(req, res, next);
});

module.exports = router;
