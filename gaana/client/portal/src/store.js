import { applyMiddleware, createStore } from 'redux'
import reducers from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'


// create the store
// - collect all the reducers
// - composeWithDevTools is used to visualize with a browser plugin
//const store = createStore(reducers)
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store
