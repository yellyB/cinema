import { ITicket } from "../common/interface";

const myTicket: ITicket = {
  reserveNo: "",
  title: "",
  place: "",
  room: "",
  seatRow: "",
  seatCol: 0,
  date: "",
  time: "",
  price: 10000,
};

const ticket = (state = myTicket, action) => {
  if (action.type === "setTicket") {
    return action.data;
  } else {
    return state;
  }
};

export default ticket;
