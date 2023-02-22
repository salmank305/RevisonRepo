import React, { useReducer, useState } from "react";
export const UsedReducerHook3 = () => {
  const [number1, setNumber1] = useState(0);

  const reducer = (ini, action) => {
    if (action === "add") {
      return ini + 5;
    } else {
        return ini
    }
    
  };

  const addNoTreeTimes=()=>{
    setNumber1((number)=>number+5);
    setNumber1((number)=>number+5);
    setNumber1((number)=>number+5);
  }

  // in useReducer the state is update based on previous state by default
  const addNoTreeTimesForDis=()=>{
    dispatchNumber2("add")
    dispatchNumber2("add")
    dispatchNumber2("add")
  }
  const [number2, dispatchNumber2] = useReducer(reducer, 0);
  return (
    <>
      <div className="app">UsedReducerHook3</div>
      <div>Number1 :{number1}</div>
      <button onClick={() => setNumber1(number1 + 5)}>+no1</button>
      <button onClick={addNoTreeTimes}>+no3</button>
      <br />
      <div>Number2 :{number2}</div>
      <button onClick={() => dispatchNumber2("add")}>+no2</button>
      <button onClick={addNoTreeTimesForDis}>+no 3 time for dis</button>
      <br />
    </>
  );
};
