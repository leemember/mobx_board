import boardStore from "./store/BoardService";

const useStore = () => {
  console.log("연결성공");
  return { boardStore };
};

export default useStore;
