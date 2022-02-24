import React, { useState } from "react";
import { CoffeeOutlined, StarOutlined } from "@ant-design/icons";
import Review from "./review/Review";
import Board from "./board/Board";
import { SubMenu } from "../../components";
import { ISubMenu } from "../../common/interface";

const Community = () => {
  const [subMenuKey, setSubMenuKey] = useState<string>("review");

  const handlMenuOnClick = (e: any) => {
    setSubMenuKey(e.key);
  };

  const menus: ISubMenu[] = [
    {
      key: "review",
      icon: <StarOutlined />,
      menuName: "리뷰/평점",
    },
    {
      key: "board",
      icon: <CoffeeOutlined />,
      menuName: "자유게시판",
    },
  ];

  return (
    <React.Fragment>
      <SubMenu
        menus={menus}
        menuItemKey={subMenuKey}
        menuOnClick={handlMenuOnClick}
      />
      {subMenuKey === "review" && <Review />}
      {subMenuKey === "board" && <Board />}
    </React.Fragment>
  );
};

export default Community;
