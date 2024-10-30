const Pokemon = require('../models/Pokemon')

const getAllPokemons = async (req, res, next) => {
  try {
    const pokemons = await Pokemon.find()
    res.render('pokemons', {
      pokemons,
    })
  } catch (error) {
    next(error)
  }
}

module.exports = { getAllPokemons }
