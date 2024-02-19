// AddProduct.js
import React, { useState } from 'react';
import axios from 'axios';
import './AddProduct.css'; // Importer le fichier de styles CSS

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [image, setImage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name.trim() === '' || price.trim() === '' || quantity.trim() === '' || image.trim() === '') {
            alert('Veuillez remplir tous les champs du formulaire.');
            return;
        }
        try {
            await axios.post('http://localhost:3000/product', { name, price, quantity, image });
            setName('');
            setPrice('');
            setQuantity('');
            setImage('');
        } catch (error) {
            console.error('Error adding product: ', error);
        }
    };

    return (
        <div className="centered-form">
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;
