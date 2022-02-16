const initialState = []

function reducer ( state = initialState, action ){
  switch ( action.type ){
    case 'SAVE_ALL_TASKS':
      return action.tasks
    default :
      return state
  }
}

export default reducer