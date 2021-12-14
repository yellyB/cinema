import React from "react";
import { Avatar, Card, Col, Image, List, PageHeader, Row, Space } from "antd";
import { IMovieList } from "../../common/interface";
import Meta from "antd/lib/card/Meta";
import StarOutlined from "@ant-design/icons/lib/icons/StarOutlined";
import LikeOutlined from "@ant-design/icons/lib/icons/LikeOutlined";
import MessageOutlined from "@ant-design/icons/lib/icons/MessageOutlined";
import SettingOutlined from "@ant-design/icons/lib/icons/SettingOutlined";

function MovieList() {
  const [menuItemKey, setMenuItemKey] = React.useState<string>("movie");

  const handlMenuOnClick = (e: any) => {
    setMenuItemKey(e.key);
  };

  const ranking: IMovieList[] = [
    {
      title: "스파이더맨:노 웨이 홈",
      orignTitle: "Spider-Man",
      bookRate: "35.0%",
      releaseDate: "2021.12.15",
    },
    {
      title: "듄",
      orignTitle: "DUNE",
      bookRate: "23.0%",
      releaseDate: "2021.10.20",
    },
    {
      title: "돈 룩 업",
      orignTitle: "Don’t Look Up",
      bookRate: "21.0%",
      releaseDate: "2021.12.08",
    },
    {
      title: "아멜리에",
      orignTitle: "Amelie Of Montmartre",
      bookRate: "11.0%",
      releaseDate: "2021.12.15",
    },
    {
      title: "엔칸토-마법의 세계",
      orignTitle: "Encanto",
      bookRate: "8.0%",
      releaseDate: "2021.11.24",
    },
    {
      title: "티탄",
      orignTitle: "Titane",
      bookRate: "6.0%",
      releaseDate: "2021.12.09",
    },
    {
      title: "프렌치 디스패치",
      orignTitle: "The French Dispatch",
      bookRate: "3.0%",
      releaseDate: "2021.11.18",
    },
    {
      title: "마이 뉴욕 다이어리",
      orignTitle: "MyNewYorkDiary",
      bookRate: "1.0%",
      releaseDate: "2021.12.08",
    },
    {
      title: "해피 아워",
      orignTitle: "Happy Hour",
      bookRate: "1.0%",
      releaseDate: "2021.12.09",
    },
  ];

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  return (
    <React.Fragment>
      <PageHeader className="Movie" title="Movie" subTitle="현재 상영작" />
      <Row gutter={[0, 16]}>
        {ranking.map((item: IMovieList, index: number) => (
          <Col span={8} key={index}>
            <Card
              hoverable
              key={index}
              title={index + 1 + " 위"}
              extra={<a href="#">예매하기</a>}
              style={{ width: 300 }}
              cover={
                <img
                  alt={item.title}
                  src={
                    process.env.PUBLIC_URL +
                    "/images/" +
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
                  "예매율" + item.bookRate + " | " + "개봉일" + item.releaseDate
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </React.Fragment>
  );
}

export default MovieList;
