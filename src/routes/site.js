const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

// ProductNamController.index
router.get('/post/gioithieu', siteController.gioithieu);
router.get('/', siteController.index);

module.exports = router;
