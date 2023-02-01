import React from "react";

export const MultipleReturn = (props) => {
  if (props.segment === "grocery") {
    return(
        <main>
            <h1>Grocery</h1>
            <h2>Vegitable</h2>
            <h2>Brush</h2>
            <h2>Fruits</h2>
        </main>
    )
  }else{
    return (
        <section>
            <h1>Basic</h1>
            <h3>Mobile</h3>
            <h3>Clothing</h3>
            <h3>TV & Appliances</h3>
            <h3> Electronic</h3>
        </section>
        )
  }
   
  
};
