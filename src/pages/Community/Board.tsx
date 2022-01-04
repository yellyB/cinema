import React, { useState, useEffect } from "react";
import { PageHeader, Table } from "antd";
import ShowTableContent from "./ShowTableContent";
import { IBoard } from "../../common/interface";
import { getBoardData } from "../../common/axios";

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

  const [data, setData] = useState<IBoard[]>([]);

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

  useEffect(() => {
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
