const { json } = require('express');
const login = require('../models/Login');

class loginController {
    show(req, res) {
        res.render('login', {
            layout: 'main_v2'
        })
    }

    async checkLogin(req, res) {
        const check = await login.checkLogin(req.body.username, req.body.password);

        if( check.length === 1) {
            res.redirect('/me/stored/products')
        }
        else {
            res.redirect('back')
        }
    }
}

module.exports = new loginController();