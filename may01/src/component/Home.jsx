import React, { useEffect, useState } from 'react'
import UseParamsHook from './UseParamsHook'
import { useNavigate } from 'react-router-dom'

export default function () {
  const [count,setcount] = useState(0)
  const page = useNavigate();
  useEffect(()=>{
    if (count===10)
      page('/Contact')
  },[count])
  return (
    <div> <h2>Home component</h2>
    {/* <UseParamsHook/> */}
    <h1>Count:{count}</h1>
    <button onClick={()=>setcount(count+1)}>Increment</button>
    <button onClick={()=>page('/Contact')}> Move to conyact</button>

    </div>
  )
}
