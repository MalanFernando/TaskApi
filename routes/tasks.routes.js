const express = require('express')
const {createTaskValidator} = require('../middlewares/taskValidator.middleware');
const {taskExist} = require('../middlewares/taskExist.middleware')

//Controllers
const {
    createTask,
    getAllTask,
    getTaskByStatus,
    updateTaskId,
    cancelTaskId
} = require('../controllers/tasks.controllers')

const taskRouter = express.Router()

taskRouter.post('/', createTaskValidator, createTask)
taskRouter.get('/', getAllTask)
taskRouter.get('/:status', getTaskByStatus)
taskRouter.patch('/:id', taskExist, updateTaskId)
taskRouter.delete('/:id', taskExist, cancelTaskId)

module.exports = {taskRouter}