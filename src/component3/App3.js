import React, { createContext, useState } from "react";
import { LeftParent } from "./LeftTree/LeftParent";
import { RightParent } from "./RightTree/RightParent";
// step 1. create a contest
// const nameContext=React.createContext();
export const NameContext = createContext();

export const App3 = () => {
  // let name = "salman";
  // let role = "student";

  // const userInfo = {
  //   name,
  //   role,
  //   batch: "linux",
  //   city:'nasik'
  // };
  const [userInfo, setUserInfo] = useState({
    // name: "defalut",
    // role: "defalut",
    // batch: "defalut",
    // city: "default",
  });

  const setContextValue = (e) => {
    userInfo[e.target.id] = e.target.value;
   
  };

  const print=(e)=>{
    setUserInfo({ ...userInfo, [e.target.id]: e.target.value });
   
  }
  
  return (
    <div style={{ marginLeft: "16px" }}>
      <h1>App3</h1>
      {/* data passing through props drilling */}

      {/* step2. provid the context with value*/}
      <NameContext.Provider value={userInfo}>
        <RightParent />
        <LeftParent />
      </NameContext.Provider>

      <label>
        NAME:-
        <input
          id="name"
          value={userInfo.name}
          onChange={setContextValue}
        />
      </label>
      <label>
        ROLE:-
        <input
          id="role"
          value={userInfo.role}
          onChange={setContextValue}
        />
      </label>
      <label>
        BATCH:-
        <input
          id="batch"
          value={userInfo.batch}
          onChange={setContextValue}
        />
      </label>
      <label>
        CITY:-
        <input
          id="city"
          value={userInfo.city}
          onChange={setContextValue}
        />
      </label>
      <button onClick={print}>print</button>
    </div>
  );
};
