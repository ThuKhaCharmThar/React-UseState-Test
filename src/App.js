import './App.css';
import { useState } from 'react';

function App() {
  let [fruit,setFruit]=useState('Orange');
  let [count,setCount]=useState(0);
  
  let changeFruit=()=>{
    setFruit('Apple');
  }

  let changeCount=()=>{
    setCount((prevCount)=>prevCount+1);
    setCount((prevCount)=>prevCount+1);
    setCount((prevCount)=>prevCount+1);
  }
  return (
    <div>
      <div className="App">
     <h5>{fruit}</h5>
     <button onClick={changeFruit}>Change Fruit 
     </button>
    </div>
    <div className="App">
     <h5>{count}</h5>
     <button onClick={changeCount}>increase
     </button>
    </div>
    
    </div>
  );
}
export default App;
