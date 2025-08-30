import React, { useEffect, useState } from 'react'
import {getAllDoc} from '../../api/ContentApi'
import Button from './Button'
import Share from '../../icons/Share'
import Plus from '../../icons/Plus'
function Home() {
  const [list,setList]=useState<any>(null)
  const [loading,setLoading]=useState<boolean>(true)
  const [error,setError]=useState<string>('')
console.log(list)
  useEffect(()=>{
    const callApi=async()=>{
    const result=await getAllDoc()
    console.log(result.res.data.map((d:any,i:number)=>console.log(d.link)),'shekhar')
    if(result.status===200)
    setList(result.res.data)
  else
    setError(result.error || 'Internal server Error')
  setLoading(false)   
  console.log(error)               
}
    callApi()
  },[])


 if(loading){
  return <div>Loading...</div>
 } 
if(error){
  return <div>Error....</div>
}
  return (
    <div className='w-full bg-white '>
    {/* {list.length>0 && list.map((d:any,i:any)=>{
     { console.log(d,'the boss')}
      return <div>
        <span>{d?.title}</span>
        <span>{d?.type}</span>
        <span>{d?.link}</span>
        <span>{d?.tags?.map((t:any,j:any)=><div>{t}</div>)}</span>
      </div>
    })} */}
   <Button name="Share" color="primary" icon={<Share/>} />
   <Button name="Add Content" color="secondary" icon={<Plus/>} />
    </div>
  )
}

export default Home
