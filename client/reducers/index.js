import { combineReducers } from 'redux'

// import stuff from './stuff'
import tasks from './tasks'
import loading from './loading'

export default combineReducers({
  // stuff
  tasks,
  loading
})
