import { observable } from "mobx";

// 우리가 알고있는 클레스다.
// 우리가 감지할 애를 @observable라고 한다.
class Store {
  @observable
  age: number = 35;

  addAge = () => {
    this.age++;
    console.log(" this.age++;--->", this.age++);
  };
}

export default new Store();
