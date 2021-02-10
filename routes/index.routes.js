var express = require('express');
var router = express.Router();


let indexRoutes = require('../controllers/index.controller');//przeniesione do controllers
/* GET home page. */
router.get('/', indexRoutes.index);


router.use('/posts',() => {
    console.log('midlleware running');}); //__________________usun pozniej
  //Routes
router.get('/posts', (req,res) => {
    res.send('posts :)');
  });

module.exports = router;
