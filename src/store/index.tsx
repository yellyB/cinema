import { combineReducers } from "redux";
import alarm from "./alarmReducer";

export default combineReducers({
  alarmData: alarm,
});
