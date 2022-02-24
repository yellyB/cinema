import React from "react";
import { Menu } from "antd";
import { ISubMenu } from "../common/interface";

const SubMenu = (props: {
  menus: ISubMenu[];
  menuItemKey: string;
  menuOnClick: Function;
}) => {
  const { menus, menuItemKey, menuOnClick } = props;

  return (
    <Menu
      onClick={(e) => menuOnClick(e)}
      selectedKeys={[menuItemKey]}
      mode="horizontal"
      className="nav_under"
    >
      {menus.map((item: any) => (
        <Menu.Item key={item.key} icon={item.icon} className="subMenu_font">
          {item.menuName}
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default SubMenu;
