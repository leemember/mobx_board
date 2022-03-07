import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../components/Common/Button";
import Header from "../components/Header";
import PostUpdate from "../components/PostUpdate";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Posts } from "../components/PostList";

const Details = () => {
  let { id } = useParams();
  const Navigate = useNavigate();
  const [post, setPost] = useState<Posts | null>(null);
  const [edit, setEdit] = useState<boolean>(false);
  const postInfo = post;

  // 뒤로가기
  const handleBack = () => {
    Navigate("/");
  };

  // 수정하기
  const handleUpdate = () => {
    setEdit(!edit);
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
          text3="등록하기"
          goLinkTo={handleUpdate}
          goBack={handleBack}
        />

        {edit ? (
          <PostUpdate
            foodCon={postInfo?.title}
            menuCon={postInfo?.recommendaMenu}
            priceCon={postInfo?.price}
          />
        ) : (
          <section className="postView">
            <div>
              <h3>🏘 식당명</h3>
              <p>{postInfo?.title}</p>
            </div>

            <div>
              <h3>🍽 추천메뉴</h3>
              <p>{postInfo?.recommendaMenu}</p>
            </div>

            <div>
              <h3>💳 가격</h3>
              <p>{postInfo?.price}</p>
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default Details;
