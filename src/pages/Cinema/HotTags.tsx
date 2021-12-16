import React from "react";
import { Tag } from "antd";

const { CheckableTag } = Tag;

const notSelectedStyle = {
  background: "#eee",
};

const HotTags = (props: {
  room: string;
  time: string;
  selectedTime: any;
  handleTagOnClick: Function;
}) => {
  const { room, time, selectedTime, handleTagOnClick } = props;

  const handleChange = (e: boolean) => {
    handleTagOnClick(room, time);
  };

  return (
    <>
      <CheckableTag
        checked={selectedTime.room === room && selectedTime.time === time}
        onChange={handleChange}
        style={
          selectedTime.room === room && selectedTime.time === time
            ? {}
            : notSelectedStyle
        }
      >
        {time}
      </CheckableTag>
    </>
  );
};

export { HotTags };
