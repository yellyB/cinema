import { IAlarm } from "../common/interface";

const alarmList: IAlarm[] = [
  {
    index: 0,
    title: "알림",
    content: "작성글에 반응이 2개 있습니다.",
  },
  {
    index: 1,
    title: "결제실패",
    content: "잔액 부족으로 결제 실패",
  },
];

const alarm = (state = alarmList, action) => {
  if (action.type === "addAlarm") {
    const newIdx = state.length === 0 ? 0 : state[state.length - 1].index + 1;
    return [...state, { index: newIdx, ...action.data }];
  } else if (action.type === "deleteAlarm") {
    if (action.idx === undefined) {
      return [];
    } else {
      const temp = state.filter((item) => item.index !== action.idx);
      return temp;
    }
  } else {
    return state;
  }
};

export default alarm;
