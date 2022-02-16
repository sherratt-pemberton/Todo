// import React from "react"
import { useDispatch, useSelector } from "react-redux"
import React,{useEffect} from 'react'
import {getAllTasks} from '../actions/tasks'

import Task from "./Task"

function TaskList() {
  const tasks = useSelector( reduxState => reduxState.tasks )
  const dispatch = useDispatch()

  console.log('taskList')
  console.log(tasks)
  
  return (
    <div className="taskList">
      <h1>Tasks</h1>
      {tasks.map( task =>{
        return (
          <Task
            key = {task.id}
            task = {task}
          />
        )
      })}
    </div>
  )
}

export default TaskList