const express = require('express');
const {globalError} = require('./controllers/globalError')//Import GlobalError
const {AppError} = require('./utils/appError.util')//Import AppError

//init app
const app = express();
//use typetext json
app.use(express.json())

//routers
const {clientRouter} = require('./routes/clients.routes')
const {taskRouter} = require('./routes/tasks.routes')

//Endpoints
app.use('/api/v1/clients', clientRouter);
app.use('/api/v1/tasks', taskRouter);

//Message to unknown routes to the server
app.all('*', (req, res, next)=>{
    next(
        new AppError(
            `${req.method} ${req.originalUrl} not found in this server`,
            404
        )
    );
});

//global error implemented
app.use(globalError);
module.exports = {app}