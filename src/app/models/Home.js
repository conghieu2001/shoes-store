
const mysql = require('./mysql');

	async function getProductGNu() {

		const productNu = await mysql.connectMysql(
			`select * from products where loai_id = 3 and deleted=0 limit 4`
		); 
		return productNu;  
	}
	async function getProductGNam() {

		const productNam = await mysql.connectMysql(
			`select * from products where loai_id = 1 and deleted=0 limit 4`
		); 
		return productNam;  
	}
	async function getProductDNu() {

		const productNu = await mysql.connectMysql(
			`select * from products where loai_id = 4 and deleted=0 limit 4`
		); 
		return productNu;  
	}
	async function getProductDNam() {

		const productNam = await mysql.connectMysql(
			`select * from products where loai_id = 2 and deleted=0 limit 4`
		); 
		return productNam;  
	}

	module.exports = {getProductGNu, getProductGNam, getProductDNu, getProductDNam};