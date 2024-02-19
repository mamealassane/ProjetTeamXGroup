// Dans votre fichier server.js

// Importez les modules nécessaires
const express = require('express');
const mongoose = require('mongoose');
const userController = require('./controllers/userscontroller');
const productController = require('./controllers/productcontroller');
const path = require('path');
const cors = require('cors');

// Créez une application Express
const app = express();
const port = 3000;

// Connectez-vous à la base de données MongoDB
mongoose.connect('mongodb://localhost:27017');

// Middleware pour permettre les requêtes CORS
app.use(cors());
app.use(express.json());

// Middleware pour servir les fichiers statiques du frontend
app.use(express.static(path.join(__dirname, 'frontend/build')));

// Routes pour les utilisateurs
app.get('/users', userController.getAllUsers);
app.get('/user/:id', userController.getUserById);
app.post('/user', userController.createUser);
app.patch('/user/:id', userController.updateUser);
app.delete('/user/:id', userController.deleteUser);

// Routes pour les produits
app.get('/products', productController.getAllProducts); // Cette route est nécessaire pour la requête GET /products
app.get('/product/:id', productController.getProductById);
app.post('/product', productController.createProduct);
app.patch('/product/:id', productController.updateProduct);
app.delete('/product/:id', productController.deleteProduct);

// Route pour servir l'application frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

// Écoutez le port défini
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
