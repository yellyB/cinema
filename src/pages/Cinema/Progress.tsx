import React, { useState } from "react";
import { Steps, Button, message, Row, Col } from "antd";
import { MessageType } from "antd/lib/message";
import { useSelector, useDispatch } from "react-redux";
import { IAlarm, IStoreState, ITicket } from "../../common/interface";
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
          type: "addAlarm",
          data: { title: "test", content: "egweg" },
        });
      })
      .then(() => {
        console.log(moment().format("YYYYMMDD"));
        const data: ITicket = {
          reserveNo: moment().format("YYYYMMDD") + "0106",
          title: "222누젬ㄱ",
          place: "222플레이스",
          room: "twete",
          seatRow: "22ㄴㄷㅁㅅ",
          seatCol: 22,
          date: "222날짜",
          time: "222시간",
          price: 2020,
        };

        dispatch({
          type: "setTicket",
          data: { data },
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
