import React from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;

class SlidingTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "top",
    };
  }

  handleModeChange = (e) => {
    const mode = e.target.value;
    this.setState({ mode });
  };

  render() {
    // const { mode } = this.state;
    return (
      <div>
        <Tabs defaultActiveKey="1" tabPosition={"left"} style={{ height: 220 }}>
          {[...Array.from({ length: 30 }, (v, i) => i)].map((i) => (
            <TabPane tab={`Tab-${i}`} key={i} disabled={i === 28}>
              Content of tab {i}
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}

export { SlidingTabs };
