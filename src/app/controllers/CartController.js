const { json } = require('express');
const cartItem = require('../models/Cart');

class cartController {

    show(req, res) {
        res.render('cart', {
          layout: 'main_v2'
        });
      }

    showPay(req, res) {
      res.render('pay', {
        layout: 'main_v2'
      });
    }
    
    //[POST] /cart/pay
    async successfulPurchase(req, res) {
      const a = JSON.parse(req.body.sanpham);

      const getPay = await cartItem.payToCart(req.body.name_kh, req.body.phonenumber, req.body.email,
        req.body.address, req.body.note, a);
      res.redirect('/cart')
    }
}

module.exports = new cartController();
