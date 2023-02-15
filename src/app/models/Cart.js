const mysql = require('./mysql');

async function addedToCart() {
}
async function payToCart(name_kh, phonenumber, email, address, note, a) {
    let sumPrice = 0;
    a.forEach(item => {
        sumPrice += parseInt(item.price) * item.quantity;
    });
    
    const paytocart = await mysql.connectMysql(
        `INSERT into transaction(status, user_name, user_email, user_phone, user_address, user_note, sum_price,  date_transaction) 
            values(0, '${name_kh}', '${email}', '${phonenumber}', '${address}', '${note}', ${sumPrice}, now())`
    );

    const getIdTransaction = await mysql.connectMysql(
            `select id from transaction`
    );

    for(var i=0; i < a.length; i++) {
            mysql.connectMysql(
                `INSERT into order_detail(transaction_id, product_id, quantity) 
                values(${getIdTransaction.length}, ${a[i].id}, ${a[i].quantity})`
            );
    }
}
module.exports = {addedToCart, payToCart};