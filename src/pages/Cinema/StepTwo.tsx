import { InputNumber, Row, Col, Typography, Tag, Card } from "antd";
import React from "react";
import { SeatTags } from "./SeatTag";

const { Title } = Typography;

const StepTwo = (props: { selectedSeat: any; setSelectedSeat: Function }) => {
  const { selectedSeat, setSelectedSeat } = props;

  const [limit] = React.useState<any>({ min: 0, max: 10 });
  const [adultCount, setAdultCount] = React.useState<number>(0);
  const [kidCount, setKidCount] = React.useState<number>(0);

  const handleAdultOnChange = (value: any) => {
    setAdultCount(value);
  };
  const handleKidOnChange = (value: any) => {
    setKidCount(value);
  };

  return (
    <>
      {/* 성인
      <InputNumber
        min={limit.min}
        max={limit.max}
        value={adultCount}
        onChange={handleAdultOnChange}
      />
      청소년
      <InputNumber
        min={limit.min}
        max={limit.max}
        value={kidCount}
        onChange={handleKidOnChange}
      /> */}
      <Row justify="center">
        <Title>SCREEN</Title>
      </Row>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((row: number, idx: number) => (
        <React.Fragment key={idx}>
          <Row>
            <Col span={1}>
              <Tag
                color="default"
                style={{ width: 50, height: 25, textAlign: "center" }}
              >
                {String.fromCharCode(row + 65)}
              </Tag>
            </Col>
            {[
              0, 1, 2, 3, 4, 5, 0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0, 16,
              17, 18, 19, 0,
            ].map((col: number, index: number) => {
              return (
                <>
                  {col === 0 ? (
                    <Col span={1} key={index}></Col>
                  ) : (
                    <Col span={1} key={index} style={{ textAlign: "center" }}>
                      <SeatTags
                        key={index}
                        row={String.fromCharCode(row + 65)}
                        col={col}
                        selectedSeat={selectedSeat}
                        handleTagOnClick={setSelectedSeat}
                      />
                    </Col>
                  )}
                </>
              );
            })}
          </Row>
        </React.Fragment>
      ))}
    </>
  );
};

export { StepTwo };
