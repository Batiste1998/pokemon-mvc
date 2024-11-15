const { body, validationResult } = require('express-validator')

const create = [
  body('name').notEmpty().withMessage('Name is required'),
  body('type').notEmpty().withMessage('Type is required'),
  (req, res, next) => {
    const errorsValidation = validationResult(req)
    if (!errorsValidation.isEmpty()) {
      let errors = {}
      errorsValidation.errors.map((err) => {
        errors = { ...errors, [err.path]: err.msg }
      })
      res.status(400).json({ success: false, result: errors })
    } else {
      next()
    }
  },
]

module.exports = { create }
