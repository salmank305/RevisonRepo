import React, { useEffect } from "react";

export const UseEffectHook3 = () => {
  useEffect(() => {
    let interval = setInterval(() => {
      console.log("running");
    }, 1000);

    let timer=setTimeout(() => {
      console.log("timer");
    }, 2000);

    console.log("running effect v3");
    //this function will run when component gets removed from dom
    return () => {
        // CLEAN UP 
      clearInterval(interval);
      clearTimeout(timer)
      console.log("cleaning up");
    };
  });
  return <div>UseEffectHook3</div>;
};
