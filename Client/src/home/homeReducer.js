import {showNotification} from '../notification/notification'
import * as NT from '../notification/noticationTags'

const DEFAULT_STATE = {
    home: {}
}

const homeReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'WTF':
            showNotification(NT.SUCCESS,NT.SUCCESS_ACCOUNT)
            return {home: action.user}
        default:
            return state
            
    }

}

export default homeReducer