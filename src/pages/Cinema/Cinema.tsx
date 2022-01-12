import React, { useState } from "react";
import { Menu } from "antd";
import { VideoCameraFilled, CalendarOutlined } from "@ant-design/icons";
import MovieList from "./movie/MovieList";
import Reservation from "./reservation/Reservation";

const bigFont = {
  fontSize: "18pt",
};

const Cinema = (props: { showOnlineTicket: Function }) => {
  const [menuItemKey, setMenuItemKey] = useState<string>("movie");

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
          key="movie"
          icon={<VideoCameraFilled style={bigFont} />}
          style={bigFont}
        >
          영화
        </Menu.Item>
        <Menu.Item
          key="reservation"
          icon={<CalendarOutlined style={bigFont} />}
          style={bigFont}
        >
          예매
        </Menu.Item>
      </Menu>
      {menuItemKey === "movie" && (
        <MovieList reserveOnClick={() => setMenuItemKey("reservation")} />
      )}
      {menuItemKey === "reservation" && (
        <Reservation showOnlineTicket={props.showOnlineTicket} />
      )}
    </React.Fragment>
  );
};

export default Cinema;
