import React from "react";
import axios from "axios";
import WriteComment from "./WriteComment";
import Comments from "./Comments";
import { IComment, IComments } from "../../common/interface";

const getComments = async () => {
  let comments: IComment[] = [];
  await axios
    .get(process.env.PUBLIC_URL + "/datas/comments.json")
    .then((response) => {
      console.log(response.data.data);
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
          const data: IComments = {
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
      // comments = response.data.data;
    });

  return comments;
};

const Review = () => {
  const [list, setList] = React.useState<IComment[]>([]);

  React.useEffect(() => {
    console.log("ewfefw");
    getComments().then((res) => {
      setList(res);
    });
  }, []);

  return (
    <React.Fragment>
      {list.map((item: IComment, index: number) => (
        <Comments item={item} />
      ))}
      <WriteComment />
    </React.Fragment>
  );
};

export default Review;
