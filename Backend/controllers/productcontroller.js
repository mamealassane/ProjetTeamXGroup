// productController.js
const Product = require('../models/product');

const productController = {
    getAllProducts: async (req, res) => {
        try {
            const products = await Product.find();
            res.json(products);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getProductById: async (req, res) => {
        try {
            const product = await Product.findById(req.params.id);
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.json(product);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    createProduct: async (req, res) => {
        try {
            console.log('Data received for new product:', req.body);
            const product = new Product(req.body);
            await product.save();
            res.status(201).json(product);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    updateProduct: async (req, res) => {
        try {
            const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.json(product);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    deleteProduct: async (req, res) => {
        try {
            const product = await Product.findByIdAndDelete(req.params.id);
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.json({ message: 'Product deleted' });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
};

module.exports = productController;
