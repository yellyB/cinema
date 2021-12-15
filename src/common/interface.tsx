export interface IMovieList {
  key: number;
  title: string;
  orignTitle: string;
  bookRate: string;
  releaseDate: string;
}

export interface IComment {
  user: string;
  movieKey: number;
  content: string;
  like: number;
  dislike: number;
}
