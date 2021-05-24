import { ADDTASK, REMOVETASK } from "../actions";

const initialState = [
  { title: "概要作成", flg: false },
  { title: "画面設計作成", flg: false },
  { title: "詳細設計作成", flg: false },
  { title: "コーディング", flg: false },
  { title: "テスト", flg: false },
];

const hoge= (state = initialState, action) => {
  switch (action.type) {
    case ADDTASK:
      console.log(action.task);
      return [...state, { title: action.task, flg: false }];
    case REMOVETASK:
      state.splice(action.index, 1);
      return [...state];
    default:
      return state;
  }
};
export default hoge
