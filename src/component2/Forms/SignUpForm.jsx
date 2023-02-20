import React, { useState } from "react";
import { FormDetails } from "./FormDetails";

export default function SignUpForm() {
  let userInfo = {
    // name: "",
    // passward: "",
    // mobile: "",
    // address: "",
    // email: "",
  };
  const [user, setUser] = useState(userInfo);
  const [permanentAdress, setPermanenetAddress] = useState();

  const getUserInfo = (e) => {
    // if (e.target.id === "name") {
    //   userInfo.name = e.target.value;
    // } else if (e.target.id === "passward") {
    //   userInfo.passward = e.target.value;
    // } else if (e.target.id === "mobile") {
    //   userInfo.mobile = e.target.value;
    // } else if (e.target.id === "address") {
    //   userInfo.address = e.target.value;
    // } else if (e.target.id === "email") {
    //   userInfo.email = e.target.value;
    // }

    //DINAMICALLY ACCESSING THE PROPERTY OF AN OBJECT

    userInfo[e.target.id] = e.target.value;
    setUser({ ...userInfo });
    // userInfo[e.target.name] = e.target.value;
    // userInfo.name="salman"
    //   userInfo.passward="123"
  };

  const createUser = (e) => {
    e.preventDefault();
    console.log(userInfo);
  };

  /* PASS DATA FROM CHILD TO PARENT */

  const getdataFromChild = (val) => {
    console.log(`get data from child is ${val}`);
  };

  const sameAdd = () => {
    setPermanenetAddress(user.address);
  };
  const sameAdd1 = () => {
    setPermanenetAddress(" ");
  };
  return (
    <>
      <h2>SignUpForm</h2>
      <form onSubmit={createUser}>
        <label htmlFor="name">User Name </label>
        <input type="text" name="name" id="name" onChange={getUserInfo} />
        <br />
        <br />
        <label htmlFor="passward">Passward </label>
        <input
          type="Passward"
          name="passward"
          id="passward"
          onChange={getUserInfo}
        />
        <br />
        <br />
        <label htmlFor="mobile">Mobile </label>
        <input type="number" name="mobile" id="mobile" onChange={getUserInfo} />
        <br />
        <br />
        <label htmlFor="address">Address </label>
        <input type="text" name="address" id="address" onChange={getUserInfo} />
        <br />
        <br />
        <label htmlFor="email">Email </label>
        <input type="email" name="email" id="email" onChange={getUserInfo} />
        <br />
        <br />
        <input type="submit" value="submit" />
      </form>

      {/* permanent add same as  */}
      {/* <label htmlFor="permanentAdd">permanentAdd
      <br />
      <input type="checkbox" name="" id="permanentAdd" onClick={sameAdd}/>
      </label>

      <input value={permanentAdress}/> */}

      <input
        type="radio"
        name="add"
        onChange={(e) => sameAdd(e.target.value)}
      />Yes
      <input
        type="radio"
        name="add"
        onChange={sameAdd1}
      />No
      <input value={permanentAdress} onChange={e=>e.target.value}/>
      {/* <FormDetails name={user.name}/> // only name access in formdetails */}
      <FormDetails userdetails={user} childToPar={getdataFromChild} />
    </>
  );
}
