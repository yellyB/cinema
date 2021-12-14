import React from "react";
import "./App.css";
import { Affix, Button, Col, Dropdown, Layout, Menu, Row } from "antd";
import { Cinema, Community, MyPage } from "./pages";
import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined";
import Login from "./pages/Login";
import PresentReserve from "./pages/PresentReserve";

const { Header, Content, Footer } = Layout;

function App() {
  const [menuItemKey, setMenuItemKey] = React.useState<string>("cinema");

  const handleMenuItemOnClick = (e: any) => {
    console.log(e.key);
    setMenuItemKey(e.key);
  };

  const handleDropDownOnClick = (e) => {
    setMenuItemKey(e.key);
  };

  const dropDownMenu = (
    <Menu onClick={handleDropDownOnClick}>
      <Menu.Item key="login" icon={<UserOutlined />}>
        로그인/로그아웃
      </Menu.Item>
      <Menu.Item key="presentReserve" icon={<UserOutlined />}>
        예매현황
      </Menu.Item>
    </Menu>
  );

  React.useEffect(() => {}, []);

  return (
    <Layout className="layout">
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
            <Col span={1} offset={5}>
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
          height: 500,
        }}
      >
        <div className="site-layout-content" />
        <Row>
          <Col span={16} offset={4}>
            {menuItemKey === "cinema" && <Cinema />}
            {menuItemKey === "community" && <Community />}
            {menuItemKey === "mypage" && <MyPage />}
            {menuItemKey === "login" && <Login />}
            {menuItemKey === "presentReserve" && <PresentReserve />}
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: "center" }}>footer</Footer>
    </Layout>
  );
}

export default App;
