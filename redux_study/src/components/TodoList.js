import React from "react"
import Todo from "./Todo"
import { useSelector, useDispatch } from "react-redux";
import { toggleCompletedInput } from '../reducer';

const TodoList = () => {
    const reducer = useSelector(state => state);
    const dispatch = useDispatch();

    console.log(reducer);

    return (
    <ul>
       {reducer.list.map((todo, index) => (
            <Todo key={index} todo={todo.text} completed={todo.completed} onClick={() => {
                dispatch(toggleCompletedInput(index))
            }}/>
        ))} 
    </ul>)
}

export default TodoList;