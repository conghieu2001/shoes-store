const mysql = require('./mysql');

async function checkLogin(username, password) {

    const check = await mysql.connectMysql(
        `select * from admin where username = '${username}' AND password = '${password}'`
    );
    return check;
}
module.exports = {checkLogin};