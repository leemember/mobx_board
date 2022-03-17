import React, { useCallback, useState } from "react";
import useStore from "../useStore";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import InputBox, { InputType } from "../components/Common/InputBox";
import Header from "../components/Common/Header";


export interface WriteProps {
  foodShop: string;
  menu: string;
  price: number;
}

const Write = () => {
  const navigate = useNavigate();
  const { Board } = useStore();

  const [formInfo, setFormInfo] = useState<WriteProps>({
    foodShop: "",
    menu: "",
    price: 0,
  });

  // 식당명
  const handleWrite = (e: React.ChangeEvent<HTMLInputElement>) => { 
    setFormInfo({
      ...formInfo,
      [e.target.name]: [e.target.value]
    });
  };

  // 목록으로 이동
  const handleBack = () => {
    navigate("/");
  };

  // 등록하기
  const onSubmit = () => {
    alert("게시글이 등록되었습니다.");

    if (formInfo.foodShop.length > 2 || formInfo.menu.length > 2) {
      alert("두 글자 이상 입력해주세요");
    } else {
      Board.setAddPost(formInfo.foodShop, formInfo.menu, formInfo.price);
      navigate("/");
    }
  }

  return (
    <main>
      <Header text="강남 맛집 등록하기" />
      <div className="board">
        <form>
          <button type="button" className="boardBtn blank" onClick={handleBack}>
            뒤로가기
          </button>
          <button type="button" className="boardBtn" onClick={onSubmit}>
            등록하기
          </button>

          <div className="board-input">
            <label>
              식당명
              <InputBox
                name="foodShop"
                text="식당명을 입력하세요"
                type={InputType.TEXT}
                onChange={handleWrite}
                value={formInfo.foodShop}
              />
            </label>

            <label>
              추천메뉴
              <InputBox
                name="menu"
                text="추천메뉴를 입력하세요"
                type={InputType.TEXT}
                onChange={handleWrite}
                value={formInfo.menu}
              />
            </label>

            <label>
              가격
              <InputBox
                name="price"
                text="가격을 입력하세요 (숫자만)"
                type={InputType.NUMBER}
                onChange={handleWrite}
                value={formInfo.price}
              />
            </label>
          </div>
        </form>
      </div>
    </main>
  );
};

export default observer(Write);
