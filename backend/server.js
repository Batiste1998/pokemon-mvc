const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 5000

mongoose
  .connect(`${process.env.MONGO_URI}`, {
    autoIndex: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error(err))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))