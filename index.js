const express = require('express')

const app = express()

app.use(express.json())

app.use('/products', require('./routes/productRoute'))

app.listen(3333, () => console.log('Server running on port 3333'))