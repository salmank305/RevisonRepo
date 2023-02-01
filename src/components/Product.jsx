import React from 'react'

export const Product = () => {
    let product;
    let chosenProduct="clothing";
    if(chosenProduct==="clothing"){
        product=<h3>this clothing product</h3>
    }else if(chosenProduct==="appliances"){
        product=<h3>this appliances product</h3>
    }else{
        product=<h3>nothing</h3>
    }
  return (
    <div>
        <h3>Product</h3>
      <p>{product}</p>
    </div>
  )
}
