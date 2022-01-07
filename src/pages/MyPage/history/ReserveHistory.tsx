import { Row } from "antd";
import React, { useState, useEffect } from "react";
import { getTicketHistory } from "../../../common/api";
import { ITicket } from "../../../common/interface";
import PastTicket from "./PastTicket";

const ReserveHistory = () => {
  const [tickets, setTickets] = useState<ITicket[]>([]);

  useEffect(() => {
    getTicketHistory().then((res) => {
      setTickets(res);
    });
  }, []);

  return (
    <React.Fragment>
      <div style={{ marginTop: "10px" }}>
        {tickets.map((item: ITicket, index: number) => (
          <PastTicket ticketData={item} key={index} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default ReserveHistory;
