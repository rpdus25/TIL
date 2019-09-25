// 초기화 정의
let id = 0;

const initialState = {
    value: "",
    id:0,
    list: []
  };
  
  export const CHANGE_INPUT = "CHANGE_INPUT";
  export const ADD_INPUT = "ADD_INPUT";
  
  export const changeInput = e => ({
    type: CHANGE_INPUT,
    value: e.target.value
  });

  export const addInput = e => ({
    type: ADD_INPUT,
    value: e.target.value,
    id: ++id
  });
  

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case CHANGE_INPUT:
        return { ...state, value: action.value };
        case ADD_INPUT: 
        return {...state, value: "", id: action.id, list:[...state.list, action.value]}
      default:
        return state;
    }
  };
  
  export default reducer;
  