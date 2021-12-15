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

const { Title, Text } = Typography;

const Comments = () => {
  const [likes, setLikes] = React.useState(0);
  const [dislikes, setDislikes] = React.useState(0);
  const [action, setAction] = React.useState(null);

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction("liked");
  };
  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction("disliked");
  };

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === "liked" ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
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
            <Rate disabled defaultValue={2} />
          </>
        }
        avatar={
          <>
            <Row>
              <Col span={16} offset={8}>
                <Avatar
                  src="https://joeschmoe.io/api/v1/random"
                  alt="profile"
                />
              </Col>
              <Col span={16} offset={8}>
                작성자
              </Col>
            </Row>
          </>
        }
        content={
          <p>
            <Title level={4}>영화이름</Title>
            <Text>
              Ant Design, a design language for background applications, is
              refined by Ant UED Team.
            </Text>
          </p>
        }
      ></Comment>
    </Card>
  );
};

export default Comments;
