import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { createLogger } from 'redux-logger'

import reducers from './reducers'

const middlewares = applyMiddleware(promise(), createLogger(), thunk)

export default createStore(reducers, middlewares)
