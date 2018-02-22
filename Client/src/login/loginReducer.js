import {showNotification} from '../notification/notification'
import * as NT from '../notification/noticationTags'

const DEFAULT_STATE = {
    login: {}
}

const loginReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'USER_CREATE_SUCCESS':
            showNotification(NT.SUCCESS,NT.SUCCESS_ACCOUNT)
            return {login: action.user}
        default:
            return state
            
    }

}

export default loginReducer