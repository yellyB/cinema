import React from "react";
import { Descriptions } from "antd";

function ReserveHistory() {
  const [menuItemKey, setMenuItemKey] = React.useState<string>("movie");

  const handlMenuOnClick = (e: any) => {
    setMenuItemKey(e.key);
  };

  return (
    <React.Fragment>
      <Descriptions title="영화 제목">
        <Descriptions.Item label="UserName">영화관명/몇 관</Descriptions.Item>
        <Descriptions.Item label="Telephone">영화날짜</Descriptions.Item>
        <Descriptions.Item label="Live">영화시간</Descriptions.Item>
        <Descriptions.Item label="Remark">10,000원</Descriptions.Item>
        <Descriptions.Item label="Address">몇포인트 적립</Descriptions.Item>
      </Descriptions>
    </React.Fragment>
  );
}

export default ReserveHistory;
