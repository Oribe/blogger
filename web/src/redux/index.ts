import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers(reducers)

const middleware = applyMiddleware(thunk)

const middlewareWithDeveTool = compose(composeWithDevTools(middleware))

const store = createStore(reducer, middlewareWithDeveTool)

export default store
