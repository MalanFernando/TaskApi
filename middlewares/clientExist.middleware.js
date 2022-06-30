const {Client} = require('../models/client.model')
const {AppError} = require('../utils/appError.util')
const {catchAsync} = require('../utils/catchAsync.util')

const clientExist = catchAsync(async (req, res, next)=>{
    const {id} = req.params;
    const client = await Client.findOne({where: {id}})

    if(!client){
        return next(new AppError('Client not found ', 404));
    }

    req.client = client;

    next();
})

module.exports = {clientExist}