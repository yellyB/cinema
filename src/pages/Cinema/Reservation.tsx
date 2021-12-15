import React from "react";
import axios from "axios";
import { Card, Col, List, PageHeader, Row, Tabs } from "antd";
import { SlidingTabs } from "./SlidingTabs";
import { Progress } from "./Progress";

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

const Reservation = () => {
  const [titles, setTitles] = React.useState<string[]>([]);
  const [theaters, setTheaters] = React.useState<string[]>([]);
  const [times, setTimes] = React.useState<ITest[]>([]);

  React.useEffect(() => {
    getMovieTitles().then((res) => {
      setTitles(res);
    });
    getTheaters().then((res) => {
      setTheaters(res);
    });
    getTimes().then((res) => {
      setTimes(res);
      res.map((item: any) => {
        item["times"].map((i: any, index: number) => {
          console.log(i.abc);
        });
      });
    });

    // test.map((item: any, index: number) => {
    //   console.log(item.times);
    //   item["times"].map((i: any) => {
    //     console.log(i);
    //   });
    // });
  }, []);

  const test = [
    {
      name: "1관",
      times: [
        {
          abc: "11:00",
          def: "14:00",
        },
      ],
    },
    {
      name: "2관",
      times: [
        {
          abc: "11:00",
          def: "14:00",
        },
      ],
    },
    {
      name: "7관",
      times: [
        {
          abc: "11:00",
          def: "14:00",
        },
      ],
    },
  ];

  return (
    <React.Fragment>
      <Row>
        <Col span={24}>
          <PageHeader title="예매" subTitle="" />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Progress />
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <SlidingTabs children={titles} />
        </Col>
        <Col span={8}>
          <SlidingTabs children={theaters} />
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
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Reservation;
