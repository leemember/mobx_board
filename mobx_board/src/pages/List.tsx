import { useEffect, useState } from "react";
import axios from "axios";
import {Link, useNavigate} from 'react-router-dom'
import Header from '../components/Header'
import Button from '../components/Common/Button'

// 데이터 타입
interface Props {
    id: number;
    title: string;
    recommendaMenu: string;
    price: number;
  }
  
  const List = () => {
    // 데이터 담을 상태
    const [posts, setPosts] = useState<[]>([]);
    const Navigate = useNavigate();
  
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

    const handleCilck = () => {
      Navigate('/write')
    }
  
    return (
      <main>
        <Header text="강남 맛집 투어" />
        <div className="board">
          <Button text="글쓰기" goLink={handleCilck} cName="boardBtn" />

          <ul className="posts">
            {posts.map((post: Props, index:number) => (
              <li key={index} className="post-list">
                  <Link to={`/detail/${post.id}`}>
                    <div className="content">
                      <h3>{post.title}</h3>
                      <p>{post.recommendaMenu}</p>
                      <strong>{post.price} &#65510;</strong>
                    </div>
                  </Link>              
              </li>
            ))}
          </ul>
        </div>
      </main>
    );
  };
export default List