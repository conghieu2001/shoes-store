const mysql = require('./mysql');


async function getProductNu() {

    const productNu = await mysql.connectMysql(
        `select * from products where name LIKE '%nu%'  and deleted=0`
    ); 
    return productNu;

    
}
async function getSearch(name) {

    const gets = await mysql.connectMysql(
        `select * from products where name LiKE '%${name}%'  and deleted=0`
    ); 
    return gets;

    
}

module.exports = {getProductNu, getSearch};