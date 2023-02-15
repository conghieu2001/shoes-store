const { json } = require('express');
const histBuy = require('../models/HistBuy');

class histBuyController {
    show(req, res) {
        res.render('histBuy', {
            layout: 'main_v2'
        })
    }

    async showHistory(req, res) {
        const showHis = await histBuy.getHistBuy(req.body.phonenumber);
        res.render('showHistory', {
            layout: 'main_v2',
            showHis
        });
        // res.json(showHis)
    }
}

module.exports = new histBuyController();