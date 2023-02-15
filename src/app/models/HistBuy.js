const mysql = require('./mysql');

async function getHistBuy(phonenumber) {

    const getHistBuy = await mysql.connectMysql(
        
        `select p.description, p.image, p.price, od.quantity, t.user_name, t.user_phone, DATE_FORMAT(t.date_transaction, '%d-%m-%Y') as date_transaction, od.transaction_id, od.id as odid
            from order_detail od
            inner join products p on od.product_id = p.id
            inner join transaction t on od.transaction_id = t.id
            where t.user_phone = '${phonenumber}';`

    ); 
    return getHistBuy;

    
}
module.exports = {getHistBuy};