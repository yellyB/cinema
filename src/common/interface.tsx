export interface IMovieList {
  key: number;
  title: string;
  orignTitle: string;
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
  user: string;
  movieKey: number;
  content: string;
  like: number;
  dislike: number;
}
