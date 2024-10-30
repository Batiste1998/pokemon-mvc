const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('✅ Connexion à MongoDB établie')
  } catch (error) {
    console.error(`❌ Erreur : ${error.message}`)
    process.exit(1)
  }
}

module.exports = connectDB
