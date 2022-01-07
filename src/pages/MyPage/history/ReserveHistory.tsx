import React, { useState, useEffect } from "react";
import { Descriptions } from "antd";
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
      {tickets.map((item: ITicket, index: number) => (
        <PastTicket ticketData={item} key={index} />
      ))}
    </React.Fragment>
  );
};

export default ReserveHistory;
