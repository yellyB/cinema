import React, { useState } from "react";
import { PageHeader, Table, Modal, Button } from "antd";
import ShowTableContent from "./ShowTableContent";
import axios from "axios";
import { IBoard } from "../../common/interface";

const getBoardData = async () => {
  let boardData: IBoard[] = [];
  await axios
    .get(process.env.PUBLIC_URL + "/datas/board.json")
    .then((response) => {
      for (const item of response.data.data) {
        boardData.push(item);
      }
    });

  return boardData;
};

const Board = () => {
  const columns = [
    {
      title: "글 번호",
      dataIndex: "index",
      key: "index",
      width: 100,
    },
    {
      title: "제목",
      dataIndex: "title",
      key: "title",
      width: 450,
    },
    {
      title: "작성자",
      dataIndex: "writer",
      key: "writer",
    },
    {
      title: "조회수",
      dataIndex: "viewCount",
      key: "viewCount",
      width: 100,
    },
  ];

  const [data, setData] = React.useState<IBoard[]>([]);

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [rowData, setRowData] = useState<IBoard>({} as any);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const tableRowOnClick = (record: IBoard) => {
    showModal();
    setRowData(record);
  };

  React.useEffect(() => {
    getBoardData().then((res) => {
      setData(res);
    });
  }, []);

  return (
    <React.Fragment>
      <PageHeader className="site-page-header" title="자유게시판" />
      <Table
        columns={columns}
        dataSource={data}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              tableRowOnClick(record);
            },
          };
        }}
        pagination={{ position: ["bottomCenter"] }}
      />
      <ShowTableContent
        rowData={rowData}
        visible={isModalVisible}
        onClose={handleCancel}
      />
    </React.Fragment>
  );
};

export default Board;
