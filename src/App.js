import "./App.css";
import { useState } from 'react'

function App() {
  const[X,setCount]= useState(0)
  const handleChange=(n)=>{

      setCount(X+n)
  }
  return (
    <div className="App">
      <h2 data-testid="counter-value">{X}</h2>
      <button data-testid="counter-decrement-button" disabled={X<=0 ? true : false} onClick={()=>handleChange(-1)}>-</button>
      <button data-testid="counter-increment-button" onClick={()=>handleChange(1)}>+</button>
    </div>
  );
}

export default App;
