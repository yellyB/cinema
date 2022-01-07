import React, { useState, useEffect } from "react";
import { Row, Col, Typography } from "antd";
import { SlidingTabs } from "./SlidingTabs";
import { TimeTag } from "./TimeTag";
import {
  IMovieStartTimes,
  IMovieList,
  ITicket,
  IStoreState,
} from "../../../common/interface";
import { getMovieList, getTheaters, getTimes } from "../../../common/api";
import { useDispatch, useSelector } from "react-redux";

const { Title } = Typography;

const StepOne = () => {
  const [titles, setTitles] = useState<string[]>([]);
  const [theaters, setTheaters] = useState<string[]>([]);
  const [times, setTimes] = useState<IMovieStartTimes[]>([]);

  const ticket: ITicket = useSelector((state: IStoreState) => state.ticketData);
  const dispatch = useDispatch();

  const handleTabOnClick = (key: string, type: string) => {
    if (type === "title") {
      const data: ITicket = { ...ticket, title: key };
      dispatch({
        type: "setTicket",
        data: data,
      });
    } else if (type === "theater") {
      const data: ITicket = { ...ticket, place: key };
      dispatch({
        type: "setTicket",
        data: data,
      });
    }
  };

  const handleTagOnClick = (room: string, time: string) => {
    const data: ITicket = {
      ...ticket,
      room: room,
      time: time,
    };
    dispatch({
      type: "setTicket",
      data: data,
    });
  };

  useEffect(() => {
    getMovieList().then((res) => {
      setTitles(res.map((item: IMovieList) => item.title));
    });
    getTheaters().then((res) => {
      setTheaters(res);
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
                          selectedTime={{
                            room: ticket.room,
                            time: ticket.time,
                          }}
                          handleTagOnClick={handleTagOnClick}
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
