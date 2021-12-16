import React from "react";
import axios from "axios";
import { Row, Col, Card, Tabs, Typography } from "antd";
import { SlidingTabs } from "./SlidingTabs";
import { HotTags } from "./HotTags";
import { IMovieStartTimes, IMovieTimesEachRoom } from "../../common/interface";

const { Text, Title } = Typography;

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
  let theaters: IMovieStartTimes[];
  await axios
    .get(process.env.PUBLIC_URL + "/datas/startTimes.json")
    .then((response) => {
      theaters = response.data.data;
    });

  return theaters;
};

const StepOne = (props: {
  setSelectedMovie: Function;
  setSelectedTheater: Function;
  selectedTime: IMovieTimesEachRoom;
  setSelectedTimes: Function;
}) => {
  const {
    setSelectedMovie,
    setSelectedTheater,
    selectedTime,
    setSelectedTimes,
  } = props;

  const [titles, setTitles] = React.useState<string[]>([]);
  const [theaters, setTheaters] = React.useState<string[]>([]);
  const [times, setTimes] = React.useState<IMovieStartTimes[]>([]);

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
    });
  }, []);

  return (
    <Card style={{ height: 500 }}>
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
          {times.map((item: IMovieStartTimes, index: number) => (
            <>
              <Row key={index}>
                <Col span={24}>
                  <Title level={5}>{item.name}</Title>
                </Col>
                <Col span={24}>
                  {item.times.map((timesEachRoom: any, idx: number) => (
                    <div key={idx}>
                      {["1", "2", "3", "4", "5"].map(
                        (order: string, i: number) => (
                          <HotTags
                            key={i}
                            room={item.name}
                            time={timesEachRoom[order]}
                            selectedTime={selectedTime}
                            handleTagOnClick={setSelectedTimes}
                          />
                        )
                      )}
                    </div>
                  ))}
                </Col>
              </Row>
              <br />
            </>
          ))}
        </Col>
      </Row>
    </Card>
  );
};

export { StepOne };
