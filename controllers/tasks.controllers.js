const {Task} = require('../models/task.model')
//import catchAsync
const {catchAsync} = require('../utils/catchAsync.util')

const createTask = catchAsync(async (req, res, next) => {
  const { title, clientId, limitDate } = req.body;

  const newTask = await Task.create({
    title,
    clientId,
    limitDate,
    startDate: new Date(),
  });

  res.status(201).json({
    status: 'success',
    newTask
  });
});
//Get all tasks
const getAllTask = catchAsync( async (req, res, next)=>{
    const tasks = await Task.findAll();

    res.status(200).json({
        status: 'success',
        tasks,
    });
});
//Get task by status
const getTaskByStatus = catchAsync( async (req, res, next)=>{
    const {status} = req.params;
    //conditional status
    if(status === 'active' || 'completed' || 'late' || 'cancel'){
         const taskStatus = await Task.findAll({where: {status}})
         
         res.status(201).json({
            status: 'success',
            taskStatus,
         });
    }
})
//Update task by id
const updateTaskId = catchAsync( async (req, res, next)=>{
    const {id} = req.params
    const {finishDate} = req.body;

    const task = await Task.findOne({where: {id}})
    
    const taskLimitDate = new Date(task.limitDate);
    const taskFinishDate = new Date(finishDate);

    if (taskLimitDate > taskFinishDate) {
        await task.update({
            status: 'completed',
            finishDate,
        })        
    }else{
        await task.update({
            status: 'late',
            finishDate,
        }) 
    }
})
//Cancel task by id
const cancelTaskId = catchAsync( async (req, res, next)=>{
    const {task} = req;

    await task.update({status: 'cancelled'});

    res.status(200).json({status: 'success'});
})

module.exports = {
    createTask,
    getAllTask,
    getTaskByStatus,
    updateTaskId,
    cancelTaskId
}