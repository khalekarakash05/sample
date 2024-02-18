import { useState } from "react";
import Chai from "./Chai"

function App() {
  // let counter=5;

  let [counter, setCounter]=useState(5);

  const addValue=()=>{
    counter=counter+1;
    setCounter(counter);
  }

  const decreseValue=()=>{
    counter=counter-1;
    setCounter(counter);
  }

  return (
    <div>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter}</h2>

      <button
      onClick={addValue}
      >Add Value</button>
      <br></br>
      <button 
      onClick={decreseValue}
      >Decrease Value</button>
    </div>
  )
}

export default App
