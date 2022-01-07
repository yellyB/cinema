import React from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;

const SlidingTabs = (props: {
  children: string[];
  handleTabKeyChange: Function;
}) => {
  const { children, handleTabKeyChange } = props;

  const handleTabOnClick = (key: string) => {
    handleTabKeyChange(key);
  };

  return (
    <div>
      <Tabs
        tabPosition={"left"}
        style={{ height: 450 }}
        onTabClick={handleTabOnClick}
      >
        {children.map((item: string, index: number) => (
          <TabPane tab={item} key={item} disabled={index === 28} />
        ))}
      </Tabs>
    </div>
  );
};

export { SlidingTabs };
