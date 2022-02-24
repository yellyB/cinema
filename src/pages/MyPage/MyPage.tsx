import React, { useState } from "react";
import {
  HistoryOutlined,
  AppstoreOutlined,
  MailOutlined,
} from "@ant-design/icons";
import MyInfo from "./info/MyInfo";
import Point from "./info/Point";
import EditInfo from "./info/EditInfo";
import ReserveHistory from "./history/ReserveHistory";
import { ISubMenu } from "../../common/interface";
import { SubMenu } from "../../components";

const MyPage = () => {
  const [subMenuKey, setSubMenuKey] = useState<string>("reserveHistory");

  const handlMenuOnClick = (e: any) => {
    setSubMenuKey(e.key);
  };

  const menus: ISubMenu[] = [
    // {
    //   key: "myInfo",
    //   icon: <AppstoreOutlined />,
    //   menuName: "내 정보",
    // },
    {
      key: "reserveHistory",
      icon: <HistoryOutlined />,
      menuName: "예매이력",
    },
    // {
    //   key: "editInfo",
    //   icon: <MailOutlined />,
    //   menuName: "정보수정",
    // },
  ];

  return (
    <React.Fragment>
      <SubMenu
        menus={menus}
        menuItemKey={subMenuKey}
        menuOnClick={handlMenuOnClick}
      />
      {subMenuKey === "myInfo" && <MyInfo />}
      {subMenuKey === "point" && <Point />}
      {subMenuKey === "reserveHistory" && <ReserveHistory />}
      {subMenuKey === "editInfo" && <EditInfo />}
    </React.Fragment>
  );
};

export default MyPage;
