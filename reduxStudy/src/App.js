import React from 'react';
import logo from './logo.svg';
import './App.css';
import TimelineMain from "./timeline/container/TimelineMain";
import FriendMain from "./friend/container/FriendMain";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FriendMain />
        <TimelineMain />
      </header>
    </div>
  );
}

export default App;
