import React from "react"
import Todo from "./Todo"
import { useSelector } from "react-redux";

const TodoList = () => {
    const reducer = useSelector(state => state);

    console.log(reducer);
    return (
    <ul>
       {reducer.list.map((todo, index) => (
            <Todo key={index} todo={todo}/>
        ))} 
    </ul>)
}

export default TodoList;