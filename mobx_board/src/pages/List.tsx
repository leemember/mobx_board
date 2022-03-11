import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useStore from "../useStore";
import {observer} from 'mobx-react-lite'
import Header from "../components/Header";
import Pagination from "../../src/components/Pagination";
import PostList, { Posts } from "../components/PostList";

const List = () => {
  const { Board } = useStore();
  const history = useHistory();

  // 현재 페이지
  const[ currentPage, setCurrentPage ] = useState<number>(1);
  
  // 전체 페이지에서 등분
  const [postsPerPage] = useState<number>(5);

  // 해당 페이지 첫 번째와 마지막 인덱스 번호
  const indexOfLast:number = currentPage * postsPerPage;
  const indexOfFirst:number = indexOfLast - postsPerPage;
  const currentPosts = Board.getPost.slice(indexOfFirst, indexOfLast)

  // api 렌더링
  useEffect(() => {
    Board.setPostList()
  }, [Board]);

  const handleCilck = () => {
    history.push("/write");
  };

  return (
    <main>
      <Header text="강남 맛집 투어" />
      <div className="board">
        <button type="button" onClick={handleCilck} className="boardBtn">글쓰기</button>

        <ul className="posts">
          {currentPosts.map((post: Posts, index: number) => (
            <PostList post={post} key={index} />
          ))}
        </ul>

        <Pagination postsPerPage={postsPerPage} totalPosts={Board.getPost.length} paginate={setCurrentPage} />
      </div>
    </main>
  );
};
export default observer(List);
