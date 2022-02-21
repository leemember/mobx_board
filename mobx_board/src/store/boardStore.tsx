import { action, observable } from "mobx";

class TodoStore {
  @observable
  public todos: { id: string; text: string }[] = [];

  @action
public addTodo = (text:string):void => {
  console.log(text);
  
}
}

export default new TodoStore();
