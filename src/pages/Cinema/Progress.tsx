import React from "react";
import { Steps, Button, message, Row, Col } from "antd";
import { MessageType } from "antd/lib/message";

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

const submit = async () => {
  const promise = new Promise((resolve, reject) => {
    console.log("doing something");
    setTimeout(() => {
      resolve(message.info("결제 진행 중"));
    }, 1000);
  }).then(() => {
    message.success("결제 완료!");
  });
  return promise;
};

const ProgressBtn = (props: {
  steps: any;
  step: number;
  handleStepChange: Function;
}) => {
  const { steps, step, handleStepChange } = props;

  const [loading, setLoading] = React.useState<boolean>(false);

  const handleSubmitOnClick = async () => {
    setLoading(true);
    await submit().finally(() => {
      setLoading(false);
    });
  };

  return (
    <Row>
      <Col span={11}>
        <Button
          disabled={step === 0}
          onClick={() => handleStepChange("prev")}
          style={{ marginLeft: "3%" }}
          className="reserve_step_btn"
        >
          이전단계
        </Button>
      </Col>
      <Col span={11} offset={1}>
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
            onClick={handleSubmitOnClick}
            className="reserve_step_btn"
            loading={loading}
          >
            결제하기
          </Button>
        )}
      </Col>
    </Row>
  );
};

export { Progress, ProgressBtn };
