import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Image,
  Row,
  Col,
  Divider,
  Typography,
  Select,
  InputNumber,
} from "antd";
import { IStoreState, ITicket } from "../../../common/interface";
import { useDispatch, useSelector } from "react-redux";

const { Title, Text } = Typography;
const { Option } = Select;

const StepThree = () => {
  const ticket: ITicket = useSelector((state: IStoreState) => state.ticketData);
  const dispatch = useDispatch();

  const [form] = Form.useForm();
  const [pointOrign, setPointOrign] = useState<number>(1490);
  const [point, setPoint] = useState<number>(1490);
  const [usePoint, setUsePoint] = useState<number>(0);
  const [price, setPrice] = useState<number>(10000);

  const handlePointOnChange = (value: any) => {
    setPoint(pointOrign - value);
    setUsePoint(value);
  };

  const handlePointUseOnClick = (e: any) => {
    setPoint(0);
    setUsePoint(pointOrign);
  };

  return (
    <>
      <Row justify="center">
        <Col span={16}>
          <Row>
            <Col span={8}>
              <Image
                width={"90%"}
                preview={false}
                src={
                  process.env.PUBLIC_URL +
                  "/images/movies/" +
                  ticket.title +
                  ".jpg"
                }
              />
            </Col>
            <Col span={16}>
              <Row>
                <Col span={8} className="payment_table_label">
                  제목
                </Col>
                <Col span={16} className="payment_table_content">
                  {ticket.title}
                </Col>
                <Col span={8} className="payment_table_label">
                  지점
                </Col>
                <Col span={16} className="payment_table_content">
                  {ticket.place}
                </Col>
                <Col span={8} className="payment_table_label">
                  상영관
                </Col>
                <Col span={16} className="payment_table_content">
                  {ticket.room}
                </Col>
                <Col span={8} className="payment_table_label">
                  시간
                </Col>
                <Col span={16} className="payment_table_content">
                  {ticket.time}
                </Col>
                <Col span={8} className="payment_table_label">
                  좌석
                </Col>
                <Col span={16} className="payment_table_content">
                  {ticket.seatRow}
                  {ticket.seatCol}
                </Col>
              </Row>
            </Col>
          </Row>
          <Row justify="center" style={{ marginTop: 30 }}>
            <Col span={24}>
              <Divider orientation="left">
                <Title level={4}>결제 정보</Title>
              </Divider>
            </Col>
            <Col span={20}>
              <Form layout="vertical" form={form}>
                <Form.Item label="휴대폰 번호">
                  <Input.Group compact>
                    <Select placeholder="통신사 선택" style={{ width: "35%" }}>
                      <Option value="0">SKT</Option>
                      <Option value="1">KT</Option>
                      <Option value="2">LG U+</Option>
                      <Option value="3">알뜰폰</Option>
                    </Select>
                    <Input placeholder="- 없이 입력" style={{ width: "65%" }} />
                  </Input.Group>
                </Form.Item>
                <Form.Item label="포인트">
                  <Row>
                    <Col span={10}>
                      <InputNumber
                        placeholder="사용할 포인트"
                        value={usePoint}
                        max={pointOrign}
                        formatter={(value) =>
                          `${value} 점`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                        }
                        onChange={handlePointOnChange}
                        style={{ width: "100%" }}
                      />
                    </Col>
                    <Col span={6} offset={2} style={{ paddingTop: 5 }}>
                      보유: {pointOrign} 점
                    </Col>
                    <Col span={6}>
                      <Button onClick={handlePointUseOnClick}>모두 사용</Button>
                    </Col>
                  </Row>
                </Form.Item>
                <Form.Item label="결제정보">
                  <Input.Group compact>
                    <Select placeholder="카드선택" style={{ width: "40%" }}>
                      <Option value={"1"}>국민</Option>
                      <Option value={"2"}>신한</Option>
                      <Option value={"3"}>농협</Option>
                      <Option value={"4"}>삼성</Option>
                      <Option value={"5"}>현대</Option>
                    </Select>
                    <Select placeholder="할부기간" style={{ width: "60%" }}>
                      <Option value={"1"}>일시불</Option>
                      <Option value={"2"}>2개월 무이자</Option>
                      <Option value={"3"}>3개월 무이자</Option>
                      <Option value={"4"}>4개월 무이자</Option>
                      <Option value={"5"}>5개월 무이자</Option>
                    </Select>
                  </Input.Group>
                </Form.Item>
              </Form>
            </Col>
          </Row>
          <Row justify="center" style={{ marginTop: 30 }}>
            <Col>
              <Text mark style={{ fontSize: "28pt" }}>
                최종 결제 금액:{" "}
                {String(price - usePoint).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                원
              </Text>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export { StepThree };
