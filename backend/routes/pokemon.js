const express = require('express')
const router = express.Router()
const pokemonController = require('./../controllers/pokemon')
const { pokemonValidation } = require('./../validation')

router.post('/create', pokemonValidation.create, pokemonController.create)
router.get('/all', pokemonController.all)
router.delete('/delete', pokemonController.delete)
router.put('/update', pokemonController.update)
router.get('/find/:_id', pokemonController.find)

module.exports = router