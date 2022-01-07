export interface IMovieList {
  key: number;
  title: string;
  bookRate: string;
  releaseDate: string;
}

export interface IMovieStartTimes {
  name: string;
  times: string[];
}

export interface IComment {
  writer: string;
  movieKey: number;
  content: string;
  rate: number;
  like: number;
  dislike: number;
  profileIdx: number;
}

export interface IBoard {
  index: number;
  title: string;
  writer: string;
  content: string;
  viewCount: number;
}

export interface IAlarm {
  index: number;
  title: string;
  content: string;
}

export interface ISeat {
  seatRow: string;
  seatCol: number;
}
export interface ITicket extends ISeat {
  reserveNo: string;
  title: string;
  place: string;
  room: string;
  // seatRow: string;
  // seatCol: number;
  date: string;
  time: string;
  price: number;
}

export interface IStoreState {
  alarmData: IAlarm[];
  ticketData: ITicket;
}
