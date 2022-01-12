import React, { useState } from "react";

const EditInfo = () => {
  const [menuItemKey, setMenuItemKey] = useState<string>("movie");

  const handlMenuOnClick = (e: any) => {
    setMenuItemKey(e.key);
  };

  return <React.Fragment>EditInfo</React.Fragment>;
};

export default EditInfo;
