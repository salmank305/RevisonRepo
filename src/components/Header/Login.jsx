import React, { Fragment } from "react";
import style from "./Login.module.css";
export const Login = (props) => {
  return (
    <Fragment>
      <button className={style.dark}>{props.name}-Login -{props.role}</button>

    </Fragment>


// <>
// <button className={style.dark}>Login</button>
// <div>this is button</div>
// </>


//  <React.Fragment>
// <button className={style.dark}>Login</button>
// <div>this is button</div>
// </React.Fragment> 

  );
};
