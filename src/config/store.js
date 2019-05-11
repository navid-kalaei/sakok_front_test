import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import reducer from '../reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleware = [thunk, logger]

const store = createStore(
	reducer,
	composeEnhancers(
		applyMiddleware(...middleware),
	),
)

export default store