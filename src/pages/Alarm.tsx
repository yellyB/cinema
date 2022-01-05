import React from "react";
import { Button, List, Typography, Row, Col, Divider, Menu } from "antd";
import { CloseOutlined } from "@ant-design/icons/lib/icons";
import { IAlarm } from "../common/interface";
import { useDispatch } from "react-redux";

const { Title } = Typography;

const Alarm = (props: { alarmList: IAlarm[] }) => {
  const { alarmList } = props;
  const dispatch = useDispatch();

  return (
    <Menu style={{ width: 400 }}>
      <Row>
        <Col span={24}>
          <Row justify="space-between" align="middle">
            <Title level={4} style={{ paddingLeft: 20 }}>
              알림
            </Title>
            <Button
              type="text"
              onClick={() => {
                dispatch({ type: "delete" });
              }}
            >
              모두 지우기
            </Button>
            <Button
              type="text"
              onClick={() => {
                console.log(alarmList);
              }}
            >
              show
            </Button>
            <Button
              type="text"
              onClick={() => {
                dispatch({
                  type: "add",
                  data: { title: "test", content: "egweg" },
                });
              }}
            >
              add
            </Button>
          </Row>
        </Col>
        <Col span={24}>
          <Divider style={{ marginTop: 5, marginBottom: 0 }} />
        </Col>
        <Col span={24}>
          <List
            style={{ border: 0, maxHeight: 500, overflowY: "auto" }}
            bordered
            dataSource={alarmList}
            renderItem={(item: IAlarm) => (
              <List.Item className="main_alarm_list">
                <List.Item.Meta
                  title={
                    <>
                      <Row justify="center" align="middle">
                        <Col span={21}>
                          {item.title}
                          {item.index}
                        </Col>
                        <Col span={1}></Col>
                        <Col span={2}>
                          <CloseOutlined
                            onClick={() =>
                              dispatch({ type: "delete", idx: item.index })
                            }
                          />
                        </Col>
                      </Row>
                    </>
                  }
                  description={
                    <>
                      <Row justify="center" align="middle">
                        <Col span={21}>{item.content}</Col>
                        <Col span={1}></Col>
                      </Row>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </Menu>
  );
};

export default Alarm;
