import React from "react";
import { Carousel, Row, Col, PageHeader } from "antd";
import { useSelector } from "react-redux";
import { IStoreState, ITicket } from "../common/interface";

const PresentReserve = () => {
  const contentStyle = {
    height: "500px",
    lineHeight: "250px",
    marginTop: "50px",
    color: "#fff",
    //  textAlign: "center",
    background: "#364d79",
  };

  const onChange = (a: any, b: any, c: any) => {
    console.log(a, b, c);
  };

  const ticket: ITicket = useSelector((state: IStoreState) => state.ticketData);

  return (
    <React.Fragment>
      <PageHeader title="온라인 티켓" subTitle="" />
      <Row>
        <Col span={8} offset={8}>
          <Carousel afterChange={onChange}>
            <div>
              <h3 style={contentStyle}>
                예매번호{ticket.reserveNo}
                영화제목{ticket.title} 영화관 {ticket.place}
                상영관 {ticket.room}좌석 {ticket.seatRow}
                {ticket.seatCol}
                영화날짜/시간
                {ticket.date}
                {ticket.time}
                가격{ticket.price}
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>결제정보</h3>
            </div>
          </Carousel>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default PresentReserve;
