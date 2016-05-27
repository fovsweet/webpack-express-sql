var express = require('express');
var router = express.Router();

var userDao = require('../dao/userDao')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 增加用户
//TODO 同时支持get,post
router.post('/queryID', function(req, res, next) {
  userDao.queryById(req, res, next);

});

router.post('/queryAll', function(req, res, next) {
  	userDao.userInfo(req,res);
});

module.exports = router;
