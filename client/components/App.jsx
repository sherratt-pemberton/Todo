import React,{useEffect} from 'react'
import TaskList from './TaskList'
import {getAllTasks} from '../actions/tasks'
import {useDispatch,useSelector} from 'react-redux'

function App () {
//  const loading = useSelector(state => state.loading)
  const dispatch = useDispatch()
    
  useEffect (() =>{  
    dispatch(getAllTasks())
  }, [])

  
  return (
    <>


      <header className="header">
        <h1>Todo</h1>
      </header>
      <div className="main">
        <TaskList />
      </div>
    </>
  )
}

export default App