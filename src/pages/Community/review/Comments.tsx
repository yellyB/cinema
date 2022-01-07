import React, { useState, useEffect, createElement } from "react";
import {
  Comment,
  Avatar,
  Rate,
  Row,
  Col,
  Typography,
  Tooltip,
  Card,
  Button,
  message,
} from "antd";
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
} from "@ant-design/icons";
import { IComment, IMovieList } from "../../../common/interface";
import { getMovieList } from "../../../common/api";

const { Title, Text } = Typography;

const Comments = (props: { item: IComment }) => {
  const { writer, movieKey, content, rate, like, dislike, profileIdx } =
    props.item;

  const [likes, setLikes] = useState(like);
  const [dislikes, setDislikes] = useState(dislike);
  const [action, setAction] = useState(null);
  const [movies, setMovies] = useState<IMovieList[]>([]);

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

  const handleDeleteOnClick = () => {
    message.info("개발 예정");
  };

  useEffect(() => {
    getMovieList().then((res) => {
      setMovies(res);
    });
  }, []);

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
    <Col
      key="comment-delete"
      hidden={localStorage.getItem("userName") !== writer}
    >
      <Button danger type="text" onClick={handleDeleteOnClick}>
        삭제
      </Button>
    </Col>,
  ];

  return (
    <Comment
      className="review_list_item"
      actions={actions}
      author={writer}
      avatar={
        <Avatar
          src={
            process.env.PUBLIC_URL + "/images/profiles/" + profileIdx + ".svg"
          }
          alt="profile"
        />
      }
      content={
        <Row>
          <Col span={24}>
            <Rate disabled value={rate} />
          </Col>
          <Col span={24} style={{ paddingTop: 5, border: "0px solid red" }}>
            <Title level={4}>
              {movies
                .filter((movie: IMovieList) => movie.key === movieKey)
                .map((movie: IMovieList) => movie.title)}
            </Title>
          </Col>
          <Col span={24}>
            <Text>{content}</Text>
          </Col>
        </Row>
      }
    ></Comment>
  );
};

export default Comments;
