import {showNotification} from '../notification/notification'
import * as NT from '../notification/noticationTags'

const DEFAULT_STATE = {
    homeStyle: {},
    posts: []

}

const homeReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'THEME_BBGC_REQUEST':
            return {homeStyle: {pageName:state.homeStyle.pageName,
                                barBackgroundColor:action.color,
                                barEmphasize:state.homeStyle.barEmphasize,
                                barTextColor:state.homeStyle.barTextColor},
                                posts:state.posts}
        case 'THEME_BESC_REQUEST':
            return {homeStyle: {pageName:state.homeStyle.pageName,
                                barBackgroundColor:state.homeStyle.barBackgroundColor,
                                barEmphasize:action.color,
                                barTextColor:state.homeStyle.barTextColor},
                                posts:state.posts}
        case 'THEME_BTXC_REQUEST':
            return {homeStyle: {pageName:state.homeStyle.pageName,
                                barBackgroundColor:state.homeStyle.barBackgroundColor,
                                barEmphasize:state.homeStyle.barEmphasize,
                                barTextColor:action.color},
                                posts:state.posts}
        case 'GET_PROPS_SUCCESS':
        console.log(action)
            return {homeStyle: {pageName:action.homeStyle.pageName,
                                barBackgroundColor:action.homeStyle.barBackgroundColor,
                                barEmphasize:action.homeStyle.barEmphasize,
                                barTextColor:action.homeStyle.barTextColor},
                                posts:state.posts}
        case 'CHANGE_BRAND_NAME':
            return {homeStyle: {pageName:action.name,
                                barBackgroundColor:state.homeStyle.barBackgroundColor,
                                barEmphasize:state.homeStyle.barEmphasize,
                                barTextColor:state.homeStyle.barTextColor},
                                posts:state.posts}

        case 'CREA_POST_SUCCESS':
            return {homeStyle:state.homeStyle,
                    posts:[action.post,...state.posts]}
        case 'UPDATE_POST_SUCCESS':
                return {homeStyle:state.homeStyle,
                        posts:state.posts.map(post=>{if(post._id!==action.post._id){return post}return action.post})}
        case 'GET_POST_SUCCESS':
                return {homeStyle:state.homeStyle,
                        posts:action.posts}   
        case 'DELETE_POST_SUCCESS':
                return {homeStyle:state.homeStyle,
                        posts:state.posts.filter(post=>{if(post._id!==action._id){return post}})}
        case 'LOGOUT':
            return {homeStyle:{},
                    posts:[]}
                         
        default:
            return state
            
    }

}

export default homeReducer