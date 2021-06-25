'use strict';
const client = require('../../database/db.js');


const getAllCartProducts = (req, res) => {
	const sql = `SELECT * FROM product INNER JOIN cart ON product.product_id = cart.product_id;`;

	client.query(sql, (err, data) => {
		if (err) return res.status(400).json(err)

		return res.status(200).json(data);
	});

};

const createProduct = (req, res) => {
	const productId = req.body.id;
	const sql = `INSERT INTO cart (product_id) VALUES (?);`;
	const value = [productId];
	client.query(sql, value, (err, data) => {
		if (err) return res.status(400).json(err);

		return res.status(200).json('Created');
	});
};

const deleteProductById = (req, res) => {
	let id = req.params.id
	let sql = `DELETE FROM cart WHERE product_id = ?;`;
	let value = [id];
	client.query(sql, value, (err, data) => {
		if (err) return res.status(400).json(err);
		return res.status(200).json('Deleted');
	});

};
module.exports = {
	createProduct,
	getAllCartProducts,
	deleteProductById
};