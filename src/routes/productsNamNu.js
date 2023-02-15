const express = require('express');
const router = express.Router();

const ProductsNamNuController = require('../app/controllers/ProductsNamNuController');

// ProductNamController.index
// router.use('/:slug', ProductsNamController.show);
router.get('/nam', ProductsNamNuController.indexNam);
router.get('/search', ProductsNamNuController.search);
router.get('/nu', ProductsNamNuController.indexNu);

module.exports = router;
