import React, { useState } from "react";
import { Menu } from "antd";
import { MailOutlined, AppstoreOutlined } from "@ant-design/icons";

const MyInfo = () => {
  const [menuItemKey, setMenuItemKey] = useState<string>("movie");

  const handlMenuOnClick = (e: any) => {
    setMenuItemKey(e.key);
  };

  return <React.Fragment>MyInfo</React.Fragment>;
};

export default MyInfo;
