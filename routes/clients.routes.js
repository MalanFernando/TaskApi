const express = require('express')
const {createClientValidator} = require('../middlewares/clientValidator.middleware')
const {clientExist} = require('../middlewares/clientExist.middleware')

//Controllers
const {
    createClient,
    getAllClients,
    updateClient,
    disableClient
} = require('../controllers/clients.controller')

const clientRouter = express.Router()


clientRouter.post('/', createClientValidator, createClient)
clientRouter.get('/', getAllClients)
clientRouter.patch('/:id', clientExist, updateClient)
clientRouter.delete('/:id', clientExist, disableClient)

module.exports = {clientRouter}