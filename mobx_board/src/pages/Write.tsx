import React, { useCallback, useState } from "react";
import useStore from "../useStore";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import InputBox, { InputType } from "../components/Common/InputBox";
import Header from "../components/Common/Header";

const Write = () => {
  const navigate = useNavigate();
  const { Board } = useStore();

  const [foodShop, setFoodShop] = useState<string>("");
  const [menu, setMenu] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  // 식당명
  const foodText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFoodShop(e.target.value);
  };

  // 추천메뉴
  const menuText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMenu(e.target.value);
  };

  // 가격
  const priceNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.valueAsNumber));
  };

  // 목록으로 이동
  const handleBack = () => {
    navigate("/");
  };

  // 등록하기
  const onSubmit = useCallback(() => {
    alert("게시글이 등록되었습니다.");
    if (foodShop.length < 2 || menu.length < 2) {
      alert("두 글자 이상 입력해주세요");
    } else {
      Board.setAddPost(foodShop, menu, price);
      navigate("/");
    }
  }, [foodShop, menu, price]);

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
                text="식당명을 입력하세요"
                type={InputType.TEXT}
                handleChange={foodText}
                value={foodShop}
              />
            </label>

            <label>
              추천메뉴
              <InputBox
                text="추천메뉴를 입력하세요"
                type={InputType.TEXT}
                handleChange={menuText}
                value={menu}
              />
            </label>

            <label>
              가격
              <InputBox
                text="가격을 입력하세요 (숫자만)"
                type={InputType.NUMBER}
                handleChange={priceNumber}
                value={price}
              />
            </label>
          </div>
        </form>
      </div>
    </main>
  );
};

export default observer(Write);
