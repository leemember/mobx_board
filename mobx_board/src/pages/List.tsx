import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../useStore";
import { observer } from "mobx-react-lite";
import Header from "../components/Common/Header";
import Pagination from "../../src/components/Pagination";
import PostList, { Posts } from "../components/PostList";

// 한 페이지당 보여지는 게시물 수
const POSTS_PAGE = 5;

const List = () => {
  const { Board } = useStore();
  const navigate = useNavigate();

  // 현재 페이지
  const [currentPage, setCurrentPage] = useState<number>(1);

  // 해당 페이지 첫 번째와 마지막 인덱스 번호
  const indexOfLast: number = currentPage * POSTS_PAGE;
  const indexOfFirst: number = indexOfLast - POSTS_PAGE;
  const currentPosts = Board.getPost.slice(indexOfFirst, indexOfLast);

  // api 렌더링
  useEffect(() => {
    Board.setPostList();
  }, [Board]);

  // url 쿼리스트링
  useEffect(() => {
    navigate(`/?page=${currentPage}`);
  }, [currentPage]);

  // 글쓰기
  const handleWrite = () => {
    navigate("/write");
  };

  // 현재 페이지 감지
  const handleCurrentPage = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  return (
    <main>
      <Header text="강남 맛집 투어" />
      <div className="board">
        <button type="button" onClick={handleWrite} className="boardBtn">
          글쓰기
        </button>

        <ul className="posts">
          {currentPosts.map((post: Posts, index: number) => (
            <PostList post={post} key={index} />
          ))}
        </ul>

        <Pagination
          postsPerPage={POSTS_PAGE}
          totalPosts={Board.getPost.length}
          onClick={handleCurrentPage}
        />
      </div>
    </main>
  );
};
export default observer(List);
