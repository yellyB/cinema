import React from "react";
import axios from "axios";
import WriteComment from "./WriteComment";
import Comments from "./Comments";
import { IComment } from "../../common/interface";

const getComments = async () => {
  let comments: IComment[] = [];
  await axios
    .get(process.env.PUBLIC_URL + "/datas/comments.json")
    .then((response) => {
      comments = response.data.data;
    });

  return comments;
};

const Review = () => {
  const [list, setList] = React.useState<IComment[]>([]);

  React.useEffect(() => {
    getComments().then((res) => {
      setList(res);
    });
  }, []);

  return (
    <React.Fragment>
      {list.map((item: IComment, index: number) => (
        <Comments item={item} />
      ))}
      <WriteComment />
    </React.Fragment>
  );
};

export default Review;
