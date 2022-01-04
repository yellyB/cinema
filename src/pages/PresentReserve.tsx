import React from "react";
import { Carousel, Row, Col, PageHeader } from "antd";

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

  return (
    <React.Fragment>
      <PageHeader title="온라인 티켓" subTitle="" />
      <Row>
        <Col span={8} offset={8}>
          <Carousel afterChange={onChange}>
            <div>
              <h3 style={contentStyle}>
                영화제목, 영화관, 좌석, 영화날짜/시간
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