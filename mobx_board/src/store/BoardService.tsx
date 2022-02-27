import axios from "axios";
import { observable } from "mobx";
const webApiUrl = "http://localhost:4000";

const boardStore = observable({
  post: [],

  // 리스트 불러오기
  callGet: async (name: string) => {
    const postList = await axios.get(webApiUrl);
    console.log(postList, name);
  },

  // 단일 포스트 불러오기
  callGetPost: async (name: string) => {
    const postView = await axios.get(webApiUrl);
  },

  // 게시글 수정하기
  callPut: async (name: string) => {
    const putList = await axios.put(webApiUrl);
  },

  // 삭제
  callDelete: async (name: string) => {
    const postDelete = await axios.delete(`${webApiUrl}/test/`);
    console.log(postDelete, "삭제했습니다");
  },

  // 글 작성하기
  callPost: async (name: string) => {
    const postWrite = await axios.post(webApiUrl);
  },
});

export default { boardStore };
