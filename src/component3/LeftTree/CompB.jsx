import React from 'react'
import { useContext } from 'react'
import {NameContext} from '../App3'
export const CompB = () => {
  const NameValue= useContext(NameContext)
  return (
   <>
    <div>CompB</div>
    <div>Name :-{NameValue.name}</div>
    <div>Batch :-{NameValue.batch}</div>
   </>
  )
}
