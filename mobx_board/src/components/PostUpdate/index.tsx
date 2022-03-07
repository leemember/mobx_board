import React, { useState } from "react";
import InputBox, { InputType } from "../Common/InputBox";

type Props = {
  foodCon: string | undefined;
  menuCon: string | undefined;
  priceCon: number | undefined;
};
const PostUpdate = ({ foodCon, menuCon, priceCon }: Props) => {
  const [foodShop, setFoodShop] = useState<string>("");
  const [menu, setMenu] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

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

  return (
    <form>
      <div className="board-input">
        <label>
          식당명
          <InputBox
            text="식당명을 입력하세요"
            type={InputType.TEXT}
            handleChange={foodText}
            value={foodCon}
          />
        </label>

        <label>
          추천메뉴
          <InputBox
            text="추천메뉴를 입력하세요"
            type={InputType.TEXT}
            handleChange={menuText}
            value={menuCon}
          />
        </label>

        <label>
          가격
          <InputBox
            text="가격을 입력하세요 (숫자만)"
            type={InputType.NUMBER}
            handleChange={priceNumber}
            value={priceCon}
          />
        </label>
      </div>
    </form>
  );
};

export default PostUpdate;
