var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/Hola', (req,res,next)=>{
  console.log('Saludando');
  res.send("<h1> Saludos desde el Backend </h1>");
} );

module.exports = router;
