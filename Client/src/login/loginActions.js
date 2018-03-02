import uuid from 'uuid/v1'
import {showNotification} from '../notification/notification'
import * as NT from '../notification/noticationTags'

const API_URL = 'http://localhost:8079/login'
const USER_CREATE_REQUEST = 'USER_CREATE_REQUEST'
const USER_CREATE_SUCCESS = 'USER_CREATE_SUCCESS'
const USER_CREATE_FAILURE = 'USER_CREATE_FAILURE'

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
        dispatch({
          type: USER_CREATE_SUCCESS,
          user: user
        })
        history.push({
          pathname: '/home',
          search: '',
          state: {}
        })
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


export const template = () => {
    return {

    }
  }