import React from "react";
import {useSelector,useDispatch} from 'react-redux'
import { routeremoveTask } from "../actions";
import DisButton from './DisButton'

const Home = () => {
const stateTodos=state=>state.routetodo.todos
const todos=useSelector(stateTodos)
const dispatch=useDispatch()
  return (
   <React.Fragment>
    <h1>TODO一覧画面</h1>
    <ol>
     {
       todos.map((todo,index)=>(
         <li key={index}>
         チケット名：{todo.ticket}
         担当者：{todo.member}
         <button onClick={()=>dispatch(routeremoveTask(index))}>削除</button>
         <DisButton index={index}></DisButton>
         </li>
       ))
}
    </ol>
    </React.Fragment>
  );
};

export default Home;
