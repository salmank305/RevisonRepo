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
import ArraysStates from "./ArraysStates";
import Counter from "./Counter";
import { UseEffectHook } from "./EffectHook/UseEffectHook";
import { FormExample1 } from "./Forms/FormExample1";
import { FormExample2 } from "./Forms/FormExample2";
import SignUpForm from "./Forms/SignUpForm";
import { Namecomponents } from "./Namecomponents";
import ReftypeState from "./ReftypeState";
import UpdateBasedOnPrevState from "./UpdateBasedOnPrevState";
const printName = (name) => {
  console.log(`i am ${name}`);
};
export const App2 = () => {
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

      <SignUpForm/>

      {/* <FormExample2/> */}

      {/* <UseEffectHook/> */}

    </>
  );
};
