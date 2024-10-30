require('dotenv').config()
const express = require('express')
const connectDB = require('./config/database.js')
const pokemonRoutes = require('./routes/pokemonRoutes.js')

const app = express()
const PORT = process.env.PORT || 5000

connectDB()

app.set('view engine', 'ejs')
app.set('views', './views')

app.use('/', pokemonRoutes)

app.use((err, req, res, next) => {
    console.error('🔥 Erreur : ', err.message)
    res.status(500).json({ success: false, message: process.env.NODE_ENV === 'development' ? err.message : 'Erreur serveur' })
})

app.listen(PORT, () => {
    console.log(`🚀 Serveur démarré sur le port ${PORT}`)
})