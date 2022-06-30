const {body, validationResult} = require('express-validator')
const {AppError} = require('../utils/appError.util')

const checkResult = (req, res, next) =>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        //Array errors
        const errorMsg = errors.array().map((err)=> err.msg);
        const message = errorMsg.join('. ');
        
        return next(new AppError(message, 400));
    }

    next();
}

const createClientValidator = [
    body('name').notEmpty().withMessage('Name cannot be empty'),
	body('email').isEmail().withMessage('Must provide a valid email'),
	body('password')
		.isLength({ min: 8 })
		.withMessage('Password must be at least 8 characters long')
		.isAlphanumeric()
		.withMessage('Password must contain letters and numbers'),
	checkResult,
];

module.exports = {createClientValidator}