import React from "react";
import { PageHeader, Space, Table, Tag } from "antd";

function Board() {
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

  const data = [
    {
      index: "3",
      title: "bad",
      writer: "John Brown",
      viewCount: 21,
    },
    {
      index: "2",
      title: "fdsfd",
      writer: "Jim Green",
      viewCount: 33,
    },
    {
      index: "1",
      title: "titltlel",
      writer: "Joe Black",
      viewCount: 13,
    },
  ];

  return (
    <React.Fragment>
      <PageHeader className="site-page-header" title="자유게시판" />
      <Table columns={columns} dataSource={data} />
    </React.Fragment>
  );
}

export default Board;
