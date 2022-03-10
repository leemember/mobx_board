import { Link } from "react-router-dom";
import { GrTrash } from "react-icons/gr";
import useStore from "../../useStore";
import { AiTwotoneStar } from "react-icons/ai";
import { useCallback } from "react";

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
  const { Board } = useStore();

  const handleDelete = useCallback(() => {
    Board.setDeletePost(props.post.id);
    console.log(props.post.id)
    alert("게시물을 삭제 하셨습니다.");
  },[]);

  return (
    <li className="post-list">
      <Link to={`detail/${props.post.id}`}>
        <div className="content">
          <h3>{props.post.title}</h3>
          <p>
            추천메뉴 <AiTwotoneStar /> {props.post.recommendaMenu}
          </p>
          <strong>{props.post.price} &#65510;</strong>
        </div>
      </Link>

      {/* 삭제 */}
      <button type="button" onClick={handleDelete}>
       <GrTrash />   
      </button>
    </li>
  );
};

export default PostList;
