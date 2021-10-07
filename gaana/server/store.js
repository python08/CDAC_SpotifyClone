import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers'

// create the store
// - collect all the reducers
// - composeWithDevTools is used to visualize with a browser plugin
const store = createStore(reducers, composeWithDevTools(applyMiddleware()))
export default store
