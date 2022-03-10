import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../components/Common/Button";
import Header from "../components/Header";
import PostUpdate from "../components/PostUpdate";
import { useHistory } from "react-router-dom";
import useStore from "../useStore";
import {observer} from 'mobx-react-lite'
import { toJS } from "mobx";
import PostView from "../components/PostView";

const Details = () => {
  let { id } = useParams<{ id: string }>();
  const history = useHistory();
  const [edit, setEdit] = useState<boolean>(false);  
  const { Board } = useStore();

  // 목록으로 가기
  const handleBack = () => {
    history.push("/");
  };

  // 수정하기
  const handleUpdate = () => {
    setEdit(!edit);
  };
  
  // api 렌더링
  useEffect(() => {
    Board.setPost(id)
  }, []);

  // proxy를 이쁘장하게 보여줌
  console.log(toJS(Board.post));

  if (!Board.post) {
    return null;
  }
  
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
            foodCon={Board.post.title}
            menuCon={Board.post.recommendaMenu}
            priceCon={Board.post.price}
          />
        ) : (
          <>
          <PostView post={Board.post} />
          </>
          
        )}
      </div>
    </main>
  );
};

export default observer(Details);
