import React from "react";
import { Col, PageHeader, Row, Tabs } from "antd";
import { SlidingTabs } from "./SlidingTabs";
import { Progress } from "./Progress";

const { TabPane } = Tabs;

function Reservation() {
  const [menuItemKey, setMenuItemKey] = React.useState<string>("movie");

  const handlMenuOnClick = (e: any) => {
    setMenuItemKey(e.key);
  };

  return (
    <React.Fragment>
      <Row>
        <Col span={24}>
          <PageHeader title="예매" subTitle="" />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Progress />
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <SlidingTabs />
        </Col>
        <Col span={8}>
          <SlidingTabs />
        </Col>
        <Col span={8}>
          <SlidingTabs />
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default Reservation;
