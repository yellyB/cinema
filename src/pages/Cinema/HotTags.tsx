import React from "react";
import { Tag } from "antd";

const { CheckableTag } = Tag;

const HotTags = (props: {
  room: string;
  time: string;
  selectedTime: any;
  handleTagOnClick: Function;
}) => {
  const { room, time, selectedTime, handleTagOnClick } = props;

  const [state, setState] = React.useState(["Books"]);

  const handleChange = (e: boolean) => {
    console.log("room:", room, "time:", time);
    handleTagOnClick(room, time);
    // const selectedTags = state;
    // const nextSelectedTags = checked
    //   ? [...selectedTags, tag]
    //   : selectedTags.filter((t) => t !== tag);
    // console.log("You are interested in: ", nextSelectedTags);
    // setState(nextSelectedTags);
  };

  return (
    <>
      <CheckableTag
        checked={selectedTime.room === room && selectedTime.time === time}
        onChange={handleChange}
      >
        {time}
      </CheckableTag>
    </>
  );
};

export { HotTags };
