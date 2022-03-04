import axios from "axios";
import { makeObservable, observable, action, computed } from "mobx";
const webApiUrl = "http://localhost:4000/posts";

interface PostItem {
  id: number;
  title: string;
  recommendaMenu: string;
  price: number;
}

export class BoardStore {
  posts: PostItem[] = [];
  post: {} | undefined;

  constructor() {
    makeObservable<object>(this, {
      posts: observable,
      post: observable,

      setAddPost: action,
      setDeletePost: action,
      setPost: action,
      setPostList: action,

      getPost: computed,
      getPostList: computed,
    });
  }

  // 게시물 추가
  setAddPost = async (title: string, recommendaMenu: string, price: number) => {
    try {
      await axios
        .post(webApiUrl, {
          id: +Math.random.toString(),
          title: title,
          recommendaMenu: recommendaMenu,
          price: price,
        })
        .then((res) => {
          if (res.status === 200) {
            this.posts.push();
          }
        });
    } catch (err) {
      console.log("실패");
      throw err;
    }
  };

  // 게시물 삭제
  setDeletePost = async (id: number) => {
    try {
      const callDelete = await axios.delete(`${webApiUrl}/${id}`);
      console.log(callDelete, "삭제했습니다");
      window.location.replace("/");
    } catch (err) {
      console.log("실패");
      throw err;
    }
  };

  // 게시물 리스트 불러오기
  setPostList = async () => {
    try {
      const callPost = (await axios.get(`${webApiUrl}`)).data;
      console.log(callPost, "postList");
    } catch (err) {
      console.log("실패");
      throw err;
    }
  };

  // 단일 게시물 불러오기
  setPost = async (id: string | number | undefined) => {
    try {
      const callPost = (await axios.get(`${webApiUrl}/${id}`)).data;
      console.log(callPost, "단일게시물 입니다");
    } catch (err) {
      console.log("실패");
      throw err;
    }
  };

  // 단일 게시물 조회
  get getPost() {
    return this.setPost;
  }

  // 게시물 조회해주기
  get getPostList() {
    return this.setPostList;
  }
}

export const Board = new BoardStore();
