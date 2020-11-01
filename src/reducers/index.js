import { combineReducers } from "redux"
import heartReducer from "./heartReducer"

export default combineReducers({
  heart: heartReducer,
})
