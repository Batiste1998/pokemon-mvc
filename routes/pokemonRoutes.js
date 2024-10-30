const express = require('express')
const router = express.Router()
const { getAllPokemons } = require('../controllers/pokemonController')

router.get('/', (req, res) => {
    res.redirect('/pokemons')
})

router.get('/pokemons', getAllPokemons)

module.exports = router