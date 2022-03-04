import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../components/Common/Button";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useStore from "../useStore";
import { Posts } from "../components/PostList";

const Details = () => {
  let { id } = useParams();
  const { Board } = useStore();
  const Navigate = useNavigate();
  const [post, setPost] = useState<{}>({});

  const handleBack = () => {
    Navigate("/");
  };

  const handleUpdate = () => {
    Navigate("/update");
  };

  // api 렌더링
  useEffect(() => {
    setPost(Board.setPost(id));
  }, []);

  return (
    <main>
      <Header text="강남 맛집 투어" />
      <div className="board">
        <Button
          cName="boardBtn"
          text1="목록보기"
          text2="수정하기"
          goLinkTo={handleUpdate}
          goBack={handleBack}
        />
        {id}
        <ul className="posts">
          <li>
            {Board.posts.map((item) => {
              return <div>{item.title}</div>;
            })}
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Details;
