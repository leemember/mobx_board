import React from "react";
import { Link } from "react-router-dom";
import { GrTrash } from "react-icons/gr";
import useStore from "../../useStore";
export interface Posts {
  id: number;
  title: string;
  recommendaMenu: string;
  price: number;
}

interface IProps {
  post: Posts;
}

const PostList = (props: IProps) => {
  const { boardStore } = useStore();

  const handleDelete = (name: any) => {
    alert("삭제 완료");
    boardStore.boardStore.callDelete(name);
  };

  return (
    <li className="post-list">
      <Link to={`detail/${props.post.id}`}>
        <div className="content">
          <h3>{props.post.title}</h3>
          <p>{props.post.recommendaMenu}</p>
          <strong>{props.post.price} &#65510;</strong>
        </div>
      </Link>
      <button type="button" onClick={handleDelete}>
        <GrTrash />
      </button>
    </li>
  );
};

export default PostList;
