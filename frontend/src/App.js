import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Ajout de Routes
import { Card } from 'react-bootstrap';
import ProductList from './components/ProductList';
import UserList from './components/UserList';
import AddProduct from './components/AddProduct';
import AddUser from './components/AddUser';
import './App.css';

const Home = () => {
    return (
        <div className="container mt-4 d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
            <h1 className="text-center mb-4" style={{ marginLeft: '-10%' , marginTop: '50px'}}>Welcome to SenMarket</h1>
            <Card className="text-center p-4 shadow" style={{ width: '25rem' }}>
                <Card.Body>
                    <Card.Text>
                        <p>Découvrez nos produits incroyables et profitez de nos offres exclusives !</p>
                    </Card.Text>
                    <Link to="/products" className="btn btn-primary me-2">Voir les produits</Link>
                    <Link to="/users" className="btn btn-primary">Voir les utilisateurs</Link>
                </Card.Body>
            </Card>
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <div className="App container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/products">Products</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/users">Users</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/add-product" className="btn btn-success">Add Product</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/add-user" className="btn btn-success">Add User</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Routes> {/* Ajout de Routes */}
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/users" element={<UserList />} />
                    <Route path="/add-product" element={<AddProduct />} />
                    <Route path="/add-user" element={<AddUser />} />
                    <Route path="/" element={<Home />} /> {/* Route pour la page d'accueil */}
                </Routes> {/* Ajout de Routes */}
            </div>
        </Router>
    );
};

export default App;
