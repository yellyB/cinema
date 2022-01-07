import React, { useState, useEffect } from "react";
import { Comment, Avatar, Form, Button, Input, Select } from "antd";
import CommentRate from "./CommentRate";
import { IMovieList } from "../../../common/interface";
import { getMovieList } from "../../../common/api";

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

  const [submitting, setSubmitting] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [rate, setRate] = useState<number>(5);
  const [profileIdx] = useState<number>(Math.floor(Math.random() * 16));

  const [movies, setMovies] = useState<IMovieList[]>([]);

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

  useEffect(() => {
    getMovieList().then((res) => {
      setMovies(res);
    });
  }, []);

  return (
    <React.Fragment>
      <Select defaultValue="" style={{ width: 300 }}>
        <Option value="">영화 선택</Option>
        {movies.map((item: IMovieList) => (
          <Option value={item.key}>{item.title}</Option>
        ))}
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
