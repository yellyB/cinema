import React from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;

class SlidingTabs extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      selected: "",
    };
  }

  handleTabOnClick = (key: string) => {
    console.log(key);
    this.setState({ selected: key });
  };

  render() {
    // const { mode } = this.state;
    const { children } = this.props;

    return (
      <div>
        <Tabs
          defaultActiveKey="0"
          tabPosition={"left"}
          style={{ height: 220 }}
          onTabClick={this.handleTabOnClick}
        >
          {children.map((item: string, index: number) => (
            <TabPane tab={item} key={item} disabled={index === 28}>
              {item}
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}

export { SlidingTabs };
