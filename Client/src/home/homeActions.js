import uuid from 'uuid/v1'

const API_URL = 'http://localhost:8079/home'
const USER_CREATE_REQUEST = 'USER_CREATE_REQUEST'
const USER_CREATE_SUCCESS = 'USER_CREATE_SUCCESS'
const USER_CREATE_FAILURE = 'USER_CREATE_FAILURE'

export function homeCreate(home,history) {
  return
  const newItem = {_id:home._id, password:home.password, dbName:uuid()}
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
      .then((home) => {
        history.push({
          pathname: '/home',
          search: '',
          state: {}
        })
        dispatch({
          type: USER_CREATE_SUCCESS,
          home: home
        })
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