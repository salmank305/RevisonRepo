// import React from "react";

// export const FormExample1 = () => {

//     let userInfo={
//         username:'',
//         password:''
//     }

//   const getUserName = (event) => {
//     // console.log(event.target.value);
//     userInfo.username=event.target.value
//     // console.log("change");
//   };

//   const getPassword = (event) => {
//     // console.log(event.target.value);
//     userInfo.password=event.target.value

//   };

//   const print = (event) => {
//   event.preventDefault()
//   console.log(userInfo);
//   };
//   return (
//     <>
//       <h2>Login Form</h2>
//       <form>
//         <label htmlFor="username">User Name: </label>
//         <input
//           type="text"
//           name="username"
//           id="username"
//           onChange={getUserName}
//         />
//         <br />
//         <br />
//         <label htmlFor="passward">Passward: </label>
//         <input
//           type="Passward"
//           name="passward"
//           id="passward"
//           onChange={getPassword}
//         />
//         <button onClick={print}>submit</button>
//       </form>
//     </>
//   );
// };

import React, { useState } from "react";

export const FormExample1 = () => {
    let userInfo={
        username:'',
        password:''
    }

    const [user,setUser]=useState(userInfo)
    const getUsername=(e)=>{
    userInfo.username=e.target.value
    setUser({...userInfo})
    }

    const getPassword=(e)=>{
        userInfo.password=e.target.value
        setUser({...userInfo})
        }

     const print=(e)=>{
        e.preventDefault();
        console.log(userInfo)
     }
  return (
    <>
    <form>
    <h1>Login Form</h1>
      <label htmlFor="username">User Name </label>
      <input type="text" name="username" id="username" onChange={getUsername} />
      <br />
      <br />
      <label htmlFor="password">User Password </label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={getPassword}
      />
      <button onClick={print}>submit</button>
    </form>

    <section>
        <h3>Details Enter</h3>
        <div>User Name :{user.username}</div>
        <div>Passward:{user.password}</div>
 
      </section>
    </>
  );
};
