const mysql = require('./mysql');
async function storedProduct(data) {

    const stored = await mysql.connectMysql(
            `select * from products where deleted=0`
    ); 
    return stored;

    
}

module.exports = {storedProduct};