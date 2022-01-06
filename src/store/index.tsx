import { combineReducers } from "redux";
import alarm from "./alarmReducer";
import ticket from "./ticketReducer";

export default combineReducers({
  alarmData: alarm,
  ticketData: ticket,
});
