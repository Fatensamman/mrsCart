'use strict';

const express = require('express');

const {
    createProduct,
    getAllCartProducts,
    deleteProductById
} = require('./../controllers/cart.js');

const cartRouter = express.Router();

cartRouter.post('/', createProduct);
cartRouter.get('/', getAllCartProducts);
cartRouter.delete('/:id', deleteProductById);

module.exports = cartRouter;
