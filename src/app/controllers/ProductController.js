const product = require('../models/Product');
const { mongooseToObject } = require('../../util/mongoose');

class ProductController {
    //[GET] /products/:id
    async show(req, res) {
       
        const showproduct = await product.showProduct(req.params.id);
        res.render('products/showProduct', {
            layout: 'main_v2',
            showproduct
        });
        // res.json(showproduct);
    }
    // //[GET] /products/create
    create(req, res) {
        res.render('products/create', {layout: 'main-admin'});
    }

    // //[POST] /products/store
    async store(req, res, next) {
        const store = await product.createProduct(req.body.name, req.body.description, req.body.image, req.body.price, req.body.loai_id);
        res.redirect('/me/stored/products')
    }

    // //[GET] /produts/edit/:id
    async edit(req, res) {
        const editproduct = await product.editProduct(req.params.id);
        res.render('products/edit', {
            layout: 'main-admin',
            editproduct
            
        });
        // console.log(editproduct);
        // res.json(editproduct)
    } 
    // }
    // //[POST] /products/:id
    async update(req, res) {

        const store = await product.updateProduct(req.body.id, req.body.name, req.body.description, req.body.image, req.body.price, req.body.loai_id);
        res.redirect('/me/stored/products');
        // res.send('123')
    }
    async delete(req, res) {

        const store = await product.deleteProduct(req.params.id);

        res.redirect('back');

    }
}

module.exports = new ProductController();
