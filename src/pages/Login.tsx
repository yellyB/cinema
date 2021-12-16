import React from "react";
import { Form, Input, Button, Checkbox } from "antd";

const Login = () => {
  const onFinish = (values: any) => {
    const { username, password, remember } = values;
    global.localStorage.setItem("userName", username);
    global.localStorage.setItem("remember", remember);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const isRemember = () => {
    return global.localStorage.getItem("remember") === "true" ? true : false;
  };

  React.useEffect(() => {
    console.log(isRemember());
  }, []);

  return (
    <React.Fragment>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="아이디"
          name="username"
          rules={[{ required: true, message: "아이디를 입력해주세요." }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="비밀번호"
          name="password"
          rules={[{ required: true, message: "비밀번호를 입력해주세요." }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>아이디 기억하기</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            로그인
          </Button>
          <Button type="link" htmlType="button">
            회원가입
          </Button>
        </Form.Item>
      </Form>
    </React.Fragment>
  );
};

export default Login;
