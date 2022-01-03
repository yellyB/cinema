import * as types from "../actions/ActionTypes";
import { IAlarm } from "../common/interface";

const alarmList: IAlarm[] = [
  {
    index: 0,
    title: "알림",
    content: "그렇습니다.",
  },
  {
    index: 0,
    title: "경고!",
    content: "경고쓰.",
  },
];

// const counter = (state = alarm, action) => {
//   switch (action.type) {
//     case types.INCREMENT:
//       return { ...state, number: state.number + 1 };
//     case types.DECREMENT:
//        return { ...state, number: state.number - 1 };
//     case types.SET_COLOR:
//       return { ...state, color: action.color };
//     default:
//       return state;
//   }
// };

const alarm = (state = alarmList, action) => {
  return state;
};

export default alarm;
