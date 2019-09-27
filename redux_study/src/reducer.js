// 초기화 정의
let id = 0;

const initialState = {
    value: "",
    list: []
  };
  
  export const CHANGE_INPUT = "CHANGE_INPUT";
  export const ADD_INPUT = "ADD_INPUT";
  export const Toggle_COMPLETED_INPUT = "Toggle_COMPLETED_INPUT";

  export const changeInput = e => ({
    type: CHANGE_INPUT,
    value: e.target.value
  });

  export const addInput = e => ({
    type: ADD_INPUT,
    value: e.target.value,
    id: id++
  });

  export const toggleCompletedInput = id => ({
    type: Toggle_COMPLETED_INPUT,
    id
  });
  

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case CHANGE_INPUT:
        return { ...state, value: action.value };
      case ADD_INPUT: 
        return {...state, value:"", list:[...state.list, {id:action.id, text:action.value, completed:false}]}
      case Toggle_COMPLETED_INPUT:
        return {...state, value:"", list: state.list.map(todo => todo.id === action.id ? {...todo, completed:!todo.completed} : todo)}
        console.log(state.list.map(todo => todo.id === action.id ? {...todo, completed:!todo.completed} : todo));
        // return state.list.map(todo =>
         
        //   // todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        // )
        return state;
      default:
        return state;
    }
  };
  
  export default reducer;
  