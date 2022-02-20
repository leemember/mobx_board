# mobx board

#### 목업 서버 설치

```
$npx i json-server
```

#### 목업 서버 열 때는

- src 밖에 있는 data.json에 json 형태의 서버를 만든다.

```
설치
$npx json-server ./data.json --port 4000
```

- 데이터를 불러오기 위한 axios 설치

```
$npx i axios
```

## mobx 주요 특징

- 데코레이터를 적극 활용한다. ( 스토어 객체에 붙이는 데코레이터가 있고`@observable`, 컴포넌트에서 사용하는 데코레이터가 있다. `@observar`)
- ts가 base인 라이브러리이다. ( 당연히 @types/mobx, @types/mobx-react 가 필요 없다. )
- 리덕스와 다르게 단일 스토어를 강제하진 않는다. (= 리덕스보다는 자유로운 편이다.)
- 처음 사용이 리덕스보다 훨씬 쉽다. 데코레이터만 달아주면 바로 변화가 온다.
- 직관적이다.
- tsconfig.json에 ` "experimentalDecorators": true,`를 추가해준다.
- 라이프사이클에 대한 고민 !
