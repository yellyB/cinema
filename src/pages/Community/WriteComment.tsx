import React from "react";
import { Comment, Avatar, Form, Button, List, Input, Rate } from "antd";
import moment from "moment";
import CommentRate from "./CommentRate";

const { TextArea } = Input;

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

  const handleSubmit = () => {
    if (!value) {
      return;
    }

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setValue("");

      addComment({
        writer: "writer",
        movieKey: 2,
        content: value,
        rate: 5,
        like: 0,
        dislike: 0,
        profileIdx: Math.floor(Math.random() * 16),
      });
    }, 1000);
  };

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <React.Fragment>
      <CommentRate />
      <Comment
        avatar={
          <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
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
