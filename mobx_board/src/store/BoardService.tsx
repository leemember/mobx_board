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

  constructor() {
    makeObservable(this, {
      posts: observable,

      addPost: action,
      deletePost: action,

      getStatus:computed
    })
  }

  addPost = async ( title: string, recommendaMenu: string, price: number) => {
    try{
      await axios.post(webApiUrl, {
        id: +Math.random.toString(),
        title: title,
        recommendaMenu: recommendaMenu,
        price: price
      }).then((res) => {
        if(res.status === 200) {
          this.posts.push()
        }
      })
    } catch(err) {
      console.log('실패')
      throw err
    }
  }

  deletePost(id:number){
    try{
      const callDelete = axios.delete(`${webApiUrl}/${id}`)
      console.log(callDelete, "삭제했습니다");
      window.location.replace('/')
    } catch(err) {
      console.log('실패')
      throw err
    }
  }

  get getStatus() {
   return this.posts
  }
}

export const Board = new BoardStore();