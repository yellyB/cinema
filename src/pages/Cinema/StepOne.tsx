import React, { useState, useEffect } from "react";
import { Row, Col, Typography } from "antd";
import { SlidingTabs } from "./SlidingTabs";
import { TimeTag } from "./TimeTag";
import {
  IMovieStartTimes,
  IMovieTimesEachRoom,
  IMovieList,
} from "../../common/interface";
import { getMovieList, getTheaters, getTimes } from "../../common/axios";

const { Title } = Typography;

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

  const [titles, setTitles] = useState<string[]>([]);
  const [theaters, setTheaters] = useState<string[]>([]);
  const [times, setTimes] = useState<IMovieStartTimes[]>([]);

  const handleTabOnClick = (key: string, type: string) => {
    if (type === "title") {
      setSelectedMovie(key);
    } else if (type === "theater") {
      setSelectedTheater(key);
    }
  };

  useEffect(() => {
    getMovieList().then((res) => {
      setTitles(res.map((item: IMovieList) => item.title));
      setSelectedMovie(res[0].title);
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
    <Row>
      <Col span={7}>
        <SlidingTabs
          children={titles}
          handleTabKeyChange={(key: string) => {
            handleTabOnClick(key, "title");
          }}
        />
      </Col>
      <Col span={6}>
        <SlidingTabs
          children={theaters}
          handleTabKeyChange={(key: string) => {
            handleTabOnClick(key, "theater");
          }}
        />
      </Col>
      <Col span={11}>
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
                        <TimeTag
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
  );
};

export { StepOne };
