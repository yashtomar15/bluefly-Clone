import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

export const Sideinfo = () => {
    const state=useSelector((state)=>state)
    console.log(state)
  return (
    <div>sideinfo</div>
  )
}
