import React, { useState } from "react";
import { Menu } from "antd";
import { CoffeeOutlined, StarOutlined } from "@ant-design/icons";
import Review from "./review/Review";
import Board from "./board/Board";

const bigFont = {
  fontSize: "18pt",
};

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
        className="nav_under"
      >
        <Menu.Item
          key="review"
          icon={<StarOutlined style={bigFont} />}
          style={bigFont}
        >
          리뷰/평점
        </Menu.Item>
        <Menu.Item
          key="board"
          icon={<CoffeeOutlined style={bigFont} />}
          style={bigFont}
        >
          자유게시판
        </Menu.Item>
      </Menu>
      {menuItemKey === "review" && <Review />}
      {menuItemKey === "board" && <Board />}
    </React.Fragment>
  );
};

export default Community;
