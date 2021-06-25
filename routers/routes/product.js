'use strict';

const express = require('express');

const {
    createProduct,
    getAllProducts,
    getProductById,
    updateProductById,
    deleteProductById
} = require('./../controllers/product.js');

const productRouter = express.Router();

productRouter.post('/', createProduct);
productRouter.get('/', getAllProducts);
productRouter.get('/:id', getProductById);
productRouter.put('/:id', updateProductById);
productRouter.delete('/:id', deleteProductById);

module.exports = productRouter;