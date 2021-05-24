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
<p>チケット名：{todos[index].comment}</p>
<p>チケット名：{todos[index].member}</p>
<p>チケット名：{todos[index].finish}</p>
<p>チケット名：{todos[index].start}</p>
    </React.Fragment>
)
}

export default Dis