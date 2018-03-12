import {showNotification} from '../notification/notification'
import * as NT from '../notification/noticationTags'

const API_URL = 'http://localhost:8079/home'
const THEME_BBGC_REQUEST = 'THEME_BBGC_REQUEST'
const THEME_BESC_REQUEST = 'THEME_BESC_REQUEST'
const THEME_BTXC_REQUEST = 'THEME_BTXC_REQUEST'

const SAVE_PROPS_REQUEST = 'SAVE_PROPS_REQUEST'
const SAVE_PROPS_SUCCESS = 'SAVE_PROPS_SUCCESS'
const SAVE_PROPS_FAILURE = 'SAVE_PROPS_FAILURE'
const GET_PROPS_REQUEST = 'GET_PROPS_REQUEST'
const GET_PROPS_SUCCESS = 'GET_PROPS_SUCCESS'
const GET_PROPS_FAILURE = 'GET_PROPS_FAILURE'

const CREA_POST_REQUEST = 'CREA_POST_REQUEST'
const CREA_POST_SUCCESS = 'CREA_POST_SUCCESS'
const CREA_POST_FAILURE = 'CREA_POST_FAILURE'
const UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST'
const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS'
const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE'
const GET_POST_REQUEST = 'GET_POST_REQUEST'
const GET_POST_SUCCESS = 'GET_POST_SUCCESS'
const GET_POST_FAILURE = 'GET_POST_FAILURE'
const DELETE_POST_REQUEST = 'DELETE_POST_REQUEST'
const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS'
const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE'
const CHANGE_BRAND_NAME = 'CHANGE_BRAND_NAME'



const USER_LOAD_STATE = 'USER_LOAD_STATE'
const LOGOUT = 'LOGOUT'



export const loadState = (history) => ({
    type: USER_LOAD_STATE,
    history:history
})

export const logout = () => ({
  type: LOGOUT
})

export const changeBar_BGC = (color) => ({
    type:THEME_BBGC_REQUEST,
    color:color
})
export const changeBar_ESC = (color) => ({
    type:THEME_BESC_REQUEST,
    color:color
})
export const changeBar_TXC = (color) => ({
  type:THEME_BTXC_REQUEST,
  color:color
})
export const changeBrandName = (name) => ({
  type:CHANGE_BRAND_NAME,
  name:name
})

export function saveProps(props) {
    return function (dispatch) {
      dispatch({
        type: SAVE_PROPS_REQUEST
      })
      fetch(API_URL+"/props", {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(props),
      })
        .then(response => response.json())
        .then(() => {
          dispatch({
            type: SAVE_PROPS_SUCCESS,
          })
        })
        .catch(() => {
          dispatch({
            type: SAVE_PROPS_FAILURE,
          })
        })
    }
  }

  export function getProps() {
    return function (dispatch) {
        dispatch({
          type: GET_PROPS_REQUEST
        })
        fetch(API_URL)
          .then(response => response.json())
          .then(props => {
            dispatch({
              type: GET_PROPS_SUCCESS,
              homeStyle: props[0]
            })
          })
          .catch(error => {
            dispatch({
              type: GET_PROPS_FAILURE,
              error: error
            })
          })
      }
  }

  export function createPost(post,response) {
    return function (dispatch) {
      dispatch({
        type: CREA_POST_REQUEST
      })
      fetch(API_URL+"/post", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post),
      })
        .then(response =>response.json())
        .then(post => {
          dispatch({
            type: CREA_POST_SUCCESS,
            post: post
          })
          response(post._id)
          showNotification(NT.SUCCESS,NT.SUCCESS_CREATE_POST)
        })
        .catch(error => {
          dispatch({
            type: CREA_POST_FAILURE,
            error: error
          })
        })
    }
  }

  
export function updatePost(post) {
  return function (dispatch) {
    dispatch({
      type: UPDATE_POST_REQUEST
    })
    fetch(API_URL+"/post", {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    })
      .then(response => response.json())
      .then(result => {
        dispatch({
          type: UPDATE_POST_SUCCESS,
          post:result})
          showNotification(NT.SUCCESS,NT.SUCCESS_UPDATE_POST)
      })
      .catch(error => {
        dispatch({
          type: UPDATE_POST_FAILURE,
          error: error
        })
      })
  }
}

export function deletePost(id){
  return function (dispatch) {
    dispatch({
      type: DELETE_POST_REQUEST
    })
    fetch(API_URL+"/post", {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    })
      .then(response => response.json())
      .then(() => {
        dispatch({
          type: DELETE_POST_SUCCESS,
          _id: id
        })
      })
      .catch(error => {
        dispatch({
          type: DELETE_POST_FAILURE,
          error: error
        });
      })
  }
}

export function getPosts() {
  return function (dispatch) {
      dispatch({
        type: GET_POST_REQUEST
      })
      fetch(API_URL+"/post")
        .then(response => response.json())
        .then(posts => {
          dispatch({
            type: GET_POST_SUCCESS,
            posts: posts
          })
        })
        .catch(error => {
          dispatch({
            type: GET_POST_FAILURE,
            error: error
          })
        })
    }
}


