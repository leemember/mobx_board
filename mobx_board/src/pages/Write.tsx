import React, { useCallback, useState } from "react";
import InputBox, { InputType } from "../components/Common/InputBox";
import { useHistory } from "react-router-dom";
import Button from "../components/Common/Button";
import Header from "../components/Header";
import useStore from "../useStore";

const Write = () => {
  const [foodShop, setFoodShop] = useState<string>("");
  const [menu, setMenu] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const history = useHistory();
  const { Board } = useStore();

  const foodText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFoodShop(e.target.value);
    console.log("식당명", e.target.value);
  };

  const menuText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMenu(e.target.value);
    console.log("메뉴", e.target.value);
  };

  const priceNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.valueAsNumber));
    console.log("가격", e.target.valueAsNumber);
  };

  const handleBack = () => {
    history.push("/");
  };

  const onSubmit = useCallback(() => {
    alert("게시글이 등록되었습니다.");
    if (foodShop.length < 2 || menu.length < 2) {
      alert("두 글자 이상 입력해주세요");
    } else {
      Board.setAddPost(foodShop, menu, price);
      history.push("/");
    }
  }, [foodShop, menu, price]);

  return (
    <main>
      <Header text="강남 맛집 등록하기" />
      <div className="board">
        <form>
          <Button
            cName="boardBtn"
            text1="뒤로가기"
            text2="등록하기"
            goBack={handleBack}
            goLinkTo={onSubmit}
          />

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

export default Write;
