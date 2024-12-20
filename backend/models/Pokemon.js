const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PokemonSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    type: {
      type: String,
    },
  },
  { versionKey: false }
)

module.exports = mongoose.model('Pokemon', PokemonSchema)