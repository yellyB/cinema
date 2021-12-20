import React from "react";
import { Steps, Button, message, Row, Col } from "antd";

const { Step } = Steps;

const Progress = (props: { steps: any; step: number }) => {
  const { steps, step } = props;

  return (
    <>
      <Steps current={step}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
    </>
  );
};

const ProgressBtn = (props: {
  steps: any;
  step: number;
  handleStepChange: Function;
}) => {
  const { steps, step, handleStepChange } = props;

  return (
    <Row justify="center">
      <Col span={11}>
        {step < steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => handleStepChange("next")}
            className="reserve_step_btn"
          >
            다음
          </Button>
        )}
        {step === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
            className="reserve_step_btn"
          >
            결제하기
          </Button>
        )}
      </Col>
      <Col span={11}>
        {step > 0 && (
          <Button
            style={{ margin: "0 8px" }}
            onClick={() => handleStepChange("prev")}
            className="reserve_step_btn"
          >
            이전단계
          </Button>
        )}
      </Col>
    </Row>
  );
};

export { Progress, ProgressBtn };
