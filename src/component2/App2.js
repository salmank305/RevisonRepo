// import React from 'react'
// const printName=()=>{
//   console.log('i am salman')
// }
// export const App2 = () => {
//   return (
//     <div>
//       <h2>basic app version 2</h2>
//       <button onClick={printName}>click</button>
//     </div>
//   )
// }

import React from "react";
import { useState } from "react";
import ArraysStates from "./ArraysStates";
import Counter from "./Counter";
import { UseEffectHook } from "./EffectHook/UseEffectHook";
import { UseEffectHook2 } from "./EffectHook/UseEffectHook2";
import { UseEffectHook3 } from "./EffectHook/UseEffectHook3";
import { FormExample1 } from "./Forms/FormExample1";
import { FormExample2 } from "./Forms/FormExample2";
import SignUpForm from "./Forms/SignUpForm";
import { Namecomponents } from "./Namecomponents";
import { UsedReducerHook } from "./Reducer/UsedReducerHook";
import { UsedReducerHook2 } from "./Reducer/UsedReducerHook2";
import { UsedReducerHook3 } from "./Reducer/UsedReducerHook3";
import ReftypeState from "./ReftypeState";
import UpdateBasedOnPrevState from "./UpdateBasedOnPrevState";

export const App2 = () => {
  const printName = (name) => {
    console.log(`i am ${name}`);
  };

  const [show, setShow] = useState(true);
  return (
    // <div>
    //   <h2>basic app version 2</h2>
    //   <button onClick={()=>printName("salman")}>click</button>
    // </div>

    <>
      {/* <Counter/> */}
      {/* <Namecomponents name="salman"/> */}

      {/* <ReftypeState/> */}

      {/* <ArraysStates /> */}

      {/* <UpdateBasedOnPrevState/> */}

      {/* <FormExample1 /> */}

      {/* <SignUpForm/> */}

      {/* <FormExample2/> */}

      {/* <UseEffectHook/> */}

      {/* <UseEffectHook2/> */}

      {/* {show && <UseEffectHook3/>}
      <button onClick={()=>setShow(false)}>remove UseEffectHook3</button> */}

      {/* <UsedReducerHook /> */}

      {/* <UsedReducerHook2/> */}

      <UsedReducerHook3/>
    </>
  );
};
