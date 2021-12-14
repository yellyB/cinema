import React from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

function Community() {
  const [menuItemKey, setMenuItemKey] = React.useState<string>("mail");

  const handlMenuOnClick = (e: any) => {
    setMenuItemKey(e.key);
  };
  return (
    <Menu
      onClick={handlMenuOnClick}
      selectedKeys={[menuItemKey]}
      mode="horizontal"
    >
      <Menu.Item key="mail" icon={<MailOutlined />}>
        리뷰/평점
      </Menu.Item>
      <Menu.Item key="app" icon={<AppstoreOutlined />}>
        자유게시판
      </Menu.Item>
    </Menu>
  );
}

export default Community;
