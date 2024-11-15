const PokemonModel = require('../models/Pokemon')

const methods = {
  create: (req, res) => {
    const { name, type } = req.body

    PokemonModel.init().then(() => {
      const pokemon = new PokemonModel({ name, type })
      pokemon
        .save()
        .then((result) => res.json({ success: true, result }))
        .catch((error) =>
          res.status(400).json({ success: false, result: error })
        )
    })
  },

  all: (req, res) => {
    PokemonModel.find()
      .then((result) => res.json({ success: true, result }))
      .catch((error) => res.status(400).json({ success: false, result: error }))
  },

  delete: (req, res) => {
    const { _id } = req.body

    PokemonModel.deleteOne({ _id })
      .then((result) => {
        if (result.deletedCount === 0) {
          return res
            .status(404)
            .json({ success: false, result: 'Pokemon not found' })
        }
        res.json({ success: true, result })
      })
      .catch((error) => res.status(400).json({ success: false, result: error }))
  },

  update: (req, res) => {
    const { _id, name, type } = req.body

    PokemonModel.updateOne({ _id }, { name, type })
      .then((result) => {
        if (result.matchedCount === 0) {
          return res
            .status(404)
            .json({ success: false, result: 'Pokemon not found' })
        }
        res.json({ success: true, result })
      })
      .catch((error) => res.status(400).json({ success: false, result: error }))
  },

  find: (req, res) => {
    const { _id } = req.params

    PokemonModel.findOne({ _id })
      .then((result) => {
        if (!result) {
          return res
            .status(404)
            .json({ success: false, result: 'Pokemon not found' })
        }
        res.json({ success: true, result })
      })
      .catch((error) => res.status(400).json({ success: false, result: error }))
  },
}

module.exports = methods
