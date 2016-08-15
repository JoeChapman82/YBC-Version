var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index');
});


// Example route: Passing data into a page
router.get('/examples/template-data', function (req, res) {
  res.render('examples/template-data', { 'name' : 'Foo' });
});


module.exports = {
  bind : function (app) {

    app.get('/', function (req, res) {
      res.render('index');
    });

  require('./routes-17')(app);
  }
};
