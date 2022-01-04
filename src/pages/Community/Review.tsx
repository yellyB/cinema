import React, { useState, useEffect } from "react";
import WriteComment from "./WriteComment";
import Comments from "./Comments";
import { IComment } from "../../common/interface";
import { Card, List, Row } from "antd";
import { getComments } from "../../common/axios";

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
  const [list, setList] = useState<IComment[]>([]);

  const handleAddComment = (newComment: IComment) => {
    setList(list.concat(newComment));
  };

  useEffect(() => {
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
