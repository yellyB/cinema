import React, { useState } from "react";
import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import ReserveHistory from "./MyPage/ReserveHistory";
import EditInfo from "./MyPage/EditInfo";
import MyInfo from "./MyPage/MyInfo";
import Point from "./MyPage/Point";

function MyPage() {
  const [menuItemKey, setMenuItemKey] = useState<string>("reserveHistory");

  const handlMenuOnClick = (e: any) => {
    setMenuItemKey(e.key);
  };
  return (
    <React.Fragment>
      <Menu
        onClick={handlMenuOnClick}
        selectedKeys={[menuItemKey]}
        mode="horizontal"
      >
        {/* <SubMenu key="1" icon={<SettingOutlined />} title="내 정보">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="myInfo">기본정보</Menu.Item>
            <Menu.Item key="point">포인트</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu> */}

        <Menu.Item key="myInfo" icon={<AppstoreOutlined />}>
          내 정보
        </Menu.Item>
        <Menu.Item key="reserveHistory" icon={<AppstoreOutlined />}>
          예매이력
        </Menu.Item>
        {/* <Menu.Item key="editInfo" icon={<MailOutlined />}>
          정보수정
        </Menu.Item> */}
      </Menu>
      {menuItemKey === "myInfo" && <MyInfo />}
      {menuItemKey === "point" && <Point />}
      {menuItemKey === "reserveHistory" && <ReserveHistory />}
      {menuItemKey === "editInfo" && <EditInfo />}
    </React.Fragment>
  );
}

export default MyPage;
