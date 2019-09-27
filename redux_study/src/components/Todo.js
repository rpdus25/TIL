import React from 'react';
import { useSelector, useDispatch } from "react-redux";

const Todo = ({ todo, completed, onClick} ) => {
    const dispatch = useDispatch();
  
    return(
    <li>
        {todo}&nbsp;&nbsp;
         <button onClick={onClick}>완료</button>&nbsp;&nbsp;
        <button>삭제</button>&nbsp;&nbsp;
        {completed ? "완료되었음" : "ㄴㄴ"}
    </li>)
}

export default Todo;