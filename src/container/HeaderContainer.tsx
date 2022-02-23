import React, { useState } from "react";
import { Affix, Badge, Button, Col, Dropdown, Layout, Menu, Row } from "antd";
import { UserOutlined, BellOutlined } from "@ant-design/icons/lib/icons";
import Alarm from "../pages/Alarm";
import { useSelector } from "react-redux";
import { IAlarm, IStoreState } from "../common/interface";
import DropDownMenu from "../component/DropDownMenu";

const { Header } = Layout;

const HeaderContainer = (props: {
  menuItemKey: string;
  menuItemOnClick: Function;
}) => {
  const { menuItemKey, menuItemOnClick } = props;

  const alarmList: IAlarm[] = useSelector(
    (state: IStoreState) => state.alarmData
  );

  const handleLogoutOnClick = () => {
    global.localStorage.removeItem("userName");
    global.localStorage.removeItem("password");

    menuItemOnClick("logout");
  };

  const handleLoginOnClick = () => {
    menuItemOnClick("login");
  };

  return (
    <Affix>
      <Header>
        <div className="logo" />
        <Row>
          <Col span={10} offset={4}>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={[menuItemKey]}
              onClick={(e) => menuItemOnClick(e.key)}
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
                  icon={<BellOutlined className="nav_dropdown_icon" />}
                  shape="circle"
                  ghost
                  style={{ borderColor: "transparent" }}
                />
              </Badge>
            </Dropdown>
          </Col>
          <Col span={1}>
            <Dropdown
              overlay={
                <DropDownMenu
                  key={menuItemKey}
                  logoutOnClick={handleLogoutOnClick}
                  loginOnClick={handleLoginOnClick}
                />
              }
              trigger={["click"]}
            >
              <Button
                icon={<UserOutlined className="nav_dropdown_icon" />}
                shape="circle"
                ghost
                style={{ borderColor: "transparent" }}
              />
            </Dropdown>
          </Col>
        </Row>
      </Header>
    </Affix>
  );
};

export default HeaderContainer;
