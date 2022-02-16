import { fetchTasks } from "../apis/tasks"

export const saveAllTasks = (taskArray) =>{
  return {
    type: 'SAVE_ALL_TASKS',
    tasks: taskArray
  }
}

export const loading = (bool) =>{
  return {
    type: 'SET_LOADING',
    isLoading: bool
  }
} 

export const getAllTasks = () =>{
  return (dispatch) =>{
    dispatch(loading(true))

    fetchTasks()
    .then ((tasks) =>{
      dispatch( saveAllTasks(tasks) )
      dispatch( loading(false))
    })
    .catch( err =>{
      console.log( err.message )
    })
  }
}