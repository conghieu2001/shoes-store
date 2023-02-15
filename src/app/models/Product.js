
const mysql = require('./mysql');

async function showProduct(id) {

    const show = await mysql.connectMysql(
        `select * from products where id="${id}"`
    ); 
    return show;

    
}

async function createProduct(name,description, image, price, loai_id) {

    const create = await mysql.connectMysql(
            `INSERT into products(name,description, image, price, loai_id, deleted, created_at, updated_at) values('${name}', '${description}', '${image}', '${price}', '${loai_id}', 0, now(), now())`
    ); 
    return create;
}
async function editProduct(id) {

    const edit = await mysql.connectMysql(
        `select * from products where id="${id}"`
    ); 
    return edit;
}

async function updateProduct(id, name, description, image, price, loai_id) {

    const update = await mysql.connectMysql(
        `UPDATE  products SET name='${name}', description='${description}', image='${image}', price='${price}', loai_id='${loai_id}' WHERE id ='${id}'`
    ); 
    return update;
}

async function deleteProduct(id) {
    const deleteP = await mysql.connectMysql(
        `update products set deleted = 1 where id='${id}'`
    );
    return deleteP;
}

module.exports = {showProduct, createProduct, editProduct, updateProduct, deleteProduct};