import axios from "axios";
import React, { useEffect, useState } from "react";

export const UseEffectHook2 = () => {
  const [name, setName] = useState("default");
  const [count, setCount] = useState(0);

const [data1,setData1]=useState([])

  useEffect(() => {
    setCount(count + 1);
  }, []);

  //api call using fetch
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res)=>res.json())
//     .then((data)=>{
//         console.log('getting data');
//         console.log(data);
//         setData1(data)
//     })
//   },[]);


//api call using axios 
useEffect(()=>{
axios.get('https://jsonplaceholder.typicode.com/posts')
.then(res=>{
    console.log(res);
    setData1(res.data)
})
.catch(err=>{
    console.log(err);
})
},[])

  return (
    <>
      <div>UseEffectHook2</div>
      <div>Name:{name}</div>
      <button onClick={() => setName("salman")}>update name</button>
      <div>count:{count}</div>
      {/* <div>
        <ul>
            {
                data1.map(post=>(
                    <li key={post.id}>
                        {post.body}
                    </li>
                ))
            }
        </ul>
      </div> */}
    </>
  );
};
