import React, {useState} from "react";
import './App.css';

function App() {
const state = useState(123);



const [red, green, blue] = [9, 132, 227];

console.log(state);



function increase() {
  //count ++;  
}



  return (
    <div className="App">
      <div className="container">
      <h1>{state[0]}</h1>
      <button onClick= {increase}>+</button>
      </div>


    </div>
  );
}

export default App;
