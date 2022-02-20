import React, { useEffect, useState } from "react";
import axios from "axios";

// 데이터 타입
interface Props {
  id: number;
  title: string;
  body: string;
}

const App = () => {
  // 데이터 담을 상태
  const [posts, setPosts] = useState<[]>([]);

  // api
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:4000/posts");
      setPosts(response.data);
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
    <>
      <h1> 게시판 만들기 </h1>
      <ul>
        {posts.map((post: Props) => (
          <li key={post.id}>
            {post.title} {post.body}
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
