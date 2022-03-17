import { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useStore from "../useStore";
import { observer } from "mobx-react-lite";
import Header from "../components/Common/Header";
import PostUpdate from "../components/PostUpdate";
import PostView from "../components/PostView";

const Details = () => {
  let { id = "" } = useParams<{ id: string }>();
  const navigate = useNavigate();  
  const { Board } = useStore();
  const [edit, setEdit] = useState<boolean>(false);

  // 목록으로 이동
  const handleBack = () => {
    navigate("/");
  };

  // 수정하기
  const handleUpdate = useCallback(() => {
    setEdit(!edit);
  }, [edit]);

  // 삭제하기
  const handleDelete = useCallback(() => {
    Board.setDeletePost(id);
    alert("게시물을 삭제 하셨습니다.");
    navigate("/");
  }, [Board, navigate, id]);

  // api 렌더링
  useEffect(() => {
    Board.setPost(id);
  }, [Board, id]);

  // 떠나는 시점에 post 데이터 비워내기
  useEffect(() => {
    return () => {
      Board.setClearPost();
    };
  }, [Board]);

  if (!Board.post) {
    return null;
  }

  return (
    <main>
      <Header text="강남 맛집 투어" />
      <div className="board">
        <button type="button" className="boardBtn blank" onClick={handleBack}>
          목록보기
        </button>
        <button type="button" className="boardBtn" onClick={handleUpdate}>
          {edit ? "취소하기" : "수정하기"}
        </button>

        {edit ? (
          <PostUpdate
            foodCon={Board.post.title}
            menuCon={Board.post.recommendaMenu}
            priceCon={Board.post.price}
            handleUpdate={handleUpdate}
          />
        ) : (
          <>
            <PostView post={Board.post} />
            <button type="button" className="update" onClick={handleDelete}>
              삭제하기
            </button>
          </>
        )}
      </div>
    </main>
  );
};

export default observer(Details);
