// product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number,
    image: String
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
