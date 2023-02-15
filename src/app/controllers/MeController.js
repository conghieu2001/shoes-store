const product = require('../models/Me');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController {

    //[GET] /me/stored/products
    async storedProducts(req, res, next) {

        const storedproduct = await product.storedProduct(req.body);
        res.render('me/storedProducts', {
            layout: 'main-admin',
            storedproduct
        });
    }

}

module.exports = new MeController();
