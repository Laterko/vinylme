var express = require('express');
var router = express.Router();
var verify = require('../middleware/verifyToken.middleware');

const User = require('../model/user.schema').UserSchema;
var userController = require('../controllers/users.controller');

/* GET usersRoutes listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});//usun pozniej

router.post('/signup' ,userController.createUser);
router.post('/login' ,userController.login);

module.exports = router;
