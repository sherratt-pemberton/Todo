import React from 'react'

function Task( props ){
  const task = props.task

  console.log(props)
  function deleteTask(id){
    alert("function not implimented")
  }

  function updateTask(id){
    alert("function not implimented")
  }

  return (
    <div className='task'>
      <h2 className='name'>{task.name}</h2>

      <p className='id'>Id: {task.id}</p>
      {/* <p className='name'>Name: {task.name}</p> */}
      <p className='details'>Details: {task.details}</p>
      <p className='priority'>Priority: {task.priority}</p>
      <p className='completed'>completed: {task.completed}</p>

      <button>Delete task</button>
      <button>Update task</button>
    
      <hr/>

    </div>
  )
}

export default Task