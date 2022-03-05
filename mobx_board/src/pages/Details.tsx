import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../components/Common/Button";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Posts } from "../components/PostList";

const Details = () => {
  let { id } = useParams();
  const Navigate = useNavigate();
  const [post, setPost] = useState<Posts | null>(null);
  const postInfo = post;

  // 뒤로가기
  const handleBack = () => {
    Navigate("/");
  };

  // 수정하기
  const handleUpdate = () => {
    Navigate("/update");
  };

  // 해당 id 값의 api
  const fetchUsers = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/posts/${id}`);
      setPost(response.data);
    } catch (err) {
      console.log("에러");
      throw err;
    }
  };

  // api 렌더링
  useEffect(() => {
    fetchUsers();
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
        <ul className="postView">
          <li>
            <h3>🏘 가게명</h3>
            <p>{postInfo?.title}</p>
          </li>
          <li>
            <h3>🍽 추천메뉴</h3>
            <p>{postInfo?.recommendaMenu}</p>
          </li>
          <li>
            <h3>💳 가격</h3>
            <p>{postInfo?.price}</p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Details;
