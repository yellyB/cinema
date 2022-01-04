import React, { useState } from "react";
import { Menu } from "antd";
import { MailOutlined, AppstoreOutlined } from "@ant-design/icons";
import MovieList from "./Cinema/MovieList";
import Reservation from "./Cinema/Reservation";

function Cinema(props: { showOnlineTicket: Function }) {
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
      >
        <Menu.Item key="movie" icon={<MailOutlined />}>
          영화
        </Menu.Item>
        <Menu.Item key="reservation" icon={<AppstoreOutlined />}>
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
}

export default Cinema;
