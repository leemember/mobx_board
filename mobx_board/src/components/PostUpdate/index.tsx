import React, { useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import { Board } from "../../store/BoardService";
import InputBox, { InputType } from "../Common/InputBox";
import { WriteProps } from "../../pages/Write";

interface Props {
  foodCon: string;
  menuCon: string;
  priceCon: number;
  handleUpdate?: () => void;
}

const PostUpdate = ({ foodCon, menuCon, priceCon, handleUpdate }: Props) => {
  let { id = "" } = useParams<{ id: string }>();

  const [formInfo, setFormInfo] = useState<WriteProps>({
    foodShop: foodCon,
    menu: menuCon,
    price: priceCon,
  });

  const handleString = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInfo({
      ...formInfo,
      [e.target.name]: [e.target.value],
    });
  };

  // 수정 내용으로 등록하기
  const updateBtn = useCallback(() => {
    alert("수정 완료하였습니다.");
    handleUpdate && handleUpdate();
    Board.setUpdate(id, formInfo.foodShop, formInfo.menu, formInfo.price);
  }, [id, formInfo.foodShop, formInfo.menu, formInfo.price]);

  return (
    <form>
      <div className="board-input">
        <label>
          식당명
          <InputBox
            text="식당명을 입력하세요"
            type={InputType.TEXT}
            onChange={handleString}
            value={formInfo.foodShop}
            name="foodShop"
          />
        </label>

        <label>
          추천메뉴
          <InputBox
            text="추천메뉴를 입력하세요"
            type={InputType.TEXT}
            onChange={handleString}
            value={formInfo.menu}
            name="menu"
          />
        </label>

        <label>
          가격
          <InputBox
            text="가격을 입력하세요 (숫자만)"
            type={InputType.NUMBER}
            onChange={handleString}
            value={formInfo.price}
            name="price"
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
