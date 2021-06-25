'use strict';
const client = require('../../database/db.js');


const getAllProducts = (req, res) => {
    const sql = `SELECT * FROM product;`;

    client.query(sql, (err, data) => {
        if (err) return res.status(400).json(err);


        return res.status(200).json(data);
    });

};
const getProductById = (req, res) => {
    let id = req.params.id
    let sql = `SELECT * FROM product WHERE product_id =?;`;
    let value = [id];
    client.query(sql, value, (err, data) => {
        if (err) return res.status(400).json(err);
        return res.status(200).json(data);
    });

};
const createProduct = (req, res) => {
    const { title, description, price, quantity, image } = req.body;
    const sql = `INSERT INTO product (title, description, price, quantity, image) VALUES (?,?,?,?,?);`;
    const values = [title, description, price, quantity, image];
    client.query(sql, values, (err, data) => {
        if (err) return res.status(400).json(err);

        return res.status(200).json('Created');
    });
};

const updateProductById = (req, res) => {
    const id = req.params.id;
    const { title, description, price, quantity, image } = req.body;
    const sql = `UPDATE product SET title = ?, description = ? , price = ?, quantity= ? ,  image = ? WHERE product_id = ?;`;
    const values = [title, description, price, quantity, image, id];
    client.query(sql, values, (err, data) => {
        if (err) return res.status(400).json(err);

        return res.status(200).json('updated');
    });

};

const deleteProductById = (req, res) => {
    let id = req.params.id
    let sql = `DELETE FROM product WHERE product_id = ?;`;
    let value = [id];
    client.query(sql, value, (err, data) => {
        if (err) return res.status(400).json(err);
        return res.status(200).json('Deleted');
    });

};
module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProductById,
    deleteProductById
};