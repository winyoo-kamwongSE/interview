var client = require('./database');
var express = require('express');
var router = express.Router();

/* set cors. */
router.use(function (req, res, next){
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'content-type, x-access-token');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/alluser', function(req, res, next) {
  client.query('SELECT * FROM news', (err, result) => {
    console.log(result.rows);
    res.json({result:'success',data:result.rows});
  })
});


module.exports = router;
