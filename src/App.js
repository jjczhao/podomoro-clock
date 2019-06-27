import React from 'react';
import './App.css';
import Timer from './Timer';
class App extends React.Component{
  render(){
    return(
      <div id="wrapper" className="text-center">
        <h1 id="title">Pomodoro Clock</h1>
        <Timer />
      </div>
    );
  }
}
export default App;
