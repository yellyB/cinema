import React, { useState } from "react";
import { Col, Layout, Row } from "antd";
import { Cinema } from "../pages/Cinema";
import { Community } from "../pages/Community";
import { MyPage } from "../pages/MyPage";
import Login from "../pages/Login";
import PresentReserve from "../pages/PresentReserve";

const { Content } = Layout;

const ContentContainer = (props: {
  menuItemKey: string;
  menuItemOnClick: Function;
}) => {
  const { menuItemKey, menuItemOnClick } = props;

  return (
    <Content className="layout_content">
      <Row>
        <Col span={16} offset={4}>
          {menuItemKey === "cinema" && (
            <Cinema
              showOnlineTicket={() => menuItemOnClick("presentReserve")}
            />
          )}
          {menuItemKey === "community" && <Community />}
          {menuItemKey === "mypage" && <MyPage />}
          {(menuItemKey === "login" || menuItemKey === "logout") && (
            <Login setMenuItemKey={menuItemOnClick} />
          )}
          {menuItemKey === "presentReserve" && (
            <PresentReserve reserveOnClick={() => menuItemOnClick("cinema")} />
          )}
        </Col>
      </Row>
    </Content>
  );
};

export default ContentContainer;
