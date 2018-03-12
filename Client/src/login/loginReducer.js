
import {browserHistory} from 'react-router'
import {saveState,loadState,removeState} from '../localStorage'

const DEFAULT_STATE = {
    login: {}
}

const loginReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'USER_CREATE_SUCCESS':
            saveState(action.user)
            return {login: action.user}
        case 'USER_LOGIN_SUCCESS':
            var user={_id:action.user._id,password:action.user.password,dbName:action.user.dbName}
            saveState(user)
            return {login: user}
        case 'USER_LOAD_STATE':
            if(loadState()._id==undefined){browserHistory.replaceState('');return state}
            return {login:loadState()}
        case 'LOGOUT':
            removeState()
            return {login:{}}
        default:
            return state
            
    }

}

export default loginReducer