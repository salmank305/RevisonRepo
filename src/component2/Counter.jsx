import React, { useState } from "react";
import "./Counter.css";


const Counter = () => {
  const [count, setCount] = useState(0);
  const [toggal, settoggal] = useState(true);

  return (
    <>
      <div style={{ color: toggal ? "green" : "red" }}>{count}</div>
      <button onClick={() => setCount(count + 1, settoggal(true))}>+</button>
      <button onClick={count > 0 ? () => setCount(count - 1, settoggal(false)) : ""}>-</button>
    </>
  );
};

export default Counter;
