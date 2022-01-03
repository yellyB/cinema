import React from "react";
import {
  Descriptions,
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
import { IMovieTimesEachRoom } from "../../common/interface";

const { Title, Text } = Typography;
const { Option } = Select;

const StepThree = (props: {
  selectedMovie: string;
  selectedTheater: string;
  selectedTime: IMovieTimesEachRoom;
  selectedSeat: any;
}) => {
  const { selectedMovie, selectedTheater, selectedTime, selectedSeat } = props;

  const [form] = Form.useForm();
  const [pointOrign, setPointOrign] = React.useState<number>(1490);
  const [point, setPoint] = React.useState<number>(1490);
  const [usePoint, setUsePoint] = React.useState<number>(0);
  const [price, setPrice] = React.useState<number>(10000);

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
        <Col span={18}>
          <Row>
            <Col span={8}>
              <Image
                width={200}
                src={
                  process.env.PUBLIC_URL +
                  "/images/movies/" +
                  selectedMovie +
                  ".jpg"
                }
              />
            </Col>
            <Col span={16}>
              <Row>
                <Col span={24}>제목{selectedMovie}</Col>
                <Col span={24}>지점{selectedTheater}</Col>
                <Col span={24}>상영관{selectedTime.room}</Col>
                <Col span={24}>시간{selectedTime.time}</Col>
                <Col span={24}>
                  좌석{selectedSeat.row}
                  {selectedSeat.col}
                </Col>
              </Row>
            </Col>
            <Col span={14} style={{ marginTop: 30 }}>
              <Divider orientation="left">
                <Title level={4}>결제 정보</Title>
              </Divider>
            </Col>
            <Col span={12}>
              <Form layout="vertical" form={form}>
                <Form.Item label="휴대폰 번호">
                  <Input placeholder="- 없이 입력" />
                </Form.Item>
                <Form.Item label="포인트">
                  <Row>
                    <Col span={8}>
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
                    <Col span={5}>
                      <Button onClick={handlePointUseOnClick}>모두 사용</Button>
                    </Col>
                  </Row>
                </Form.Item>
                <Form.Item label="결제정보">
                  <Input.Group>
                    <Select placeholder="카드선택" style={{ width: "50%" }}>
                      <Option value={"1"}>국민</Option>
                      <Option value={"2"}>신한</Option>
                      <Option value={"3"}>농협</Option>
                      <Option value={"4"}>삼성</Option>
                      <Option value={"5"}>현대</Option>
                    </Select>
                    <Select placeholder="할부기간" style={{ width: "50%" }}>
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
            <Col span={24}>
              <Text>
                최종 결제 금액:
                <InputNumber
                  placeholder="Borderless"
                  bordered={false}
                  value={price - usePoint}
                  formatter={(value) =>
                    `${value} 원`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                />
              </Text>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export { StepThree };
