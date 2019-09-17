import { createStore, combineReducers } from "redux";
import timelineReducer from "../timeline/state";
import friendReducer from "../friend/state";

const reducer = combineReducers({
  timeline: timelineReducer,
  friend: friendReducer
});

const store = createStore(reducer);
// 스토어 객체를 내보낸다. 스토어 객체를 원하는 곳에서 가져다 사용할 수
export default store;
