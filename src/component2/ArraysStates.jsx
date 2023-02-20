import { useState } from "react";

export default function ArraysStates() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const AddValues = () => {
    // numbers.push(9);
    setNumbers([...numbers,9]);
  };
  return (
    <div>
      <h1>Arrays State</h1>
      <div>array value :{numbers}</div>
      <button onClick={AddValues}>AddValues</button>
    </div>
  );
}
