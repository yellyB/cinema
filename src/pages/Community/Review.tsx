import React from "react";
import axios from "axios";
import WriteComment from "./WriteComment";
import Comments from "./Comments";
import { IComment } from "../../common/interface";
import { List } from "antd";

const setCommentList = (res: any, add?: IComment) => {
  let comments: IComment[] = [];
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
  return comments;
};

const getComments = async () => {
  let res = [];
  await axios
    .get(process.env.PUBLIC_URL + "/datas/comments.json")
    .then((response) => {
      res = response.data.data;
    });

  return res;
};

const CommentList = ({ comments }) => (
  <>
    {comments.length}
    <List
      dataSource={comments}
      header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
      itemLayout="horizontal"
      renderItem={(props: any) => <Comments item={props} />}
    />
  </>
);

const Review = () => {
  const [list, setList] = React.useState<IComment[]>([]);

  const handleAddComment = (comment: string) => {
    let comments: IComment[] = [];
    console.log(comment);
    list.forEach(
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

    comments.push({
      writer: "writer",
      movieKey: 2,
      content: comment,
      rate: 5,
      like: 2,
      dislike: 3,
      profileIdx: Math.floor(Math.random() * 16),
    });
    console.log(list);
    setList(comments);
  };

  React.useEffect(() => {
    getComments().then((res: any) => {
      setList(setCommentList(res));
    });
  }, []);

  return (
    <React.Fragment>
      {list.length > 0 && <CommentList comments={list} />}
      {/* {list.map((item: IComment, index: number) => (
        <Comments item={item} />
      ))} */}
      <WriteComment addComment={handleAddComment} />
    </React.Fragment>
  );
};

export default Review;
