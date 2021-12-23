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
export interface IMovieTimesEachRoom {
  room: string;
  time: string;
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
