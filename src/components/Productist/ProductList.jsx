import React from "react";
import { Mobile } from "../Mobile";

export const ProductList = (props) => {
  const mobileList = [
    {
      company: "apple",
      model: "iphone 14",
      price: 80000,
      color: "black",
      ram: ["5gb", "8gb"],
      Instock: true,
    },
    {
      company: "oppo",
      model: "ip14",
      price: 70000,
      color: "pink",
      ram: ["5gb", "8gb"],
      Instock: false,
    },
    {
      company: "apple",
      model: "iphone 14",
      price: 80000,
      color: "black",
      ram: ["5gb", "8gb"],
      Instock: true,
    },
    {
      company: "apple",
      model: "iphone 14",
      price: 80000,
      color: "black",
      ram: ["5gb", "8gb"],
      Instock: false,
    },
    {
      company: "apple",
      model: "iphone 14",
      price: 80000,
      color: "black",
      ram: ["5gb", "8gb"],
      Instock: true,
    },
    {
      company: "apple",
      model: "iphone 14",
      price: 80000,
      color: "black",
      ram: ["5gb", "8gb"],
      Instock: true,
    },
  ];

  // const dir = props.direction === "col" ? "column" : "row";

  const listStyle = {
    display: "flex",
    flexDirection: props.direction === "col" ? "column" : "row",
    justifyContent: "center",
    flexWrap:'wrap'
  };
// className="main spacing" we can write this also 
  return (<div className={`${props.section} spacing`}>
        <h3 style={{ textAlign: "center", color:'white'}}>Mobile</h3>
    <div style={listStyle}>
      {
      mobileList.map((mobile, no) => {
        return (
          <Mobile
            company={mobile.company}
            model={mobile.model}
            price={mobile.price}
            color={mobile.color}
            rating={mobile.rating}
            inStock={mobile.Instock}
            ram={mobile.ram}
            theme={no%2? "dark" : "light"}
            // theme={ mobile.price<80000? "dark" : "light"}
          />
        );
      })
      }
    </div>
  </div>

  );
};
