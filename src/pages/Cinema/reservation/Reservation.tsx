import React, { useState } from "react";
import { Typography, Card, Col, message, Row } from "antd";
import { Progress, ProgressBtn } from "./Progress";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";
import { IStoreState, ITicket } from "../../../common/interface";
import { SideCard } from "./SideCard";
import { useSelector } from "react-redux";

const steps = [
  {
    title: "영화/상영관 선택",
    content: "First",
  },
  {
    title: "좌석 선택",
    content: "Second",
  },
  {
    title: "결제",
    content: "Last",
  },
];

const Reservation = (props: { showOnlineTicket: Function }) => {
  const ticket: ITicket = useSelector((state: IStoreState) => state.ticketData);

  const [stepValue, setStepValue] = useState<number>(0);

  const handleStepChange = (direction: string) => {
    if (direction !== "prev") {
      if (
        stepValue === 0 &&
        (ticket.title === "" ||
          ticket.place === "" ||
          ticket.room === "" ||
          ticket.time === "")
      ) {
        message.warning("예매 정보를 선택해주세요.");
        return;
      }
      if (stepValue === 1 && (ticket.seatRow === "" || ticket.seatCol === 0)) {
        message.warning("좌석을 선택해주세요.");
        return;
      }
    }
    setStepValue(direction === "prev" ? stepValue - 1 : stepValue + 1);
  };

  return (
    <React.Fragment>
      <Row style={{ marginTop: 30 }}>
        <Col span={18}>
          <Progress steps={steps} step={stepValue} />
        </Col>
      </Row>
      <Row>
        <Col span={17}>
          <Card className="reserve_card">
            {stepValue === 0 && <StepOne />}
            {stepValue === 1 && <StepTwo />}
            {stepValue === 2 && <StepThree />}
          </Card>
        </Col>
        <Col span={7}>
          <Card className="sideCard_wrapper">
            <SideCard />
          </Card>
        </Col>
      </Row>

      <ProgressBtn
        steps={steps}
        step={stepValue}
        handleStepChange={handleStepChange}
        showOnlineTicket={props.showOnlineTicket}
      />
    </React.Fragment>
  );
};

export default Reservation;
