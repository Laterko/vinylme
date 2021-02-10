var express = require('express');
var router = express.Router();
const users = require('../model/user.schema');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.users('/',(req,res) => {
  const users = 
});

module.exports = router;
