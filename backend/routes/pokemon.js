const express = require('express')
const router = express.Router()

router.post('/create')
router.get('/all')
router.delete('/delete')
router.put('/update')
router.get('/find/:_id')

module.exports = router