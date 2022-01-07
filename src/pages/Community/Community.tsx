import React, { useState } from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Review from "./review/Review";
import Board from "./board/Board";

const Community = () => {
  const [menuItemKey, setMenuItemKey] = useState<string>("review");

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
        <Menu.Item key="review" icon={<MailOutlined />}>
          리뷰/평점
        </Menu.Item>
        <Menu.Item key="board" icon={<AppstoreOutlined />}>
          자유게시판
        </Menu.Item>
      </Menu>
      {menuItemKey === "review" && <Review />}
      {menuItemKey === "board" && <Board />}
    </React.Fragment>
  );
};

export default Community;
