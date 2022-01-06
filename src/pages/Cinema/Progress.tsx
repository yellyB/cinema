import React, { useState } from "react";
import { Steps, Button, message, Row, Col } from "antd";
import { MessageType } from "antd/lib/message";
import { useSelector, useDispatch } from "react-redux";
import { IAlarm, IStoreState } from "../../common/interface";

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
  showOnlineTicket: Function;
}) => {
  const { steps, step, handleStepChange, showOnlineTicket } = props;

  const [loading, setLoading] = useState<boolean>(false);
  const alarmList: IAlarm[] = useSelector(
    (state: IStoreState) => state.alarmData
  );
  const dispatch = useDispatch();

  const submit = async () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(message.info("결제 진행 중"));
      }, 1000);
    })
      .then(() => {
        message.success("결제 완료!");
      })
      .then(() => {
        setTimeout(() => {
          showOnlineTicket();
        }, 1000);
      });
    return promise;
  };

  const handleSubmitOnClick = async () => {
    setLoading(true);
    await submit()
      .finally(() => {
        setLoading(false);
      })
      .then(() => {
        dispatch({
          type: "add",
          data: { title: "test", content: "egweg" },
        });
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
