import React from "react";
import { Card, Col, List, PageHeader, Row, Tabs } from "antd";
import { Progress } from "./Progress";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";

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

  const handleStepChange = (direction: string) => {
    setStepValue(direction === "prev" ? stepValue - 1 : stepValue + 1);
  };

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
          <PageHeader
            title={selectedMovie + "/" + selectedTheater}
            subTitle=""
          />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Progress
            steps={steps}
            step={stepValue}
            handleStepChange={handleStepChange}
          />
        </Col>
      </Row>
      <Card style={{ height: "100%" }}>
        {stepValue === 0 && (
          <StepOne
            setSelectedMovie={setSelectedMovie}
            setSelectedTheater={setSelectedTheater}
          />
        )}
      </Card>
      {stepValue === 1 && <StepTwo />}
      {stepValue === 2 && <StepThree />}
    </React.Fragment>
  );
};

export default Reservation;
