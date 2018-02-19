import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import ReduxThunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { reducer as formReducer } from 'redux-form'
import exampleReducer from './Example/exampleReducer'

const logger = createLogger({
  collapsed: true,
  duration: true,
  diff: true,
})



const Store = createStore(combineReducers({nameofReducer:exampleReducer, form: formReducer}), 
composeWithDevTools(
  applyMiddleware(
    ReduxThunk,
    logger
  ),
))

export default Store