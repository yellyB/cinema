import React from "react";
import { Comment, Avatar, Form, Button, Input, Select } from "antd";
import CommentRate from "./CommentRate";

const { TextArea } = Input;
const { Option } = Select;

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        리뷰 남기기
      </Button>
    </Form.Item>
  </>
);

const WriteComment = (props: { addComment: Function }) => {
  const { addComment } = props;

  const [submitting, setSubmitting] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>("");
  const [rate, setRate] = React.useState<number>(5);
  const [profileIdx] = React.useState<number>(Math.floor(Math.random() * 16));

  const handleSubmit = () => {
    if (!value) {
      return;
    }

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setValue("");

      addComment({
        writer: localStorage.getItem("userName")
          ? localStorage.getItem("userName")
          : "guest",
        movieKey: 2,
        content: value,
        rate: rate,
        like: 0,
        dislike: 0,
        profileIdx: profileIdx,
      });
    }, 1000);
  };

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <React.Fragment>
      <Select defaultValue="" style={{ width: 120 }}>
        <Option value="">영화 선택</Option>
      </Select>
      <CommentRate rate={rate} setRate={setRate} />
      <Comment
        avatar={
          <>
            <Avatar
              src={
                process.env.PUBLIC_URL +
                "/images/profiles/" +
                profileIdx +
                ".svg"
              }
              alt="profile"
            />
          </>
        }
        content={
          <Editor
            onChange={handleChange}
            onSubmit={handleSubmit}
            submitting={submitting}
            value={value}
          />
        }
      />
    </React.Fragment>
  );
};

export default WriteComment;
