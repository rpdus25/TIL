import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeInput, addInput } from "./reducer";

const Input = () => {
  const { value, id } = useSelector(state => state);
  const dispatch = useDispatch();
  const onKeyDown = (e) => {
      if (e.key === "Enter" && value.trim()) {
        console.log(value);
          dispatch(addInput(e));
          
      }
  }

  return (
    <div>
      <input value={value} onChange={(e) => dispatch(changeInput(e))}
      onKeyDown={onKeyDown} />
      <p>input 내용:{value} id: {id}</p>
      <div id="list">
          <h1>내용이 안 넣어진다.</h1>
      </div>
    </div>
  );
};
export default Input;
