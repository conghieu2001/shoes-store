const express = require('express');
const router = express.Router();
const cartController = require('../app/controllers/cartController');

router.post('/successfulPurchase', cartController.successfulPurchase);
router.get('/pay', cartController.showPay);
router.get('/', cartController.show);


module.exports = router;
