import React from "react";
import {
  Image,
  Row,
  Col,
  PageHeader,
  Empty,
  Button,
  Card,
  Typography,
} from "antd";
import { useSelector } from "react-redux";
import { IStoreState, ITicket } from "../common/interface";

const { Text } = Typography;

const PresentReserve = (props: { reserveOnClick: Function }) => {
  const { reserveOnClick } = props;

  //실제 서비스에서는 스토어에서 불러오는게 아닌 DB에서 데이터 가져옴
  const ticket: ITicket = useSelector((state: IStoreState) => state.ticketData);

  const content = (
    <>
      <Row justify="center">
        <Col>
          <Text style={{ fontSize: "32pt" }}>{ticket.title}</Text>
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <Text type="secondary">예매번호: {ticket.reserveNo}</Text>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: "32px" }}>
        <Col>
          <Text style={{ fontSize: "18pt" }}>
            {ticket.place}점/{ticket.room}
          </Text>
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <Text
            style={{
              fontSize: "18pt",
              color: "#00000073",
              background: "#ffe58f",
            }}
          >
            {ticket.seatRow}열{ticket.seatCol}
          </Text>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: "12px" }}>
        <Col>
          <Text style={{ fontSize: "28pt" }}>시작 시간 {ticket.time}~</Text>
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <Text type="secondary">20분 전부터 입장 가능합니다.</Text>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: "12px" }}>
        <Col span={6}>
          <Image
            preview={false}
            width={"100%"}
            alt="QR CODE"
            src={process.env.PUBLIC_URL + "/images/qrcode.jpg"}
          />
        </Col>
      </Row>
    </>
  );

  return (
    <React.Fragment>
      <PageHeader title="온라인 티켓" subTitle="" />
      {ticket.title === "" ? (
        <Empty
          description={<span>현재 예매한 영화가 없습니다.</span>}
          style={{ marginTop: "15%" }}
        >
          <Button
            type="primary"
            onClick={() => {
              reserveOnClick();
            }}
          >
            예매하러 가기
          </Button>
        </Empty>
      ) : (
        <Row justify="center">
          <Col className="ticket_wrapper">
            <Card>{content}</Card>
          </Col>
        </Row>
      )}
    </React.Fragment>
  );
};

export default PresentReserve;
