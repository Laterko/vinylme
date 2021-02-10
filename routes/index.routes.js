var express = require('express');
var router = express.Router();


let index = require('../controllers/index');//przeniesione do controllers
/* GET home page. */
router.get('/', index.index);
//submit email
//router.post('/', index.submit_email);

router.use('/posts',() => {
    console.log('midlleware running');}); //__________________usun pozniej
  //Routes
router.get('/posts', (req,res) => {
    res.send('posts :)');
  });

module.exports = router;
