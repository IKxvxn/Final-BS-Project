import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import ReduxThunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { reducer as formReducer } from 'redux-form'
import loginReducer from './login/loginReducer'
import homeReducer from './home/homeReducer'

const logger = createLogger({
  collapsed: true,
  duration: true,
  diff: true,
})



const Store = createStore(combineReducers({login:loginReducer, form: formReducer, home:homeReducer}), 
composeWithDevTools(
  applyMiddleware(
    ReduxThunk,
    logger
  ),
))

export default Store