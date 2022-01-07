import React, { useState } from "react";
import { Row, Col, Typography, Tag } from "antd";
import { SeatTags } from "./SeatTag";
import { ISeat, IStoreState, ITicket } from "../../../common/interface";
import { useSelector, useDispatch } from "react-redux";

const { Title } = Typography;

const StepTwo = () => {
  const ticket: ITicket = useSelector((state: IStoreState) => state.ticketData);
  const dispatch = useDispatch();

  const handleTagOnClick = (seat: ISeat) => {
    const data: ITicket = {
      ...ticket,
      seatRow: seat.seatRow,
      seatCol: seat.seatCol,
      price: 10000,
    };
    dispatch({
      type: "setTicket",
      data: data,
    });
  };

  return (
    <>
      <Row justify="center">
        <Title>SCREEN</Title>
      </Row>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((row: number, idx: number) => (
        <React.Fragment key={idx}>
          <Row>
            <Col span={1}>
              <Tag
                color="default"
                style={{ width: 50, height: 25, textAlign: "center" }}
              >
                {String.fromCharCode(row + 65)}
              </Tag>
            </Col>
            {[
              0, 1, 2, 3, 4, 5, 0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0, 16,
              17, 18, 19, 0,
            ].map((col: number, index: number) => {
              return (
                <>
                  {col === 0 ? (
                    <Col span={1} key={index}></Col>
                  ) : (
                    <Col span={1} key={index} style={{ textAlign: "center" }}>
                      <SeatTags
                        key={index}
                        row={String.fromCharCode(row + 65)}
                        col={col}
                        selectedSeat={{
                          seatRow: ticket.seatRow,
                          seatCol: ticket.seatCol,
                        }}
                        handleTagOnClick={handleTagOnClick}
                      />
                    </Col>
                  )}
                </>
              );
            })}
          </Row>
        </React.Fragment>
      ))}
    </>
  );
};

export { StepTwo };
