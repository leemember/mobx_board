import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Common/Button";
import Pagination from "../../src/components/Pagination";
import PostList, { Posts } from "../components/PostList";

// 데이터 타입

const List = () => {
  // 데이터 담을 상태
  const [posts, setPosts] = useState<[]>([]);
  const Navigate = useNavigate();

  // api
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:4000/posts");
      setPosts(response.data);
      console.log("res->", response.data);
    } catch (err) {
      console.log("에러");
      throw err;
    }
  };

  // api 렌더링
  useEffect(() => {
    fetchUsers();
  }, []);

  const handleCilck = () => {
    Navigate("/write");
  };

  return (
    <main>
      <Header text="강남 맛집 투어" />
      <div className="board">
        <Button text="글쓰기" goLink={handleCilck} cName="boardBtn" />

        <ul className="posts">
          {posts.map((post: Posts, index: number) => (
            <PostList post={post} key={index} />
          ))}
        </ul>

        <Pagination />
      </div>
    </main>
  );
};
export default List;
