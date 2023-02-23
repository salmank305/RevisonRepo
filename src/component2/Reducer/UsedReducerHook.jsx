import React, { useReducer } from "react";

export const UsedReducerHook = () => {
  const reducerFunction = (iniValue, action) => {
    console.log("inivalue", iniValue);
    console.log("action", action);
    // if (action === "add") {
    //   return iniValue + 10;
    // } else if (action === "sub") {
    //   return iniValue - 10;
    // }else if (action === "mul10") {
    //   return iniValue * 10;
    // }else if (action === "div20") {
    //   return iniValue / 20;
    // }else{
    //   return iniValue
    // }

    switch (action) {
      case "add":
        return iniValue + 10;
        break;
      case "sub":
        return iniValue - 10;
        break;
      case "mul10":
        return iniValue * 10;
        break;
      case "div20":
        return iniValue / 20;
        break;
      case "root":
        return Math.sqrt(iniValue);;
        break;
      case "squre":
        return iniValue*iniValue ;
        break;
      default:
        return iniValue;
    }
  };
  const initialValue = 200;
  const [number, dispatchNumber] = useReducer(reducerFunction, initialValue);
  return (
    <>
      <div >UsedReducerHook</div>
      <div>number:{number}</div>
      <button onClick={() => dispatchNumber("add")}>UR+</button>
      <button onClick={() => dispatchNumber("sub")}>UR-</button>
      <button onClick={() => dispatchNumber("mul10")}>UR*</button>
      <button onClick={() => dispatchNumber("div20")}>UR/</button>
      <button onClick={() => dispatchNumber("root")}>UR root</button>
      <button onClick={() => dispatchNumber("squre")}>UR sq</button>
    </>
  );
};

// let arr=[10,2,3,4,5,6]
// let res=arr.reduce((initialValue,CurrentValue)=>{
//     console.log('initialValue',initialValue);
//     console.log('CurrentValue',CurrentValue);
//     console.log(' ');
//     return initialValue+CurrentValue;
// })
// console.log(res);
// console.log(' ');
// let arr1=[10,2,3,4,5,6]
// let res1=arr1.reduce((initialValue,CurrentValue)=>{
//     console.log('initialValue',initialValue);
//     console.log('CurrentValue',CurrentValue);
//     console.log(' ');
//     return initialValue+CurrentValue;
// },5)
// console.log(res1);
