require('dotenv').config()
const mongoose = require('mongoose')
const Pokemon = require('../models/Pokemon')

const initialPokemons = [
  { name: 'Bulbizarre', type: 'Plante/Poison' },
  { name: 'Herbizarre', type: 'Plante/Poison' },
  { name: 'Florizarre', type: 'Plante/Poison' },
  { name: 'Salamèche', type: 'Feu' },
  { name: 'Reptincel', type: 'Feu' },
  { name: 'Dracaufeu', type: 'Feu/Vol' },
  { name: 'Carapuce', type: 'Eau' },
  { name: 'Carabaffe', type: 'Eau' },
  { name: 'Tortank', type: 'Eau' },
  { name: 'Chenipan', type: 'Insecte' },
]

const initializeDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('✅ Connexion à MongoDB établie')

    await Pokemon.deleteMany({})
    console.log('🧹 Base de données nettoyée')

    await Pokemon.insertMany(initialPokemons)
    console.log('✨ Pokémon initiaux insérés avec succès')

    mongoose.connection.close()
    console.log('👋 Déconnexion de MongoDB')
  } catch (error) {
    console.error(`❌ Erreur : ${error.message}`)
    process.exit(1)
  }
}

initializeDatabase()
