import React, { useState, useEffect } from "react";
import WriteComment from "./WriteComment";
import Comments from "./Comments";
import { getComments } from "../../../common/api";
import { IComment } from "../../../common/interface";
import { Card, List, Typography, Row } from "antd";

const { Text } = Typography;

const CommentList = ({ comments }) => (
  <>
    <Row justify="center">
      <List
        dataSource={comments}
        header={
          <>
            {comments.length}
            {comments.length > 1 ? (
              <Text>개의 리뷰들</Text>
            ) : (
              <Text>개의 리뷰</Text>
            )}
          </>
        }
        itemLayout="horizontal"
        renderItem={(props: any) => <Comments item={props} />}
        className="review_list"
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
