const express = require('express');
const router = express.Router();

const ProductController = require('../app/controllers/ProductController');

// ProductNamController.index

router.get('/create', ProductController.create);
router.post('/store', ProductController.store);
router.get('/edit/:id', ProductController.edit);
router.post('/:id', ProductController.update);
router.delete('/:id', ProductController.delete);
router.get('/:id', ProductController.show);

module.exports = router;
