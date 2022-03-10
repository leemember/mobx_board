import axios from "axios";
import { makeObservable, observable, action, computed } from "mobx";


const webApiUrl = "http://localhost:4000/posts";

export interface PostItem {
  id: number;
  title: string;
  recommendaMenu: string;
  price: number;
}

export class BoardStore {
  posts: PostItem[] = [];
  post: PostItem | undefined;

  constructor() {
    makeObservable<object>(this, {
      posts: observable,
      post: observable,

      setAddPost: action,
      setDeletePost: action,
      setPost: action,
      setPostList: action,
      setUpdate: action,

      getPost: computed
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
      console.log("게시물 등록 실패");
      throw err;
    }
  };

  // 수정하기
  setUpdate = async (id: number | undefined | string, title: string, recommendaMenu: string, price: number ) => {
    try {
      await axios.put(`${webApiUrl}/${id}`, {
        id: id,
        title: title,
        recommendaMenu: recommendaMenu,
        price: price,
      })
      .then((res) => {
        if(res.status === 200) {
          console.log("수정하기 완료");
        }
      })
    } catch (err) {
      console.log("게시물 수정 실패");
      throw err;
    }
  };

  // 게시물 삭제
  setDeletePost = async (id: number) => {
    try {
      await axios.delete(`${webApiUrl}/${id}`);      
      return this.posts.filter(v => v.id !== id);
    } catch (err) {
      console.log("에러")
    }
  };


  // 게시물 리스트 불러오기
  setPostList = async () => {
    try {
      const callPostList = (await axios.get(`${webApiUrl}`)).data;
      console.log(callPostList, "postList");      
      return this.posts = callPostList.reverse();
    } catch (err) {
      console.log("실패");
      throw err;
    }
  };

  // 단일 게시물 불러오기
  setPost = async (id: string | number | undefined) => {
    try {
      const callPost = (await axios.get(`${webApiUrl}/${id}`)).data;
      console.log(callPost, "단일 게시물");      
      return this.post = callPost;      
    } catch (err) {
      console.log("실패");
      throw err;
    }
  };


  // 게시물 조회
  get getPost() {
    return this.posts;
  }

  // 게시물 조회
  get getPostDetail() {
    return this.post;
  }
}

export const Board = new BoardStore();
