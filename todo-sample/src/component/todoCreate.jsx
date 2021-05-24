import {useDispatch} from 'react-redux'
import React,{useState} from 'react';
import { routeaddTask } from '../actions';


const TodoCreate = () => {
    const [ticket, setTicket] = useState("")
    const [comment, setComment] = useState("")
    const [member, setMember] = useState("")
    const [finish, setFinish] = useState("")
    const [start, setStart] = useState("")
    const createTask=e=>setTicket(e.target.value)
    const createComment=e=>setComment(e.target.value)
    const createMember=e=>setMember(e.target.value)
    const createFinish=e=>setFinish(e.target.value)
    const createStart=e=>setStart(e.target.value)
    const all = {ticket:ticket,
      comment:comment,
      member:member,
      finish:finish,
      start:start
    }
    const dispatch=useDispatch()
    const add = ()=>{
      dispatch(routeaddTask(all))
      setTicket('')
      setComment('')
      setMember('')
      setFinish('')
      setStart('')
    }

  return (
   <div>
     <p>
                チケット名
                 <input
              value={ticket}
             type="text"
               onChange={createTask} /> 
            </p>
            <p>
                詳細
                 <input
              value={comment}
             type="text"
               onChange={createComment} /> 
            </p>
            <p>
                担当者
                 <input
              value={member}
             type="text"
               onChange={createMember} /> 
            </p>
            <p>
                期限
                 <input
              value={finish}
             type="date"
               onChange={createFinish} /> 
            </p>
            <p>
                開始日
                 <input
              value={start}
             type="date"
               onChange={createStart} /> 
            </p>     
            <button onClick={add}>登録</button>
   </div>
  )
};
export default TodoCreate;