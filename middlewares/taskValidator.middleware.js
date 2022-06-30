const {body, validationResult} = require('express-validator')
const {AppError} = require('../utils/appError.util')

const checkResult = (req, res, next) =>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        //Array errors
        const errorMsg = errors.array().map((err)=> err.msg);
        const message = errorMsg.join(', ');
        
        return next(new AppError(message, 400));
    }

    next();
}

const createTaskValidator = [
    body('title').notEmpty().withMessage('Title cannot be empty'),
	body('clientId').notEmpty().withMessage('Must provide a valid Id'),
	checkResult,
];

module.exports = {createTaskValidator}