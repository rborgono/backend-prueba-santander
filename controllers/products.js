const { response } = require('express');

const Product = require('../models/product');

const getProducts = async (req, res = response) => {
    const products = await Product.find();
    res.status(200).json({
        ok: true,
        products
    });
};

const createProduct = async (req, res = response) => {
    try {

        const product = new Product(req.body);
        await product.save();

        res.status(200).json({
            ok: true,
            product
        });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error interno del servidor'
        });
    }
};

const getProductById = async (req, res = response) => {
    const product = await Product.findById(req.params.id);
    if(!product){
        return res.status(200).json({
            ok: false,
            msg: 'No existe producto para ese id'
        });
    }
    res.status(200).json({
        ok: true,
        product
    });
};

const updateProduct = async (req, res = response) => {
    try {
        const id = req.params.id;
        const productUpdated = await Product.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({
            ok: true,
            product: productUpdated
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error interno del servidor'
        });
    }
};

const deleteProduct = async (req, res = response) => {
    try {
        const id = req.params.id;
        const productDB = Product.findById(id);
        if (!productDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe producto para ese id'
            });
        }
        await Product.findByIdAndDelete(id);
        res.status(200).json({
            ok: true,
            msg: 'Producto eliminado',
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error interno del servidor'
        });
    }
};

module.exports = {
    getProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
};