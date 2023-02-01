import React from 'react'

export const Footer = (props) => {
  return (
    <footer>
      <p>All copy right reserve</p>
      {props.children}
      <div>BatchName:{props.batchname}</div>
    </footer>
  )
}


// ternary
// const a="role" ? "Salman" : "Student"
// console.log(a)
// false values in javaScript
// false
// ""
// 0
// undefined
// null
// NAN