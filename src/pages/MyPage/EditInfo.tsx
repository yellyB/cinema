import React from "react";
import { Menu } from "antd";
import { MailOutlined, AppstoreOutlined } from "@ant-design/icons";

function EditInfo() {
  const [menuItemKey, setMenuItemKey] = React.useState<string>("movie");

  const handlMenuOnClick = (e: any) => {
    setMenuItemKey(e.key);
  };

  return <React.Fragment>EditInfo</React.Fragment>;
}

export default EditInfo;
