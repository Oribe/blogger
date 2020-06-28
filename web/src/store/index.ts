import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers'

const reducer = combineReducers(reducers)

const middleware = applyMiddleware(thunk)

const middlewareWithDeveTool = compose(composeWithDevTools(middleware))

const store = createStore(reducer, middlewareWithDeveTool)

export default store
