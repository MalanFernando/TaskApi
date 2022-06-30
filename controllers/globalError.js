const globalError = (err, req, res, next) =>{
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        status: err.status,
        message: err.message,
        error: err,
        stack: err.stack,
    })
}

module.exports = {globalError}