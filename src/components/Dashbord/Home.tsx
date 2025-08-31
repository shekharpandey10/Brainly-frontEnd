import React, { useEffect, useState } from 'react'
import {getAllDoc} from '../../api/ContentApi'
import Button from './Button'
import Share from '../../icons/Share'
import Plus from '../../icons/Plus'
import Card from './Card'
import Header from './Header'
import NewDocs from './NewDocs'
import ShareLink from './ShareLink'
function Home() {
  const [list,setList]=useState<any>(null)
  const [loading,setLoading]=useState<boolean>(true)
  const [error,setError]=useState<string>('')
  const [open,setOpen]=useState(false)
    const [share,setShare]=useState(false)
    const handleShare=()=>{
        setShare(p=>!p)
    }

    const handleAdd=()=>{
        setOpen(p=>!p)
    }
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
    <div className='w-full bg-[#f9fbfc] '>
   {/* <Card list={list}/> */}
   <Header handleAdd={handleAdd} handleShare={handleShare}/>

   {/* <Card list={list}/> */}
  {open && <NewDocs handleAdd={handleAdd}/>}
  {share && <ShareLink handleShare={handleShare}/>}
    </div>
  )
}

export default Home
