import React from "react";
import { Rate } from "antd";

function CommontRate() {
  const desc = ["1점", "2점", "3점", "4점", "5점"];

  const [rate, setRate] = React.useState<number>(5);

  const handleRateOnChange = (value: any) => {
    setRate(value);
  };

  return (
    <React.Fragment>
      <Rate tooltips={desc} onChange={handleRateOnChange} value={3} />
    </React.Fragment>
  );
}

export default CommontRate;
