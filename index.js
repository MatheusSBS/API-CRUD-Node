const express = require('express')

const server = express()

server.use(express.json())

const countries = ['Brazil', 'China', 'Estonia', 'France', 'Georgia', 'Hungary', 'Iceland', 'Japan', 'Kuwait', 'Lebanon']

// return one countrie
server.get('/countries:index', (req, res) =>{
    const { index } = req.params

    return res.json(countries[index])
})

// return all countries
server.get('/countries', (req, res) =>{
    return res.json(countries)
})

// Add a countrie
server.post('countries', (req, res) =>{
    const { name } = req.body
    countries.push(name)

    return res.json(countries)
})

// Update a countrie
server.put('/countries/:index', (req, res) =>{
    const = { index } = req.params
    const = { name } = req.body

    countries[index] = name
    return res.json(countries)
})

server.listen(3001)