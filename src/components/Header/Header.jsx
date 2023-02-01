import React from "react";
import style from "./Header.module.css";
import { Login } from "./Login";
import { SearchBar } from "./SearchBar";
export const Header = () => {
  const myStyle = {
backgroundColor:'#3d3d3d',
padding:'0.5rem',
display:'flex',
alignItems:'center',
justifyContent:'space-between'

  };

  return (
    <div style={myStyle}>
      
        <h1 className="text-white">Linux</h1>
   
      <button>test</button>
      <SearchBar />
      <Login/>
    </div>

    //     <div>
    // inline css
    //     <header style={{backgroundColor:"red",padding:"0.5rem",textAlign:"center"}}>
    //       <h1 style={{color:"wheat"}} >Header page</h1>
    //   </header>
    // </div>
  );
};
