import React, { useReducer } from "react";

export const UsedReducerHook2 = () => {
  const reducerFunction = (initialValue, action) => {
    if (action.type === "add") {
      return initialValue + Number(action.val);
    } else if (action.type === "sub") {
      return initialValue - action.val;
    }
  };
  // let iniValue=100;
  const [number, dispatch] = useReducer(reducerFunction, 100);
  return (
    <>
      <div>UsedReducerHook2</div>
      <div>Number:{number}</div>
      <button onClick={() => dispatch({ type: "add", val: prompt() })}>+</button>
      <button onClick={() => dispatch({ type: "add", val: 50 })}>+50</button>
      <button onClick={() => dispatch({ type: "sub", val: 30 })}>-30</button>
    </>
  );
};
