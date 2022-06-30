//Models
const {Client} = require('../models/client.model')
//import catchAsync
const {catchAsync} = require('../utils/catchAsync.util')

//Create client
const createClient = catchAsync( async (req, res, next)=>{
    const {name, email, password} = req.body;

    const newClient = await Client.create({
        name,
        email,
        password,
    });

    res.status(201).json({
        status: 'success',
        newClient,
    });
})

//Get all clients
const getAllClients = catchAsync( async (req, res, next)=>{
    const clients = await Client.findAll();

    res.status(200).json({
        status: 'success',
        clients,
    })
})

//Update client
const updateClient = catchAsync( async (req, res, next)=>{
    const {client} = req;

    const {name, email} = req.body;

    await client.update({name, email});

    res.status(201).json({
        status: 'Client updated'
    })
})

//Disable client
const disableClient = catchAsync( async (req, res, next)=>{
    const {client} = req;

    await client.update({status: 'Cancelled'});

    res.status(201).json({status: 'success'});
})

module.exports = {
    createClient,
    getAllClients,
    updateClient,
    disableClient
}