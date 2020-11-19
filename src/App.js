import React, {useState} from "react";
import './App.css';

function App() {

const [count, setCount] = useState(0);

function increase() {
  setCount(count+1)
}

function decrease() {
  setCount(count-1);
}


  return (
    <div className="App">
     <h1>{count}</h1>
     <button onClick={increase}>+</button>
     <button onClick={decrease}>-</button>


    </div>



/**function App() {
  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  setInterval(updateTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
} */




  );
}

export default App;
