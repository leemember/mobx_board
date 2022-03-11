import { Link } from "react-router-dom";
import { GrTrash } from "react-icons/gr";
import useStore from "../../useStore";
import { AiTwotoneStar } from "react-icons/ai";
import { useCallback } from "react";
import {observer} from 'mobx-react-lite'

export interface Posts {
  id: string;
  title: string;
  recommendaMenu: string;
  price: number;
}

interface IProps {
  post: Posts;
}

const PostList = (props: IProps) => {
  const { Board } = useStore();

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
    </li>
  );
};

export default observer(PostList);
