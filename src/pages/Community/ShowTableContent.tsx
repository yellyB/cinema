import React from "react";
import { Modal, Button, Row, Col, Typography } from "antd";
import { IBoard } from "../../common/interface";
import { UserOutlined, EyeOutlined } from "@ant-design/icons";

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
        <Col span={22}>
          <Text type="secondary">
            <UserOutlined />
            {writer}
          </Text>
        </Col>
        <Col span={2}>
          <Text type="secondary">
            <EyeOutlined />
            {viewCount}
          </Text>
        </Col>
        <Col span={24}>{content}</Col>
      </Row>
    </Modal>
  );
};

export default ShowTableContent;
