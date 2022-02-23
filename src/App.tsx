import React, { useState } from "react";
import "./App.less";
import "./style/style.css";
import { Layout } from "antd";
import ContentContainer from "./container/ContentContainer";
import HeaderContainer from "./container/HeaderContainer";

const { Footer } = Layout;

const App = () => {
  const [menuItemKey, setMenuItemKey] = useState<string>("cinema");

  const handleMenuItemOnClick = (key: string) => {
    // console.log(e.key);
    setMenuItemKey(key);
  };

  return (
    <Layout style={{ fontFamily: "scoreDream1" }}>
      <HeaderContainer
        menuItemKey={menuItemKey}
        menuItemOnClick={handleMenuItemOnClick}
      />
      <ContentContainer
        menuItemKey={menuItemKey}
        menuItemOnClick={handleMenuItemOnClick}
      />
      <Footer className="layout_footer">Toy Project by.yelly</Footer>
    </Layout>
  );
};

export default App;
