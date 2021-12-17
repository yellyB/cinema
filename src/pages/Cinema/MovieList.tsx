import React from "react";
import axios from "axios";
import { Card, Col, PageHeader, Row, Space, Typography } from "antd";
import { IMovieList } from "../../common/interface";
import Meta from "antd/lib/card/Meta";
import {
  StarOutlined,
  LikeOutlined,
  MessageOutlined,
} from "@ant-design/icons/lib/icons";

const { Link } = Typography;

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const getMovieRanking = async () => {
  let movies: IMovieList[] = [];
  await axios
    .get(process.env.PUBLIC_URL + "/datas/movies.json")
    .then((response) => {
      movies = response.data.data;
    });

  return movies;
};

const MovieList = () => {
  const [ranking, setRanking] = React.useState<IMovieList[]>([]);

  React.useEffect(() => {
    getMovieRanking().then((res) => {
      setRanking(res);
    });
  }, []);

  return (
    <React.Fragment>
      <PageHeader title="Movie" subTitle="현재 상영 중" />
      <Row gutter={[8, 16]}>
        {ranking.map((item: IMovieList, index: number) => (
          <Col span={8} key={index}>
            <Card
              hoverable
              key={index}
              title={index + 1 + " 위"}
              extra={<Link href="#">예매하기</Link>}
              style={{ width: 300 }}
              cover={
                <img
                  alt={item.title}
                  src={
                    process.env.PUBLIC_URL +
                    "/images/movies/" +
                    item.orignTitle +
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
