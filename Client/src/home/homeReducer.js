import {showNotification} from '../notification/notification'
import * as NT from '../notification/noticationTags'

const DEFAULT_STATE = {
    homeStyle: {
        pageName:"MyPage" /*9*/,
        barBackgroundColor:"#263238", 
        barEmphasize:"#036cab",
        barTextColor:"#F5F5F5"
    },

}

const homeReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'THEME_BBGC_REQUEST':
            return {homeStyle: {pageName:state.homeStyle.pageName,
                                barBackgroundColor:action.color,
                                barEmphasize:state.homeStyle.barEmphasize,
                                barTextColor:state.homeStyle.barTextColor}}
        case 'THEME_BESC_REQUEST':
            return {homeStyle: {pageName:state.homeStyle.pageName,
                                barBackgroundColor:state.homeStyle.barBackgroundColor,
                                barEmphasize:action.color,
                                barTextColor:state.homeStyle.barTextColor}}
        case 'THEME_BTXC_REQUEST':
            return {homeStyle: {pageName:state.homeStyle.pageName,
                                barBackgroundColor:state.homeStyle.barBackgroundColor,
                                barEmphasize:state.homeStyle.barEmphasize,
                                barTextColor:action.color}}
        case 'GET_PROPS_SUCCESS':
            return {homeStyle: {pageName:action.homeStyle.pageName,
                                barBackgroundColor:action.homeStyle.barBackgroundColor,
                                barEmphasize:action.homeStyle.barEmphasize,
                                barTextColor:action.homeStyle.barTextColor}}
        default:
            return state
            
    }

}

export default homeReducer