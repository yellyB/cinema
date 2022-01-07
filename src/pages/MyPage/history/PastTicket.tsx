import React, { useState, useEffect } from "react";
import { Collapse, Descriptions, Row, Col, Typography } from "antd";
import { ITicket } from "../../../common/interface";

const { Text } = Typography;
const { Panel } = Collapse;

const PastTicket = (props: { ticketData: ITicket; key: number }) => {
  const { ticketData: ticket, key } = props;

  useEffect(() => {
    console.log(props);
  }, []);

  const header = (
    <Row style={{ width: "100%" }}>
      <Col span={24}>
        <Text> [예매번호: {ticket.reserveNo}]</Text>
      </Col>
      <Col span={24}>
        <Text style={{ fontSize: "18pt", fontWeight: "bold" }}>
          {ticket.title}
        </Text>
      </Col>
    </Row>
  );

  return (
    <React.Fragment>
      <Collapse defaultActiveKey={[0]} expandIconPosition="right">
        <Panel header={header} key={key}>
          <Col span={24}>
            <Descriptions title="상세 정보">
              <Descriptions.Item label="지점">{ticket.place}</Descriptions.Item>
              <Descriptions.Item label="좌석">
                {ticket.room} {ticket.seatRow}
                {ticket.seatCol}
              </Descriptions.Item>
              <Descriptions.Item label="일시">
                {ticket.date} {ticket.time}
              </Descriptions.Item>
              <Descriptions.Item label="가격">{ticket.price}</Descriptions.Item>
            </Descriptions>
          </Col>
        </Panel>
      </Collapse>
    </React.Fragment>
  );
};

export default PastTicket;
