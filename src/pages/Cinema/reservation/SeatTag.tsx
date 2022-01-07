import React from "react";
import { Tag } from "antd";
import { ISeat } from "../../../common/interface";

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
  selectedSeat: ISeat;
  handleTagOnClick: Function;
}) => {
  const { row, col, selectedSeat, handleTagOnClick } = props;

  const handleChange = (e: boolean) => {
    handleTagOnClick({ seatRow: row, seatCol: col });
  };

  return (
    <>
      <CheckableTag
        checked={selectedSeat.seatRow === row && selectedSeat.seatCol === col}
        onChange={handleChange}
        style={
          selectedSeat.seatRow === row && selectedSeat.seatCol === col
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
