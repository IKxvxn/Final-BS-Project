import uuid from 'uuid/v1'
import {showNotification} from '../notification/notification'
import * as NT from '../notification/noticationTags'

const API_URL = 'http://localhost:8079/login'
const USER_CREATE_REQUEST = 'USER_CREATE_REQUEST'
const USER_CREATE_SUCCESS = 'USER_CREATE_SUCCESS'
const USER_CREATE_FAILURE = 'USER_CREATE_FAILURE'

const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST'
const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE'


export function userCreate(user,history) {
  const newItem = {_id:user._id, password:user.password, dbName:uuid()}
  return function (dispatch) {
    dispatch({
      type: USER_CREATE_REQUEST
    })
    fetch(API_URL+"/signUp", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem),
    })
      .then(response => response.json())
      .then((user) => {
        if(user.exist==true){
          showNotification(NT.ERROR,NT.ERROR_ACCOUNT_EXISTS)
          return
        }
        dispatch({
          type: USER_CREATE_SUCCESS,
          user: user
        })
        history.push('/home')
        showNotification(NT.SUCCESS,NT.SUCCESS_ACCOUNT)
      })
      .catch(error => {
        dispatch({
          type: USER_CREATE_FAILURE,
          error: error
        })
      })
  }
}

export function userLog(user,history) {
  return function (dispatch) {
    dispatch({
      type: USER_LOGIN_REQUEST
    })
    fetch(API_URL+"/signIn", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
      .then(response => response.json())
      .then((user) => {
        if(user.auth==false){
          showNotification(NT.ERROR,NT.ERROR_ACCOUNT_CREDENTIALS)
          return
        }
        dispatch({
          type: USER_LOGIN_SUCCESS,
          user: user
        })
        history.push('/home')
        showNotification(NT.SUCCESS,NT.SUCCESS_LOG)
      })
      .catch(error => {
        dispatch({
          type: USER_LOGIN_FAILURE,
          error: error
        })
      })
  }
}

export const template = () => {
    return {

    }
  }