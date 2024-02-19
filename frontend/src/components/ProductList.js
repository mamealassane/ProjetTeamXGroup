// ProductList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css'; 


const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products: ', error);
            });
    }, []);

    const deleteProduct = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/product/${id}`);
            setProducts(products.filter(product => product._id !== id));
        } catch (error) {
            console.error('Error deleting product: ', error);
        }
    };

    return (
        <div className="container mt-100">
            <h1>Products</h1>
            <div className="row">
                {products.map(product => (
                    <div className="col-md-4 col-sm-6" key={product._id}>
                        <div className="card mb-30">
                            <a className="card-img-tiles" href="#" data-abc="true">
                                <div className="inner">
                                <div className="main-img"><img className="product-image" src={product.image} alt={product.name} /></div>
                                </div>
                            </a>
                            <div className="card-body text-center">
                                <h4 className="card-title">{product.name}</h4>
                                <p className="text-muted">Price: ${product.price}</p>
                                <p className="text-muted">Quantity: {product.quantity}</p>
                                <button className="btn btn-outline-primary btn-sm" onClick={() => deleteProduct(product._id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
