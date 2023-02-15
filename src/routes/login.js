const express = require('express');
const router = express.Router();
const loginController = require('../app/controllers/loginController');


router.post('/check', loginController.checkLogin);
router.get('/', loginController.show);

module.exports = router;