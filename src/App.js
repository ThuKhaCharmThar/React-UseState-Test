import "./App.css";
import { useMemo, useState } from "react";

function App() {
  let [fruit, setFruit] = useState("Orange");
  let [count, setCount] = useState(0);

  let changeFruit = () => {
    setFruit("Apple");
  };

  let changeCount = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };
  let [num1, setnum1] = useState(0);
  let [num2, setnum2] = useState(0);

  let changeNum1 = () => {
    setnum1((prevNum) => prevNum + 1);
  };
  let changeNum2 = () => {
    setnum2((prevNum) => prevNum + 1);
  };
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 50) i++;
    return num1 % 2 === 0;
  }, [num1]);
  return (
    <div>
      <div className="App">
        <h5>{fruit}</h5>
        <button onClick={changeFruit}>Change Fruit</button>
      </div>
      <div className="App">
        <h5>{count}</h5>
        <button onClick={changeCount}>increase</button>
      </div>
      <div className="App">
        <h5>{num1}{isEven ? "Even" : "Odd"}</h5>
        <button onClick={changeNum1}>ChangeNum1</button>
      </div>
      <div className="App">
        <h5>{num2}</h5>
        <button onClick={changeNum2}>ChangeNum2</button>
      </div>
    </div>
  );
}
export default App;
