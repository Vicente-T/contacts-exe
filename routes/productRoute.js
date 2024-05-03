const router = require('express').Router()

const products = [
    {
        name : "Ricardo",
        email: "r@r.com",
        numero: "997 890 990", 
        morada: "Rua das Palmeiras, 123"
    },
    {
        name : "Maria",
        email: "m@r.com",
        numero: "993 444 940", 
        morada: "Rua das jonhas, 654"
    }
]


router.get('/', (req, res) => {
    res.status(200).json(products)
})

router.post('/', (req, res) => {
    const { name, email, numero, morada } = req.body

    if(!name || !email || !numero || !morada) {
        return res.status(422).json("Missing parameters")
    }

    products.push({
        name,
        email,
        numero,
        morada
    })

    res.status(201).json("The resource was created successfully")
}) 

router.get('/:name', (req, res) => {
    const product = products.find(product => product.name === req.params.name)

    if(!product) {
        return res.status(404).json("Product not found")
    }

    res.status(200).json(product)
})

router.put('/:name', (req, res) => {
    const product = products.find(product => product.name === req.params.name)

    if(!product) {
        return res.status(404).json("Product not found")
    }

    const { name, email, numero, morada } = req.body

    if(name){
        product.name = name
    }
    if(email){
        product.email = email
    }
    if(numero){
        product.numero = numero
    }
    if(morada){
        product.morada = morada
    }

    res.status(200).json("The resource was updated successfully")
})

router.delete('/:name', (req, res) => {
    const productIndex = products.findIndex(product => product.name === req.params.name)

    if(productIndex == -1) {
        return res.status(404).json("Product not found")
    }

    products.splice(productIndex, 1)

    res.status(200).json("The resource was deleted successfully")
})

module.exports = router