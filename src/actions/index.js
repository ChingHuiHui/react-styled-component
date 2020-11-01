import { ADD_HEART, FETCH_HEART, DELETE_HEART } from "../actions/type"

export const addHeart = (name) => {
  return (dispatch) => {
    dispatch({
      type: ADD_HEART,
      payload: name,
    })
  }
}

export const deleteHeart = (name) => {
  return (dispatch) => {
    console.log("name", name)

    dispatch({
      type: DELETE_HEART,
      payload: name,
    })
  }
}

export const fetchHeart = (name) => {
  return (dispatch) => {
    console.log("action", name)
    dispatch({
      type: FETCH_HEART,
    })
  }
}
