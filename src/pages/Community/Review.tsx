import React from "react";
import WriteComment from "./WriteComment";
import { Comment, Avatar, Rate } from "antd";
import Comments from "./Comments";

function Review() {
  const [menuItemKey, setMenuItemKey] = React.useState<string>("movie");

  const handlMenuOnClick = (e: any) => {
    setMenuItemKey(e.key);
  };

  return (
    <React.Fragment>
      <Comments />
      <Comments />
      <Comments />
      <WriteComment />
    </React.Fragment>
  );
}

export default Review;
