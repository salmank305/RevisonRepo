import React, { useEffect, useState } from "react";

export const UseEffectHook = () => {
  const[count1,setCount1]=useState(0)
  const[count2,setCount2]=useState(10)
 
   
  const add=()=>{
    setCount1(count1+1);
    // console.log('count from add',count);
  }

  // useEffect(() => {
  //   console.log('count fro use effect',count);
  //   // fetch('https://someApi.com')
  //   setTimeout(()=>{
  //     console.log('from timer');
  //   },0)
  //   console.log("running use effect 1");
  // });

  // useEffect(() => {
  //   // fetch('https://someApi.com')
  //   console.log("running use effect 2");
  // });

  console.log("running use effect");

  useEffect(() => {
    // fetch('https://someApi.com')
    console.log("running use effect 1",count1);
  });

  useEffect(() => {
    // fetch('https://someApi.com')
    console.log("running use effect 2",count1);
  },[]);

  useEffect(() => {
    // fetch('https://someApi.com')
    console.log("running use effect 3",count1);
  },[count1]);

  return (
    <>
      <div>UseEffectHook</div>
      <div>count1 :{count1}</div>
      <button onClick={add}>+</button>

      <div>count2 :{count2}</div>
      <button onClick={()=>setCount2(count2+1)}>+</button>
    </>
  );
};
