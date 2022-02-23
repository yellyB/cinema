import React from "react";
import { Menu } from "antd";
import { UserOutlined } from "@ant-design/icons/lib/icons";
const DropDownMenu = (props: {
  logoutOnClick: Function;
  loginOnClick: Function;
}) => {
  return (
    <Menu>
      <Menu.Item key="login" icon={<UserOutlined />}>
        {global.localStorage.getItem("userName") ? (
          <span onClick={() => props.logoutOnClick()}>로그아웃</span>
        ) : (
          <span onClick={() => props.loginOnClick()}>로그인</span>
        )}
      </Menu.Item>
      <Menu.Item key="presentReserve" icon={<UserOutlined />}>
        예매현황
      </Menu.Item>
    </Menu>
  );
};

export default DropDownMenu;
