const mysql = require('./mysql');

async function getProductNam() {

    const productNam = await mysql.connectMysql(
        `select * from products where name LIKE '%nam%'  and deleted=0`
    ); 
    return productNam;

    
}

module.exports = {getProductNam};
