import React from "react";
import { Button, List, Typography, Row, Col, Divider, Menu } from "antd";
import { CloseOutlined } from "@ant-design/icons/lib/icons";
import { IAlarm, IStoreState, ITicket } from "../common/interface";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

const { Title } = Typography;

const Alarm = (props: { alarmList: IAlarm[] }) => {
  const { alarmList } = props;

  const ticket: ITicket = useSelector((state: IStoreState) => state.ticketData);
  const dispatch = useDispatch();

  const handleTest = () => {
    console.log(moment().format("YYYYMMDD"));
    const data: ITicket = {
      reserveNo: moment().format("YYYYMMDD") + "0106",
      title: "222누젬ㄱ",
      place: "222플레이스",
      room: "dfs",
      seatRow: "22ㄴㄷㅁㅅ",
      seatCol: 1,
      date: "222날짜",
      time: "222시간",
      price: 2353,
    };
    dispatch({
      type: "setTicket",
      data: data,
    });
  };

  return (
    <Menu className="alarm_wrapper">
      <Row>
        <Col span={24}>
          <Row justify="space-between" align="middle">
            <Title level={4} className="alarm_title">
              알림
            </Title>
            <Button
              type="text"
              onClick={() => {
                dispatch({ type: "deleteAlarm" });
              }}
              style={{ marginTop: 5 }}
            >
              모두 지우기
            </Button>
            {/* <Button type="text" onClick={handleTest}>
              티켓등록
            </Button>
            <Button
              type="text"
              onClick={() => {
                console.log(ticket);
              }}
            >
              chedck
            </Button>
            <Button
              type="text"
              onClick={() => {
                dispatch({
                  type: "addAlarm",
                  data: { title: "test", content: "egweg" },
                });
              }}
            >
              add
            </Button> */}
          </Row>
        </Col>
        <Col span={24}>
          <Divider style={{ marginTop: 5, marginBottom: 0 }} />
        </Col>
        <Col span={24}>
          <List
            className="alarm_list_wrapper"
            bordered
            dataSource={alarmList}
            renderItem={(item: IAlarm) => (
              <List.Item className="alarm_list_item">
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
                              dispatch({ type: "deleteAlarm", idx: item.index })
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
