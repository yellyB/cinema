import React from "react";
import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

function MyPage() {
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
      <SubMenu key="myInfo" icon={<SettingOutlined />} title="내 정보">
        <Menu.ItemGroup title="Item 1">
          <Menu.Item key="setting:1">기본정보</Menu.Item>
          <Menu.Item key="setting:2">포인트</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <Menu.Item key="app" icon={<AppstoreOutlined />}>
        예매이력
      </Menu.Item>
      <Menu.Item key="mail" icon={<MailOutlined />}>
        정보수정
      </Menu.Item>
    </Menu>
  );
}

export default MyPage;
