import React, { createElement } from "react";
import {
  Comment,
  Avatar,
  Rate,
  Row,
  Col,
  Typography,
  Tooltip,
  Card,
} from "antd";
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
} from "@ant-design/icons";
import { IComment } from "../../common/interface";

const { Title, Text } = Typography;

const Comments = (props: { item: IComment }) => {
  const { writer, movieKey, content, rate, like, dislike } = props.item;

  const [likes, setLikes] = React.useState(like);
  const [dislikes, setDislikes] = React.useState(dislike);
  const [action, setAction] = React.useState(null);

  const handlelike = () => {
    setLikes(like + 1);
    setDislikes(dislike);
    setAction("liked");
  };
  const handledislike = () => {
    setLikes(like);
    setDislikes(dislike + 1);
    setAction("disliked");
  };

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={handlelike}>
        {createElement(action === "liked" ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={handledislike}>
        {React.createElement(
          action === "disliked" ? DislikeFilled : DislikeOutlined
        )}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">Reply to</span>,
  ];

  return (
    <Card>
      <Comment
        actions={actions}
        author={
          <>
            <Rate disabled value={rate} />
          </>
        }
        avatar={
          <>
            <Row justify="center">
              <Col span={24}>
                <Avatar
                  src="https://joeschmoe.io/api/v1/random"
                  alt="profile"
                />
              </Col>
              <Col span={24}>{writer}</Col>
            </Row>
          </>
        }
        content={
          <p>
            <Title level={4}>영화 키{movieKey}</Title>
            <Text>{content}</Text>
          </p>
        }
      ></Comment>
    </Card>
  );
};

export default Comments;
