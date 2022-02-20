import { observer } from "mobx-react-lite";
import React from "react";
import store from "./store";

// @observer는 엇 바꼈네 하고 감지하는 것.
// function 형은 observer를 이런식으로 @ 없이 사용해준다.
const App = observer(() => {
  return (
    <div className="App">
      {store.age}
      <button type="button" onClick={() => store.addAge()}>
        한 해가 지나갔다.
      </button>
    </div>
  );
});

export default App;
