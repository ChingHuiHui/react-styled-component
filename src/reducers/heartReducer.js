import { ADD_HEART, FETCH_HEART, DELETE_HEART } from "../actions/type"

const initialState = {
  lists: ["To Hebe", "離島"],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_HEART:
      return {
        lists: [...state.lists, action.payload],
      }
    case DELETE_HEART:
      console.log(action.payload)
      return {
        lists: state.lists.filter((l) => l !== action.payload),
      }
    case FETCH_HEART:
      return state
    default:
      return state
  }
}
