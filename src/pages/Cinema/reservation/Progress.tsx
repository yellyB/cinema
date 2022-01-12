import React, { useState } from "react";
import { Steps, Button, message, Row, Col } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { IStoreState, ITicket } from "../../../common/interface";
import moment from "moment";

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

  const ticket: ITicket = useSelector((state: IStoreState) => state.ticketData);
  const dispatch = useDispatch();

  const submit = async () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(message.warning("결제 진행 중"));
      }, 1000);
    })
      .then(() => {
        message.success("결제 완료!");
      })
      .then(() => {
        //실제 서비스에서는 이부분에서 DB에 데이터 저장하고 store는 초기화
        const data: ITicket = {
          ...ticket,
          reserveNo: moment().format("YYYYMMDD") + "0106",
          date: moment().format("YYYY-MM-DD : hh:mm:ss"),
        };
        dispatch({
          type: "setTicket",
          data: data,
        });
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
          type: "addAlarm",
          data: { title: "예매 성공", content: "예매 완료되었습니다." },
        });
      })
      .then(() => {
        setTimeout(() => {
          showOnlineTicket();
        }, 1000);
      });
  };

  return (
    <Row style={{ marginTop: "30px" }}>
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
