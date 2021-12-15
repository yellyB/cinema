import React from "react";
import axios from "axios";
import { Col, List, Row, Tabs } from "antd";
import { SlidingTabs } from "./SlidingTabs";

interface ITest {
  name: string;
  times: any[];
}

const getMovieTitles = async () => {
  let movies: string[] = [];
  await axios
    .get(process.env.PUBLIC_URL + "/datas/movies.json")
    .then((response) => {
      for (const movie of response.data.data) {
        movies.push(movie.title);
      }
    });

  return movies;
};

const getTheaters = async () => {
  let theaters: string[] = [];
  await axios
    .get(process.env.PUBLIC_URL + "/datas/theaters.json")
    .then((response) => {
      for (const theater of response.data.data) {
        theaters.push(theater.place);
      }
    });

  return theaters;
};

const getTimes = async () => {
  let theaters: ITest[];
  await axios
    .get(process.env.PUBLIC_URL + "/datas/startTimes.json")
    .then((response) => {
      theaters = response.data.data;
      // datas.map((item: any, index: number) => {
      //   item["times"].map((i: any) => {
      //     console.log(i);
      //   });
      // });
    });

  return theaters;
};

const StepOne = (props: {
  setSelectedMovie: Function;
  setSelectedTheater: Function;
}) => {
  const { setSelectedMovie, setSelectedTheater } = props;

  const [titles, setTitles] = React.useState<string[]>([]);
  const [theaters, setTheaters] = React.useState<string[]>([]);
  const [times, setTimes] = React.useState<ITest[]>([]);

  const handleTabOnClick = (key: string, type: string) => {
    if (type === "title") {
      setSelectedMovie(key);
    } else if (type === "theater") {
      setSelectedTheater(key);
    }
  };

  React.useEffect(() => {
    getMovieTitles().then((res) => {
      setTitles(res);
      setSelectedMovie(res[0]);
    });
    getTheaters().then((res) => {
      setTheaters(res);
      setSelectedTheater(res[0]);
    });
    getTimes().then((res) => {
      setTimes(res);
      // res.map((item: any) => {
      //   item["times"].map((i: any, index: number) => {
      //     console.log(i.abc);
      //   });
      // });
    });
  }, []);

  return (
    <Row>
      <Col span={8}>
        <SlidingTabs
          children={titles}
          handleTabKeyChange={(key: string) => {
            handleTabOnClick(key, "title");
          }}
        />
      </Col>
      <Col span={8}>
        <SlidingTabs
          children={theaters}
          handleTabKeyChange={(key: string) => {
            handleTabOnClick(key, "theater");
          }}
        />
      </Col>
      <Col span={8}>
        =======
        {times.map((item: any, index: number) => {
          // <div>
          //   {item["times"].map((i: any) => {
          //     <div>{i.name}fsdfdfs</div>;
          //   })}
          // </div>;

          <List
            header={<div>{index + 1}</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={item}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />;
        })}
        =======
      </Col>
    </Row>
  );
};

export { StepOne };
