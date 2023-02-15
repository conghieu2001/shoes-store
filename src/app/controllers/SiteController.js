const productHome = require('../models/Home');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {

    async index(req, res) {
        const homeGNu = await productHome.getProductGNu(); 
        const homeGNam = await productHome.getProductGNam();
        const homeDNu = await productHome.getProductDNu();
        const homeDNam = await productHome.getProductDNam();
        res.render('home', {
            homeGNu, homeGNam, homeDNu, homeDNam
        });
    }

    gioithieu(req, res) {
        res.render('post/gioithieu');
    }
}

module.exports = new SiteController();
