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