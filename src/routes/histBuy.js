const express = require('express');
const router = express.Router();
const histBuyController = require('../app/controllers/histBuyController');


router.post('/show', histBuyController.showHistory);
router.get('/', histBuyController.show);

module.exports = router;