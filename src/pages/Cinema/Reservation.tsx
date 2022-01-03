import React from "react";
import {
  Typography,
  Card,
  Col,
  List,
  message,
  PageHeader,
  Row,
  Tabs,
} from "antd";
import { Progress, ProgressBtn } from "./Progress";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";
import { IMovieTimesEachRoom } from "../../common/interface";
import { SideCard } from "./SideCard";

const { Title } = Typography;

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

const Reservation = () => {
  const [stepValue, setStepValue] = React.useState<number>(0);

  const [selectedMovie, setSelectedMovie] = React.useState<string>("");
  const [selectedTheater, setSelectedTheater] = React.useState<string>("");
  const [selectedTime, setSelectedTimes] = React.useState<IMovieTimesEachRoom>({
    room: "",
    time: "",
  });

  const [selectedSeat, setSelectedSeat] = React.useState<any>({
    row: "",
    col: 0,
  });

  const handleStepChange = (direction: string) => {
    if (direction !== "prev") {
      if (
        stepValue === 0 &&
        (selectedMovie === "" ||
          selectedTheater === "" ||
          selectedTime.room === "")
      ) {
        message.warning("예매 정보를 선택해주세요.");
        return;
      }
      if (
        stepValue === 1 &&
        (selectedSeat.row === "" || selectedSeat.col === 0)
      ) {
        message.warning("좌석을 선택해주세요.");
        return;
      }
    }
    setStepValue(direction === "prev" ? stepValue - 1 : stepValue + 1);
  };

  const handleTagOnClick = (room: string, time: string) => {
    setSelectedTimes({ room: room, time: time });
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
            {stepValue === 0 && (
              <StepOne
                setSelectedMovie={setSelectedMovie}
                setSelectedTheater={setSelectedTheater}
                selectedTime={selectedTime}
                setSelectedTimes={handleTagOnClick}
              />
            )}
            {stepValue === 1 && (
              <StepTwo
                selectedSeat={selectedSeat}
                setSelectedSeat={setSelectedSeat}
              />
            )}
            {stepValue === 2 && (
              <StepThree
                selectedMovie={selectedMovie}
                selectedTheater={selectedTheater}
                selectedTime={selectedTime}
                selectedSeat={selectedSeat}
              />
            )}
          </Card>
        </Col>
        <Col span={7}>
          <Card style={{ margin: "15px", background: "#cfcfcf" }}>
            <SideCard
              selectedMovie={selectedMovie}
              selectedTheater={selectedTheater}
              selectedTime={selectedTime}
              selectedSeat={selectedSeat}
            />
          </Card>
        </Col>
      </Row>

      <ProgressBtn
        steps={steps}
        step={stepValue}
        handleStepChange={handleStepChange}
      />
    </React.Fragment>
  );
};

export default Reservation;
