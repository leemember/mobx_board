import { useParams } from "react-router-dom"
import Button from "../components/Common/Button";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import useStore from "../useStore";
import axios from "axios";
import { useState } from "react";

const Details = () => {  
  let { id } = useParams();
  const [view, setView] = useState<[]>([]);
  const Navigate = useNavigate();
  const { Board } = useStore();

  const handleBack = () => {
    Navigate("/");
  };
  
  const handleUpdate = () => {
    Navigate("/update");
  };

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
            {id}
            <ul>
               <li>제목</li>
               <li>메뉴</li>
               <li>가격</li>
            </ul>
        </div>
      </main>
    )
}

export default Details