# 🌟 Pokemon MVC Project

Une application Node.js simple démontrant l'architecture MVC (Model-View-Controller) en utilisant une base de données de Pokémon.

## 📋 Description

Ce projet est une refactorisation d'une application PHP en Node.js suivant le pattern MVC. Il permet d'afficher une liste de Pokémon stockés dans une base de données MongoDB.

## ⚙️ Technologies Utilisées

- Node.js
- Express.js
- MongoDB avec Mongoose
- EJS (Template Engine)
- dotenv (Gestion des variables d'environnement)

## 🚀 Installation

1. **Clonez le repository**
```bash
git clone https://github.com/Batiste1998/pokemon-mvc.git
cd pokemon-mvc
```

2. **Installez les dépendances**
```bash
npm install
```

3. **Configurez les variables d'environnement**
- Créez un fichier `.env` à la racine du projet
- Ajoutez les variables suivantes :
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/pokemon_db
```

4. **Initialisez la base de données**
```bash
node scripts/initDb.js
```

5. **Lancez l'application**
```bash
npm run dev
```

L'application sera accessible à l'adresse : `http://localhost:5000`

## 📁 Structure du Projet

```
pokemon-mvc/
├── config/
│   └── database.js     # Configuration MongoDB
├── controllers/
│   └── pokemonController.js   # Logique métier
├── models/
│   └── Pokemon.js      # Modèle Mongoose
├── routes/
│   └── pokemonRoutes.js    # Définition des routes
├── views/
│   └── pokemons.ejs    # Vue EJS
├── scripts/
│   └── initDb.js       # Script d'initialisation DB
├── .env                # Variables d'environnement
├── .gitignore
├── app.js             # Point d'entrée
└── README.md
```

## 🛠 Fonctionnalités

- Affichage des Pokémon en liste
- Architecture MVC claire et simple
- Base de données MongoDB
- Gestion des erreurs

## 🌈 Démonstration

Après le lancement, vous verrez un tableau contenant :
- Le nom de chaque Pokémon
- Leur type respectif