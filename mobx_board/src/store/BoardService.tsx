const postsUrl = "http://localhost:4000/posts"

// POSTS 타입 (내보내기)
export const enum postType {
  ID = "number",
  TITLE= "string",
  RECOMMANDAMENU= "string",
  PRICE= "number"
}

// HTTP 구축하는 서비스
class BoardService {
  // 읽기 READ
  get = async (params:postType) => {
    const options = {
      method: "GET"
    }   
    const request = new Request(postsUrl + "?" + params, options);
    const res = await fetch(request);
    console.log('res--->', res)
    return res.json()
  }

  // 작성하기 CREATE
  post = async(params:postType) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const options =  {
      method: "POST",
      headers,
      body: JSON.stringify(params)
    }
    const request = new Request(postsUrl, options)
    const res = await fetch(request)
    return res;
  }
  
  // 수정하기 UPDATE
  put = async (params: postType) => {
    const headers = new Headers()
    headers.append("Content-Type", "application/json");

    const options = {
      method: "PUT",
      headers,
      body: JSON.stringify(params)
    }
    const request = new Request(postsUrl, options)
    const res = await fetch(request)
    return res;
  }

  // 삭제하기 DELETE (동일한 id값은 제거한다.)
  delete = async(id:postType) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const options = {
      method: "DELETE",
      headers,      
    }
    const request = new Request(postsUrl + "/" + id, options)
    const res = await fetch(request)
    return res; 
  }
}

export default new BoardService();
