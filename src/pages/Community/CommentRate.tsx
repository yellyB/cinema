import React from "react";
import { Rate } from "antd";

const CommentRate = (props: { rate: number; setRate: Function }) => {
  const desc = ["1점", "2점", "3점", "4점", "5점"];

  const handleRateOnChange = (value: any) => {
    props.setRate(value);
  };

  return (
    <React.Fragment>
      <Rate tooltips={desc} onChange={handleRateOnChange} value={props.rate} />
    </React.Fragment>
  );
};

export default CommentRate;
