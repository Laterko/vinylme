var express = require('express');
var router = express.Router();

const User = require('../model/user.schema').UserSchema;
var userController = require('../controllers/users.controller');
/* GET usersRoutes listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', userController.createUser);

module.exports = router;
