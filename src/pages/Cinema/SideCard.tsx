import React from "react";
import { Row, Col, Card, Typography, Tag, Divider } from "antd";
import {
  IMovieTimesEachRoom,
  IStoreState,
  ITicket,
} from "../../common/interface";
import { useSelector } from "react-redux";

const { Text, Title } = Typography;

const SideCard = () => {
  const textStyle = {
    fontSize: 14,
    fontWeight: "bold",
  };
  const ticket: ITicket = useSelector((state: IStoreState) => state.ticketData);

  return (
    <React.Fragment>
      <Divider dashed>
        <Title level={3}>티켓 정보</Title>
      </Divider>
      <Card style={{ border: "2px dashed #333", marginBottom: 30 }}>
        <Row gutter={[0, 8]}>
          <Col span={24}>
            <Title level={4}>{ticket.title === "" ? "-" : ticket.title}</Title>
          </Col>

          <Col span={8}>
            <Text style={textStyle}>지점</Text>
          </Col>
          <Col span={16}>{ticket.place === "" ? "-" : ticket.place}</Col>

          <Col span={8}>
            <Text style={textStyle}>상영관</Text>
          </Col>
          <Col span={16}>{ticket.room === "" ? "-" : ticket.room}</Col>

          <Col span={8}>
            <Text style={textStyle}>시간</Text>
          </Col>
          <Col span={16}>{ticket.time === "" ? "-" : ticket.time}</Col>

          <Col span={8}>
            <Text style={textStyle}>좌석 </Text>
          </Col>
          <Col span={16} style={{ height: 25 }}>
            {ticket.seatRow === "" ? (
              <Tag color="#2c2c2c" className="reserve_tag">
                -
              </Tag>
            ) : (
              <Tag color="#2c2c2c" className="reserve_tag">
                {ticket.seatRow}
                {ticket.seatCol}
              </Tag>
            )}
          </Col>
        </Row>
      </Card>
      <Title level={2}>총 금액 : {ticket.price} 원</Title>
    </React.Fragment>
  );
};

export { SideCard };
