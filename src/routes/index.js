const productsNamNuRouter = require('./productsNamNu');
const siteRouter = require('./site');
const productsRouter = require('./products');
const meRouter = require('./me');
const cartRouter = require('./cart');
const histBuy = require('./histBuy');
const login = require('./login');

function route(app) {
    app.use('/login', login);
    app.use('/lich-su-mua-hang', histBuy);
    app.use('/collections', productsNamNuRouter);
    app.use('/products', productsRouter);
    app.use('/me', meRouter);
    app.use('/cart', cartRouter);
    app.use('/', siteRouter);
}

module.exports = route;
