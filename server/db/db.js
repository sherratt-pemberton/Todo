const conn = require('./connection')

function getAllTasks( db = conn ){
  return db('tasks')
}

function getTaskById( id, db = conn ){
  return db('tasks')
  .where( 'id', id )
  .first()
}

function addTask(task, db = conn){
  return db('tasks')
  .insert( task )
}

function updateTask(updatedTask, db = conn ){
  return db('tasks')
  .where('id', updatedTask.id )
  .update({
    name: updatedTask.name,
    details: updatedTask.details,
    priority: updatedTask.priority,
    completed: updatedTask.completed
  } )
}

function deleteTask( id, db = conn ){
  return db('tasks')
  .where('id', id)
  .del()
}

module.exports ={
  getAllTasks,
  getTaskById,
  addTask,
  updateTask,
  deleteTask
}
