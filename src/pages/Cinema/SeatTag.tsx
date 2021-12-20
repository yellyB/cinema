import React from "react";
import { Tag } from "antd";

const { CheckableTag } = Tag;

const selectedStyle = {
  width: "100%",
  height: 25,
  marginBottom: 5,
  background: "#2c2c2c",
};

const notSelectedStyle = {
  width: "100%",
  height: 25,
  marginBottom: 5,
  background: "#cbcbcb",
  border: "1px solid #858585",
};

const SeatTags = (props: {
  row: string;
  col: number;
  selectedSeat: any;
  handleTagOnClick: Function;
}) => {
  const { row, col, selectedSeat, handleTagOnClick } = props;

  const handleChange = (e: boolean) => {
    handleTagOnClick({ row: row, col: col });
  };

  return (
    <>
      <CheckableTag
        checked={selectedSeat.row === row && selectedSeat.col === col}
        onChange={handleChange}
        style={
          selectedSeat.row === row && selectedSeat.col === col
            ? selectedStyle
            : notSelectedStyle
        }
      >
        {col}
      </CheckableTag>
    </>
  );
};

export { SeatTags };
