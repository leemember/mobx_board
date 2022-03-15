import React, { useCallback, useState } from "react";
import { Board } from "../../store/BoardService";
import InputBox, { InputType } from "../Common/InputBox";
import { useParams } from "react-router-dom";

interface Props {
  foodCon: string | undefined;
  menuCon: string | undefined;
  priceCon: number | undefined;
  handleUpdate?: () => void;
}

const PostUpdate = ({ foodCon, menuCon, priceCon, handleUpdate }: Props) => {
  let { id = "" } = useParams<{ id: string }>();
  const [foodShop, setFoodShop] = useState<string | undefined | any>(foodCon);
  const [menu, setMenu] = useState<string | undefined | any>(menuCon);
  const [price, setPrice] = useState<number | undefined | any>(priceCon);

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

  // 수정 내용으로 등록하기
  const updateBtn = useCallback(() => {
    alert("수정 완료하였습니다.");
    handleUpdate && handleUpdate();
    Board.setUpdate(id, foodShop, menu, price);
  }, [id, foodShop, menu, price]);

  return (
    <form>
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

      <button type="button" onClick={updateBtn} className="update">
        등록하기
      </button>
    </form>
  );
};

export default PostUpdate;
