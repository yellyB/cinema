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
} from "antd";
import { IMovieTimesEachRoom } from "../../common/interface";

const { Title } = Typography;

const StepThree = (props: {
  selectedMovie: string;
  selectedTheater: string;
  selectedTime: IMovieTimesEachRoom;
  selectedSeat: any;
}) => {
  const { selectedMovie, selectedTheater, selectedTime, selectedSeat } = props;

  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = React.useState<any>("horizontal");

  const onFormLayoutChange = ({ layout }: { layout: any }) => {
    setFormLayout(layout);
  };

  const buttonItemLayout =
    formLayout === "horizontal"
      ? {
          wrapperCol: { span: 14, offset: 4 },
        }
      : null;

  return (
    <>
      <Row justify="center">
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
        <Col span={24} style={{ marginTop: 30 }}>
          <Divider orientation="left">
            <Title level={4}>결제 정보</Title>
          </Divider>
        </Col>
        <Col span={24}>
          <Form
            layout="vertical"
            form={form}
            initialValues={{ layout: formLayout }}
            onValuesChange={onFormLayoutChange}
          >
            <Form.Item label="결제자 연락처">
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label="">
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item {...buttonItemLayout}>
              <Button type="primary">Submit</Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export { StepThree };
