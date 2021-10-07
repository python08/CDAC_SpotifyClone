import { combineReducers } from 'redux'
import counterReducer from './counterReducer'

// collect all the reducers
const reducers = combineReducers({
  // counter here is the name of the member
  // whose value will be stored in the store
  counter: counterReducer,
  
})

export default reducers
