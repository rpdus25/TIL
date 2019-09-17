import createReducer from "../common/createReducer";
import createItemsLogic from "../common/createItemsLogic";
import mergeReducers from "../common/mergeReducers";

// timelines 이라는 이름으로 공통 로직을 생성
const { add, remove, edit, reducer: timelineReducer } = createItemsLogic(
  "timelines"
);

// 타임라인의 끝에 도달했을 때 서버에게 요청할 페이지 번호를 관리하는 액션 타입
const INCREASE_NEXT_PAGE = "timeline/INCREASE_NEXT_PAGE";

export const addTimeline = add;
export const removeTimeline = remove;
export const editTimeline = edit;
// 페이지 번호를 증가시키는 액션 생성자 함수.
export const increaseNextPage = () => ({ type: INCREASE_NEXT_PAGE });

//타임라인의 상탯값에는 다음 페이지 번호도 저장된다.
// const INITIAL_STATE = { timelines: [], nextPage: 0 };

const INITIAL_STATE = { nextPage: 0 };

const reducer = createReducer(INITIAL_STATE, {
  // 페이지 번호를 증가시키는 리듀서 코드이다.
  [INCREASE_NEXT_PAGE]: (state, action) => (state.nextPage += 1)
});
const reducers = [reducer, timelineReducer];
export default mergeReducers(reducers);
