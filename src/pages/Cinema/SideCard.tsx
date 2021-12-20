import React from "react";
import { Row, Col, Card, Tabs, Typography, Tag, Divider } from "antd";
import { IMovieTimesEachRoom } from "../../common/interface";

const { Text, Title } = Typography;

const SideCard = (props: {
  selectedMovie: string;
  selectedTheater: string;
  selectedTime: IMovieTimesEachRoom;
  selectedSeat: any;
}) => {
  const { selectedMovie, selectedTheater, selectedTime, selectedSeat } = props;
  const textStyle = {
    fontSize: 14,
    fontWeight: "bold",
  };
  return (
    <React.Fragment>
      <Divider dashed>
        <Title level={3}>티켓 정보</Title>
      </Divider>
      <Card style={{ border: "2px dashed #333", marginBottom: 30 }}>
        <Row gutter={[0, 8]}>
          <Col span={24}>
            <Title level={4}>
              {selectedMovie === "" ? "-" : selectedMovie}
            </Title>
          </Col>

          <Col span={8}>
            <Text style={textStyle}>지점</Text>
          </Col>
          <Col span={16}>{selectedTheater === "" ? "-" : selectedTheater}</Col>

          <Col span={8}>
            <Text style={textStyle}>상영관</Text>
          </Col>
          <Col span={16}>
            {selectedTime.room === "" ? "-" : selectedTime.room}
          </Col>

          <Col span={8}>
            <Text style={textStyle}>시간</Text>
          </Col>
          <Col span={16}>
            {selectedTime.time === "" ? "-" : selectedTime.time}
          </Col>

          <Col span={8}>
            <Text style={textStyle}>좌석 </Text>
          </Col>
          <Col span={16} style={{ height: 25 }}>
            {selectedSeat.row === "" ? (
              <Tag color="#2c2c2c" className="reserve_tag">
                -
              </Tag>
            ) : (
              <Tag color="#2c2c2c" className="reserve_tag">
                {selectedSeat.row}
                {selectedSeat.col}
              </Tag>
            )}
          </Col>
        </Row>
      </Card>
      <Title level={2}>
        총 금액: {selectedSeat === "" ? "0" : "10,000"} 원
      </Title>
    </React.Fragment>
  );
};

export { SideCard };
