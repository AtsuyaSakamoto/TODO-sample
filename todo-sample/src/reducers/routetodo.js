import { ROUTEADDTASK, ROUTEREMOVETASK } from "../actions";

// const initialState = [
//   { title: "概要作成", flg: false },
//   { title: "画面設計作成", flg: false },
//   { title: "詳細設計作成", flg: false },
//   { title: "コーディング", flg: false },
//   { title: "テスト", flg: false },
// ];
const initialState={todos:[]}

const hoge= (state = initialState, action) => {
  switch (action.type) {
    case ROUTEADDTASK:
      return {todos:[...state.todos, action.todo]};
    case ROUTEREMOVETASK:
        const newTodos=[...state.todos]
      newTodos.splice(action.index, 1);
      return {todos:newTodos};
    default:
      return state;
  }
};
export default hoge
