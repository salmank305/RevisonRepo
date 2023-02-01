// import React from 'react'
// const printName=()=>{
//   console.log('i am salman')
// }
// export const App2 = () => {
//   return (
//     <div>
//       <h2>basic app version 2</h2>
//       <button onClick={printName}>click</button>
//     </div>
//   )
// }


import React from 'react'
const printName=(name)=>{
  console.log(`i am ${name}`)
}
export const App2 = () => {
  return (
    <div>
      <h2>basic app version 2</h2>
      <button onClick={()=>printName("salman")}>click</button>
    </div>
  )
}