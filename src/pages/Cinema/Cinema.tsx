import React, { useState } from "react";
import { VideoCameraFilled, CalendarOutlined } from "@ant-design/icons";
import MovieList from "./movie/MovieList";
import Reservation from "./reservation/Reservation";
import { SubMenu } from "../../components";
import { ISubMenu } from "../../common/interface";

const Cinema = (props: { showOnlineTicket: Function }) => {
  const [subMenuKey, setSubMenuKey] = useState<string>("movie");

  const handlMenuOnClick = (e: any) => {
    setSubMenuKey(e.key);
  };

  const menus: ISubMenu[] = [
    {
      key: "movie",
      icon: <VideoCameraFilled />,
      menuName: "영화",
    },
    {
      key: "reservation",
      icon: <CalendarOutlined />,
      menuName: "예매",
    },
  ];

  return (
    <React.Fragment>
      <SubMenu
        menus={menus}
        menuItemKey={subMenuKey}
        menuOnClick={handlMenuOnClick}
      />
      {subMenuKey === "movie" && (
        <MovieList reserveOnClick={() => setSubMenuKey("reservation")} />
      )}
      {subMenuKey === "reservation" && (
        <Reservation showOnlineTicket={props.showOnlineTicket} />
      )}
    </React.Fragment>
  );
};

export default Cinema;
