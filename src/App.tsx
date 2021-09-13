import React from 'react';
import './App.css';

function App() {
  const [count, setCount] = React.useState<number>(0);
  
  const onIncrease = () => {
  setCount(count+ 1);
  setCount(count+ 1);
  console.log(count);
  }
  const onDecrease = () => {
    setCount(count=> count- 1);
    setCount(count=> count- 1);
      console.log(count);
  }

  
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default App;
