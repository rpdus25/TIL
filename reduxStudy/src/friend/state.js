import createItemsLogic from "../common/createItemsLogic";

// friends라는 이름으로 공통 로직을 생성
const { add, remove, edit, reducer } = createItemsLogic("friends");

// 액션타입을 상수 변수로 정의
// const ADD = "friend/ADD";
// const REMOVE = "friend/REMOVE";
// const EDIT = "friend/EDIT";

// 액션 생성자 함수를 정의
// export const addFriend = friend => ({ type: ADD, friend });
// export const removeFriend = friend => ({ type: REMOVE, friend });
// export const editFriend = friend => ({ type: EDIT, friend });

// 액션 생성자 함수를 원하는 이름으로 변경해ㅓ 내보낸다.
export const addFriend = add;
export const removeFriend = remove;
export const editFriend = edit;

// const INITIAL_STATE = { friends: [] };

//친구 데이터 추가, 삭제, 수정하는 리듀서 코드
// const reducer = createReducer(INITIAL_STATE, {
//   [ADD]: (state, action) => state.friends.push(action.friend),
//   [REMOVE]: (state, action) =>
//     (state.friends = state.friends.filter(
//       friend => friend.id !== action.friend.id
//     )),
//   [EDIT]: (state, action) => {
//     const index = state.friends.findIndex(
//       friend => friend.id === action.friend.id
//     );
//     if (index >= 0) {
//       state.friends[index] = action.friend;
//     }
//   }
// });

// 리듀서는 스토어를 생서할 때 필요하기 때문에 외부로 공개한다.
// 리듀서 함수를 그대로 내보낸다.
export default reducer;
