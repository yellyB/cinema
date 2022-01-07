import axios from "axios";
import {
  IBoard,
  IComment,
  IMovieList,
  IMovieStartTimes,
  ITicket,
} from "./interface";

export const getMovieList = async () => {
  let movies: IMovieList[] = [];
  await axios
    .get(process.env.PUBLIC_URL + "/datas/movies.json")
    .then((response) => {
      movies = response.data.data;
    });

  return movies;
};

export const getTheaters = async () => {
  let theaters: string[] = [];
  await axios
    .get(process.env.PUBLIC_URL + "/datas/theaters.json")
    .then((response) => {
      for (const theater of response.data.data) {
        theaters.push(theater.place);
      }
    });

  return theaters;
};

export const getTimes = async () => {
  let theaters: IMovieStartTimes[];
  await axios
    .get(process.env.PUBLIC_URL + "/datas/startTimes.json")
    .then((response) => {
      theaters = response.data.data;
    });

  return theaters;
};

export const getBoardData = async () => {
  let boardData: IBoard[] = [];
  await axios
    .get(process.env.PUBLIC_URL + "/datas/board.json")
    .then((response) => {
      for (const item of response.data.data) {
        boardData.push(item);
      }
    });

  return boardData;
};

export const getComments = async () => {
  let comments: IComment[] = [];
  await axios
    .get(process.env.PUBLIC_URL + "/datas/comments.json")
    .then((response) => {
      const res = response.data.data;
      res.forEach(
        (element: {
          writer: any;
          movieKey: any;
          content: any;
          rate: any;
          like: any;
          dislike: any;
        }) => {
          const data: IComment = {
            writer: element.writer,
            movieKey: element.movieKey,
            content: element.content,
            rate: element.rate,
            like: element.like,
            dislike: element.dislike,
            profileIdx: Math.floor(Math.random() * 16),
          };
          comments.push(data);
        }
      );
    });

  return comments;
};

export const getTicketHistory = async () => {
  let tickets: ITicket[] = [];
  await axios
    .get(process.env.PUBLIC_URL + "/datas/reserveHistory.json")
    .then((response) => {
      tickets = response.data.data;
    });

  return tickets;
};
