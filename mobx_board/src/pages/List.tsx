import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useStore from "../useStore";
import { observer } from "mobx-react-lite";
import Header from "../components/Common/Header";
import Pagination from "../../src/components/Pagination";
import PostList, { Posts } from "../components/PostList";
import qs from "querystring";

// 한 페이지당 보여지는 게시물 수
const POSTS_PAGE = 5;

const List = () => {
  const { Board } = useStore();
  const history = useHistory();

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

  // 글쓰기
  const handleWrite = () => {
    history.push("/write");
  };

  const handleCurrentPage = (page: number) => {
    setCurrentPage(page);
    console.log(page);
  };

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
