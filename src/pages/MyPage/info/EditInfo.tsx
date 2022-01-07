import React, { useState } from "react";
import { Menu } from "antd";
import { MailOutlined, AppstoreOutlined } from "@ant-design/icons";

const EditInfo = () => {
  const [menuItemKey, setMenuItemKey] = useState<string>("movie");

  const handlMenuOnClick = (e: any) => {
    setMenuItemKey(e.key);
  };

  return <React.Fragment>EditInfo</React.Fragment>;
};

export default EditInfo;
