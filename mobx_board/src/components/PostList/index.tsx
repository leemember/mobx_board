import { Link } from "react-router-dom";
import { AiTwotoneStar } from "react-icons/ai";

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

export default PostList;
