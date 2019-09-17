import React from "react";
import store from "../../common/store";

// 필요할 때마다 타임라인 데이터를 가져올 수 있음.
import { getNextTimeline } from "../../common/mockData";
// 타임라인 데이터 추가하기 위한 액션 새엉자 함수를 가져옴.
import { addTimeline } from "../state";
import TimelineList from "../component/TimelineList.js";

class TimelineMain extends React.Component {
  componentDidMount() {
    // 액션이 처리될 때마다 화면을 다시 그리기 위해 subscribe 메서드를 사용
    // forceUpdate 메서드 호출하면 해당 컴포넌트를 무조건 렌더링함
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    // 컴포넌트가 언마운트될 때 subsribe 메서드에 등록한 이벤트 처리 함수를 해제
    this.unsubscribe();
  }

  onAdd = () => {
    const timeline = getNextTimeline();
    // 타임라인 추가 버튼을 누르면 타임라인 추가하는 액션을 발생시킴
    store.dispatch(addTimeline(timeline));
  };

  render() {
    // 렌더 메서드의 호출 시점을 확인하기 위해 로그를 출력
    console.log("TimelineMain render");
    // 스토어에서 타임라인 배열을 가져옴
    const timelines = store.getState().timeline.timelines;
    return (
      <div>
        <button onClick={this.onAdd}>타임라인 추가</button>
        <TimelineList timelines={timelines} />
      </div>
    );
  }
}

export default TimelineMain;
