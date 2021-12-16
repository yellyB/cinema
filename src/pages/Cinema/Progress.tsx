import React from "react";
import { Steps, Button, message } from "antd";

const { Step } = Steps;

const Progress = (props: {
  steps: any;
  step: number;
  handleStepChange: Function;
}) => {
  const { steps, step, handleStepChange } = props;

  const handleStepOnClick = (direction: string) => {
    handleStepChange(direction);
  };

  return (
    <>
      <Steps current={step}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      {/* <div className="steps-content">{steps[step].content}</div> */}
      <div className="steps-action">
        {step < steps.length - 1 && (
          <Button type="primary" onClick={() => handleStepOnClick("next")}>
            다음
          </Button>
        )}
        {step === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            결제하기
          </Button>
        )}
        {step > 0 && (
          <Button
            style={{ margin: "0 8px" }}
            onClick={() => handleStepOnClick("prev")}
          >
            이전단계
          </Button>
        )}
      </div>
    </>
  );
};

export { Progress };
