const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const users = require('./storage/users.js');
const { userLogIn, currentOrderStorage, returnCurrentOrder, updateCurrentOrder } = users();

const menuItems = require('./storage/items.js');
const { all, starters, mains, deserts, currentItem } = menuItems();

app.use(bodyParser.json());
app.set('view engine', 'hbs');
app.use('/static', express.static('static'));

app.get('/login', function (req, res) {
      res.render('page-login');
  });

app.post('/loginAttempt', function(req, res){

    let loginResult = userLogIn(req.body);
    res.json(loginResult);
})

app.get('/shop-list', function (req, res) {
    res.render('shop-list', all());
});

app.get('/shop-single', function (req, res) {
    returnCurrentOrder();
    res.render('shop-single', currentItem(req.query.menu, req.query.id));
});

app.get('/shop-cart', function (req, res) {
    returnCurrentOrder();
    res.render('shop-cart', returnCurrentOrder());
});

app.post('/shop-cart-final', function (req, res) {
    console.log(req.body);
});

app.get('/shop-cart-js', function (req, res) {
    res.json(returnCurrentOrder());
});

app.post('/currentOrder', (req, res) => {
    let currentItemToOrder = req.body;
    currentOrderStorage(currentItemToOrder);
  });

  app.post('/updatedOrder', (req, res) => {
    updateCurrentOrder(req.body.items);
  });

  app.get('/shop-checkout', function (req, res) {
    res.render('shop-checkout');
});

app.listen(8080, function(){ // Set app to listen for requests on port 3000
    console.log('Listening on port 8080!'); // Output message to indicate server is listening
});