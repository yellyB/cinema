import React, { useState, useEffect } from "react";
import "./App.less";
import "./style.css";
import { Affix, Badge, Button, Col, Dropdown, Layout, Menu, Row } from "antd";
import { Cinema } from "./pages/Cinema";
import { Community } from "./pages/Community";
import { MyPage } from "./pages/MyPage";
import { UserOutlined, BellOutlined } from "@ant-design/icons/lib/icons";
import Login from "./pages/Login";
import PresentReserve from "./pages/PresentReserve";
import Alarm from "./pages/Alarm";
import { useSelector } from "react-redux";
import { IAlarm, IStoreState } from "./common/interface";

const { Header, Content, Footer } = Layout;

const App = () => {
  const [menuItemKey, setMenuItemKey] = useState<string>("cinema");

  const alarmList: IAlarm[] = useSelector(
    (state: IStoreState) => state.alarmData
  );

  const handleMenuItemOnClick = (e: any) => {
    setMenuItemKey(e.key);
  };

  const handleDropDownOnClick = (e: { key: React.SetStateAction<string> }) => {
    setMenuItemKey(e.key);
  };

  const handleLogoutOnClick = () => {
    global.localStorage.removeItem("userName");
    global.localStorage.removeItem("password");

    setMenuItemKey("cinema");
  };

  const handleLoginOnClick = () => {
    setMenuItemKey("login");
  };

  const dropDownMenu = (
    <Menu onClick={handleDropDownOnClick}>
      <Menu.Item key="login" icon={<UserOutlined />}>
        {global.localStorage.getItem("userName") ? (
          <span onClick={handleLogoutOnClick}>로그아웃</span>
        ) : (
          <span onClick={handleLoginOnClick}>로그인</span>
        )}
      </Menu.Item>
      <Menu.Item key="presentReserve" icon={<UserOutlined />}>
        예매현황
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout className="layout" style={{ fontFamily: "scoreDream1" }}>
      <Affix>
        <Header>
          <div className="logo" />
          <Row>
            <Col span={10} offset={4}>
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={[menuItemKey]}
                onClick={handleMenuItemOnClick}
              >
                <Menu.Item key={"cinema"}>시네마</Menu.Item>
                <Menu.Item key={"community"}>커뮤니티</Menu.Item>
                <Menu.Item key={"mypage"}>내 정보</Menu.Item>
              </Menu>
            </Col>
            <Col span={1} offset={4}>
              <Dropdown
                overlay={<Alarm alarmList={alarmList} />}
                trigger={["click"]}
              >
                <Badge count={alarmList.length}>
                  <Button
                    icon={<BellOutlined style={{ fontSize: 20 }} />}
                    shape="circle"
                    ghost
                    style={{ borderColor: "transparent" }}
                  />
                </Badge>
              </Dropdown>
            </Col>
            <Col span={1}>
              <Dropdown overlay={dropDownMenu} trigger={["click"]}>
                <Button
                  icon={<UserOutlined style={{ fontSize: 20 }} />}
                  shape="circle"
                  ghost
                  style={{ borderColor: "transparent" }}
                />
              </Dropdown>
            </Col>
          </Row>
        </Header>
      </Affix>
      <Content
        style={{
          padding: "0 50px",
          width: "100%",
          height: "100%",
          minHeight: "100vh",
        }}
      >
        <div className="site-layout-content" />
        <Row>
          <Col span={16} offset={4}>
            {menuItemKey === "cinema" && (
              <Cinema
                showOnlineTicket={() => setMenuItemKey("presentReserve")}
              />
            )}
            {menuItemKey === "community" && <Community />}
            {menuItemKey === "mypage" && <MyPage />}
            {menuItemKey === "login" && (
              <Login setMenuItemKey={setMenuItemKey} />
            )}
            {menuItemKey === "presentReserve" && <PresentReserve />}
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: "center" }}>Toy Project by.yelly</Footer>
    </Layout>
  );
};

export default App;
