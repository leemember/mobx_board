# 🍱 강남 맛집 게시판 (mobx)

#### start project

```
$cd mobx_board/mobx_board
$npm i
$npm start
```

#### use Skill & lib

- typescript
- react
- mobx
- axios
- json-server
- material-UI

```
📦 src
 ┣ 📂 components
 ┃ ┃ ┣ 📂 Common
 ┃ ┃ ┃ ┣ 📜 InputBox.tsx 📍 공통 input form
 ┃ ┃ ┣ 📂 Header.tsx 📍 공통 헤더
 ┃ ┃ ┣ 📂 Pagination.tsx 📍 페이징네이션
 ┃ ┃ ┣ 📂 PostDetail.tsx 📍 게시글 내용물
 ┃ ┃ ┣ 📂 PostList.tsx 📍 게시글 목록 리스트 map으로 뿌려 보여지도록
 ┃ ┃ ┣ 📂 PostUpdate.tsx 📍 Detail 페이지에 '수정하기' 버튼 클릭시 입력폼으로 전환
 ┣ 📂 pages
 ┃ ┣ 📜 Details.tsx 📍 게시글 페이지 & 수정하기
 ┃ ┣ 📜 List.tsx 📍 게시글 리스트 & 삭제
 ┃ ┣ 📜 Write.tsx 📍 게시글 작성
 ┣ 📂 store
 ┃ ┣ 📜 BoardService.tsx 📍 게시판 CRUD 상태관리
 ┣ 📜 index.tsx 📍 mobx 연동
 ┣ 📜 useStore.tsx 📍 mobx 상태관리 hook으로 꺼내쓸 수 있도록 root 연결망
 ┣ 📜 App.tsx 📍 라우팅 관리
```

<br>

---

<br>

#### 목업 서버 설치

- `http://localhost:4000` 띄우기

```
$npx i json-server
```

#### 목업 서버 열 때

- src 밖에 있는 data.json에 json 형태의 서버를 만든다.

```
$npm run server
--------------------
package.json에 script부분에 설정
--------------------
$npx json-server ./data.json --port 4000
```

<br>

---

<br>

### Mobx

### 주요 특징

- 데코레이터를 적극 활용한다. ( 스토어 객체에 붙이는 데코레이터가 있고`@observable`, 컴포넌트에서 사용하는 데코레이터가 있다. `@observar`)
- ts가 base인 라이브러리이다. ( 당연히 @types/mobx, @types/mobx-react 가 필요 없다. )
- 리덕스와 다르게 단일 스토어를 강제하진 않는다. (= 리덕스보다는 자유로운 편이다.)
- 처음 사용이 리덕스보다 훨씬 쉽다. 데코레이터만 달아주면 바로 변화가 온다.
- 직관적이다.
- tsconfig.json에 ` "experimentalDecorators": true,`를 추가해준다.
- 라이프사이클에 대한 고민 !

### service

- HTTP 호출을 위한 서비스를 생성한다.
- GET 및 메서드가 포함된다.

### store

- 스토어 생성자를 통해 서비스를 만들고 주입한다.
- 스토어는 컴포넌트에서 사용할 재사용 가능한 로직과 애플리케이션 UI 상태를 유지하는 곳이다.

<br>

---

<br>

## 🏷 Q&A 예상질문

1. 리덕스의 장단점 + (왜 많은 회사에서 리덕스를 아직까지 많이 사용하는지)
2. mobx의 장단점

-

3. 컴포넌트 분리한 기준

- 공통으로 `자주 사용되는` 컴포넌트
- 데이터를 `배열`로 뿌려줘야 될 것들
- 코드량이 무분별하게 길어질 것 같은 것들

<br>

---

<br>

## 🤹 배운것들

> React에서 Mobx 경험기 (Redux와 비교기) <br> https://techblog.woowahan.com/2599/ <br> React에서 Axios를 이용해 API 호출하기 (feat. fetch, ajax) <br> https://velog.io/@devstone/React%EC%97%90%EC%84%9C-Axios%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%B4-API-%ED%98%B8%EC%B6%9C%ED%95%98%EA%B8%B0-feat.-fetch-ajax <br> MobX 간단하게 사용하기 (데코레이터 방식) ---> 개인적으로 이런 방식은 별로인 것 같다.<br> https://velog.io/@i01029407043/MobX-%EA%B0%84%EB%8B%A8%ED%95%98%EA%B2%8C-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-%ED%95%A8%EC%88%98%ED%98%95 <br> 그래서 찾은 react-hook 버전 mobx 사용법<br> https://hyeok999.github.io/2020/04/16/mobx-hooks-market/#a3 <br> api 통신 라이브러리 Axios vs Fetch 비교 <br> https://velog.io/@fdsa09876/How-to-use-Json-and-Axios-with-React <br> json-server CRUD <br> https://poiemaweb.com/json-server <br> 몹액스로 api 관리 <br> https://mono.software/2019/04/16/async-webapi-calls-using-react-with-mobx/ <br> 데이터 Props로 바인딩 <br> https://www.youtube.com/watch?v=lzyXJWg7Tm4 <BR> 페이징네이션 <BR> https://chanhuiseok.github.io/posts/react-13/ <BR> 게시물 수정하기 <br> https://velog.io/@hanblueblue/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B2%8C%EC%8B%9C%ED%8C%90-front-%EB%A6%AC%ED%8E%99%ED%86%A0%EB%A7%81-5-%EA%B2%8C%EC%8B%9C%EA%B8%80-%EC%88%98%EC%A0%95-%EC%9A%94%EC%B2%AD%ED%95%98%EA%B8%B0 > <br> 여러개의 input 상태 관리하기 <br> https://react.vlpt.us/basic/09-multiple-inputs.html <br> mobx 접해보면서 공감갔던 단점들 <br> https://medium.com/@punkyoon/mobx%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EB%A9%B4-%EC%95%88%EB%90%98%EB%8A%94-%EA%B2%BD%EC%9A%B0-a49d24b44580
