import React from 'react';
import {useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'

const Dis = ()=>{
    const stateTodos=state=>state.routetodo.todos;
    const todos = useSelector(stateTodos)
    const {index}=useParams()
return(
    <React.Fragment>
<h2>詳細画面</h2>
<p>チケット名：{todos[index].ticket}</p>
<p>詳細：{todos[index].comment}</p>
<p>担当者：{todos[index].member}</p>
<p>期日：{todos[index].finish}</p>
<p>開始日：{todos[index].start}</p>
    </React.Fragment>
)
}

export default Dis