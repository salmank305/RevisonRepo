import React from "react";
import { Login } from "../Header/Login";
export const ReactElement = () => {
  return (
    // <div className='element'>
    //   this is a element
    // </div>
    // or

    //1.tag 2.attribute 3.content
    // React.createElement('div',{className:"element"},"this this done behind the jsx")
    // -----------------------------------------------------//
    //or
    // <div className='element' id='test>
    //   <div>this is a element</div>
    // </div>
    // React.createElement('div',{className:"element",id:"test"},
    // React.createElement("div",null,"this this done behind the jsx"))
    //----------------------------------------------------------//

    // <div  className='element' id='test>
    //   <div>
    //     <label>name</label>
    //     <input type='text'/>
    //   </div>
    //  <Login name:'salman',role:"student"/>
    // </div>

    React.createElement("div",{ className: "element", id: "test" },
    React.createElement("div",null,
    React.createElement('label',null,"name"),
    React.createElement('input',{type:"test"}),
    React.createElement(Login,{name:'salman',role:"student"})
      )
    )
  );
};
