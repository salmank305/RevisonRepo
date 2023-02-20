//  import React, { useState } from 'react'

import { useState } from "react";

function ReftypeState() {
    let user={
        name:"dummy name",
        address:'dummy address ',
        role:'dummy role '
    }

    const [userInfo,setUserInfo]=useState(user)
    const updateName=()=>{
        setUserInfo({
            ...userInfo,
            name:'salman'
        })
    }
    const updateAddress=()=>{
        setUserInfo({
            ...userInfo,
            address:'student'
        })
    }
    const updateRole=()=>{
        setUserInfo({
            ...userInfo,
            role:'nasik'
        })
    }
  return (
    <>
    <h3>User Info</h3>

<div>Name: {userInfo.name}</div>
<div>Address: {userInfo.address}</div>
<div>role: {userInfo.role}</div>

<button onClick={updateName}>update Name</button>
<button onClick={updateAddress}>update Address</button>
<button onClick={updateRole}>update Role</button>
<button onClick={()=>setUserInfo(
    {
        ...userInfo,
        name:"akash",
        address:'jaipur'
    }
)}>update RoleAndAddress</button>
    </>
  )
}

export default ReftypeState



