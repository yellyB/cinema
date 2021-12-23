import React from "react";
import axios from "axios";
import WriteComment from "./WriteComment";
import Comments from "./Comments";
import { IComment } from "../../common/interface";
import { Card, List, Row } from "antd";

const getComments = async () => {
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

const CommentList = ({ comments }) => (
  <>
    <Row justify="center">
      <List
        dataSource={comments}
        header={`${comments.length} ${
          comments.length > 1 ? "replies" : "reply"
        }`}
        itemLayout="horizontal"
        renderItem={(props: any) => <Comments item={props} />}
        style={{ maxWidth: "60%" }}
      />
    </Row>
  </>
);

const Review = () => {
  const [list, setList] = React.useState<IComment[]>([]);

  const handleAddComment = (newComment: IComment) => {
    setList(list.concat(newComment));
  };

  React.useEffect(() => {
    getComments().then((res) => {
      setList(res);
    });
  }, []);

  return (
    <React.Fragment>
      <Card>{list.length > 0 && <CommentList comments={list} />}</Card>
      <Card>
        <WriteComment addComment={handleAddComment} />
      </Card>
    </React.Fragment>
  );
};

export default Review;
