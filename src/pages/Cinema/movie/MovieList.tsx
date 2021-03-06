import React, { useState, createElement, useEffect } from "react";
import { Card, Col, PageHeader, Row, Space, Typography } from "antd";
import { IMovieList } from "../../../common/interface";
import Meta from "antd/lib/card/Meta";
import {
  StarOutlined,
  LikeOutlined,
  MessageOutlined,
} from "@ant-design/icons/lib/icons";
import { getMovieList } from "../../../common/api";

const { Link } = Typography;

const IconText = ({ icon, text }) => (
  <Space>
    {createElement(icon)}
    {text}
  </Space>
);

const MovieList = (props: { reserveOnClick: Function }) => {
  const { reserveOnClick } = props;
  const [ranking, setRanking] = useState<IMovieList[]>([]);

  useEffect(() => {
    getMovieList().then((res) => {
      setRanking(res);
    });
  }, []);

  return (
    <React.Fragment>
      <PageHeader
        title="Movie"
        subTitle="현재 상영 중"
        style={{ marginBottom: "-20px" }}
      />
      <Row gutter={[8, 16]}>
        {ranking.map((item: IMovieList, index: number) => (
          <Col span={8} key={index}>
            <Card
              hoverable
              key={index}
              title={index + 1 + " 위"}
              extra={
                <Link
                  href="#"
                  onClick={() => {
                    reserveOnClick();
                  }}
                >
                  예매하기
                </Link>
              }
              style={{ width: "100%" }}
              cover={
                <img
                  alt={item.title}
                  src={
                    process.env.PUBLIC_URL +
                    "/images/movies/" +
                    item.title +
                    ".jpg"
                  }
                />
              }
              actions={[
                <IconText
                  icon={StarOutlined}
                  text={Math.floor(Math.random() * 1000)}
                  key="favorite"
                />,
                <IconText
                  icon={LikeOutlined}
                  text={Math.floor(Math.random() * 500)}
                  key="like"
                />,
                <IconText
                  icon={MessageOutlined}
                  text={Math.floor(Math.random() * 50)}
                  key="reply"
                />,
              ]}
            >
              <Meta
                title={item.title}
                description={
                  "예매율" + item.bookRate + " | 개봉일" + item.releaseDate
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </React.Fragment>
  );
};

export default MovieList;
