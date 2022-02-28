import {Board} from "./store/BoardService";

const useStore = () => {
  console.log("연결성공");
  return { Board };
};

export default useStore;
