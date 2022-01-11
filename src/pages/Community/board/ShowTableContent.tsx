import React from "react";
import { Modal, Button, Row, Col, Typography, Dropdown, Menu } from "antd";
import { IBoard } from "../../common/interface";
import { EyeOutlined } from "@ant-design/icons";
let domparser = new DOMParser();
const { Text, Link } = Typography;

const ShowTableContent = (props: {
  rowData: IBoard;
  visible: boolean;
  onClose: Function;
}) => {
  const {
    rowData: { index, title, writer, content, viewCount },
    visible,
    onClose,
  } = props;

  const menu = (
    <Menu style={{ background: "#666", marginLeft: 50, marginTop: -5 }}>
      <Menu.Item style={{ color: "#eee" }}>쪽지보내기</Menu.Item>
      <Menu.Item style={{ color: "#eee" }}>작성글 보기</Menu.Item>
    </Menu>
  );

  return (
    <Modal
      title={title}
      visible={visible}
      onCancel={() => onClose()}
      footer={[
        <Button key="close" onClick={() => onClose()}>
          닫기
        </Button>,
      ]}
    >
      <Row>
        <Col span={21}>
          <Dropdown overlay={menu} placement="bottomLeft">
            <Button type="link">{writer}</Button>
          </Dropdown>
        </Col>
        <Col span={3}>
          <Text type="secondary">
            <EyeOutlined />
            {" " + viewCount}
          </Text>
        </Col>
        <Col span={22} offset={1}>
          {content?.replaceAll("<|>", "\n")}
        </Col>
      </Row>
    </Modal>
  );
};

export default ShowTableContent;
