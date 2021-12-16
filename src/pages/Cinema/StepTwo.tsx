import { InputNumber } from "antd";
import React from "react";

const StepTwo = () => {
  const [limit] = React.useState<any>({ min: 0, max: 10 });
  const [adultCount, setAdultCount] = React.useState<number>(0);
  const [kidCount, setKidCount] = React.useState<number>(0);

  const handleAdultOnChange = (value: any) => {
    setAdultCount(value);
  };
  const handleKidOnChange = (value: any) => {
    setKidCount(value);
  };

  return (
    <>
      <InputNumber
        min={limit.min}
        max={limit.max}
        value={adultCount}
        onChange={handleAdultOnChange}
      />
      <InputNumber
        min={limit.min}
        max={limit.max}
        value={kidCount}
        onChange={handleKidOnChange}
      />
    </>
  );
};

export { StepTwo };
