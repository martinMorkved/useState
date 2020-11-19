import React, {useState} from "react";
import './App.css';

function App() {
const [count , setCount] = useState(0);


function increase() {
  setCount(count + 1);
}
function decrease() {
  setCount(count - 1);
}



  return (
    <div className="App">
      <div className="container">
      <h1>{count}</h1>
      <button onClick= {increase}>+</button>
      <button onClick= {decrease}>-</button>
      </div>


    </div>
  );
}

export default App;
