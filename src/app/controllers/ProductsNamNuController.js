const productNam = require('../models/ProductsNam');
const productNu = require('../models/ProductsNu');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class ProductsNamNuController {
    //[GET] /collections/nam
    async indexNam(req, res) {
        
        const nam = await productNam.getProductNam(); 
        res.render('collections/nam', {
            nam
        });
        
    }

    async indexNu(req, res) {
        const nu = await productNu.getProductNu(); 
        res.render('collections/nu', {
            nu
        });
        
    }

    async search(req, res) {
        const search = req.query.searchP;
        const gets = await productNu.getSearch(search); 
        res.render('collections/search', {
            gets
        });

    }
}

module.exports = new ProductsNamNuController();
