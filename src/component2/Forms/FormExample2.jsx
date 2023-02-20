// import { useState } from "react";

import { useEffect, useState } from "react";

// export const FormExample2 = () => {
//   const [user, setUser] = useState({
//     username: "",
//     password: ""
//   });

//   const [show,setShow]=useState(false)
//   const updateUser = (e) => {
//     // if (e.target.id === "username") {
//     //   setUser({ ...user, username: e.target.value });
//     // } else if (e.target.id === "passward") {
//     //   setUser({ ...user, passward: e.target.value });
//     // }

//     // Insted of if else  we write bellow line
//     setUser({ ...user, [e.target.id]: e.target.value });
//   };

//   const print = (e) => {
//     e.preventDefault();
//     console.log(user);
//     setShow(true)
//   };
//   return (
//     <>
//       <form>
//         <h1>Login Form</h1>
//         <label htmlFor="username">User Name </label>
//         <input type="text" name="username" id="username" onChange={updateUser} />
//         <br />
//         <br />
//         <label htmlFor="password">User Password </label>
//         <input
//           type="password"
//           name="password"
//           id="password"
//           onChange={updateUser}
//         />
//         <br />
//         <br />
//         <button onClick={print}>submit</button>
//         <br />
//         <br />
//       </form>

//       {show && (
//         <section>
//           <div>Name:{user.username}</div>
//           <div>Passward:{user.password}</div>
//         </section>
//       )}
//     </>
//   )
// };

export const FormExample2 = () => {
  const [user, setUser] = useState({
    // username: "salman",
    // password: "123"
  });

  const [show, setShow] = useState(false);
  const [cbox, setCbox] = useState({});

  const [che, setChe] = useState(false);

  const updateUser = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };
  const print = (e) => {
    e.preventDefault();
    setShow(true);
  };

  useEffect(() => {
    if (che) {
      setCbox({ ...user });
    } else {
      setCbox({ username: "", password: "" });
    }
  }, [che]);

  return (
    <>
      <form>
        <label htmlFor="username">User Name</label>
        <input
          type="text"
          name="username"
          id="username"
          value={user.username}
          onChange={updateUser}
        />
        <br />
        <br />
        <label htmlFor="password">Password </label>
        <input
          type="text"
          name="password"
          id="password"
          value={user.password}
          onChange={updateUser}
        />
        <br />
        <br />
        <button onClick={print}>submit</button>
      </form>
      {show && (
        <section>
          <div>Name:{user.username}</div>
          <div>password:{user.password}</div>
        </section>
      )}
      {/* 
    <div>Name:  { show && user.username}</div> */}
      /////////////////////////////////////////////////////////////////////////////
      <input type="checkbox" onChange={() => setChe(!che)} />
      <form>
        <label htmlFor="username">User Name</label>
        <input
          type="text"
          name="username"
          id="username"
          value={cbox.username}
        />
        <br />
        <br />
        <label htmlFor="password">Password </label>
        <input
          type="text"
          name="password"
          id="password"
          value={cbox.password}
        />
        <br />
        <br />
        <button onClick={print}>submit</button>
      </form>
      {show && (
        <section>
          <div>Name:{cbox.username}</div>
          <div>Name:{cbox.password}</div>
        </section>
      )}
    </>
  );
};
