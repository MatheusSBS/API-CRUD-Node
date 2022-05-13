const express = require('express')

const server = express()

server.use(express.json())

const countries = ['Brazil', 'China', 'Estonia', 'France', 'Georgia', 'Hungary', 'Iceland', 'Japan', 'Kuwait', 'Lebanon']

// return one countrie
server.get('/countries:index', (req, res) =>{
    const { index } = req.params

    return res.json(countries[index])
})
