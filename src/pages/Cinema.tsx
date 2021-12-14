import React from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

function Cinema() {
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
        영화
      </Menu.Item>
      <Menu.Item key="app" icon={<AppstoreOutlined />}>
        예매
      </Menu.Item>
    </Menu>
  );
}

export default Cinema;
