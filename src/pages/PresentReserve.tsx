import React from "react";
import { Image, Row, Col, PageHeader, Empty, Button, Card } from "antd";
import { useSelector } from "react-redux";
import { IStoreState, ITicket } from "../common/interface";
import Meta from "antd/lib/card/Meta";

const PresentReserve = (props: { reserveOnClick: Function }) => {
  const { reserveOnClick } = props;

  //실제 서비스에서는 스토어에서 불러오는게 아닌 DB에서 데이터 가져옴
  const ticket: ITicket = useSelector((state: IStoreState) => state.ticketData);

  const content = (
    <Row>
      <Col span={24}>제목{ticket.title}</Col>
      <Col span={24}> 예매번호{ticket.reserveNo}</Col>
      <Col span={24}>
        영화제목{ticket.title} 영화관 {ticket.place}
      </Col>
      <Col span={24}>
        상영관 {ticket.room}좌석 {ticket.seatRow} {ticket.seatCol}
      </Col>
      <Col span={24}>
        영화날짜/시간 {ticket.date} {ticket.time}
      </Col>
      <Col span={24}>가격{ticket.price}</Col>
    </Row>
  );

  return (
    <React.Fragment>
      <PageHeader title="온라인 티켓" subTitle="" />
      {ticket.title === "" ? (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={<span>현재 예매한 영화가 없습니다.</span>}
          style={{ marginTop: "20%" }}
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
            <Card
              style={{ height: "100%" }}
              cover={
                <Image
                  preview={false}
                  width={100}
                  alt="QR CODE"
                  src={process.env.PUBLIC_URL + "/images/qrcode.jpg"}
                />
              }
            >
              {content}
              {/* <Meta title={ticket.title} description={content} /> */}
            </Card>
          </Col>
        </Row>
      )}
    </React.Fragment>
  );
};

export default PresentReserve;
