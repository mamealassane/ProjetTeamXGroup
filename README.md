# Projet 1 : Backend - REST API - Express - MongoDB

Ce projet consiste à mettre en place un serveur backend utilisant le framework Express avec MongoDB comme base de données. Le backend comportera deux modèles, User et Product, avec leurs contrôleurs et services respectifs.

## Modèle User

Le modèle User aura les champs suivants :

- `_id`: Identifiant unique de l'utilisateur
- `firstname`: Prénom de l'utilisateur
- `lastname`: Nom de famille de l'utilisateur
- `address`: Adresse de l'utilisateur

### Endpoints User

- `GET /users`: Récupère l'ensemble des utilisateurs enregistrés
- `GET /user/:id`: Récupère un utilisateur par son identifiant
- `POST /user`: Enregistre un utilisateur sur la base de données
- `PATCH /user/:id`: Modifie un utilisateur par son identifiant
- `DELETE /user/:id`: Supprime un utilisateur par son identifiant

## Modèle Product

Le modèle Product aura les champs suivants :

- `_id`: Identifiant unique du produit
- `name`: Nom du produit
- `price`: Prix du produit
- `quantity`: Quantité disponible du produit
- `image`: URL de l'image du produit (si possible)

### Endpoints Product

- `GET /products`: Récupère l'ensemble des produits enregistrés
- `GET /product/:id`: Récupère un produit par son identifiant
- `POST /product`: Enregistre un produit sur la base de données
- `PATCH /product/:id`: Modifie un produit par son identifiant
- `DELETE /product/:id`: Supprime un produit par son identifiant

# Projet 2 : ReactJS

Ce projet consiste à mettre en place une application web React qui communiquera avec le backend du projet 1 pour afficher l'ensemble des produits et utilisateurs enregistrés.

---

