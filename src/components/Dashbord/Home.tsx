import React, { useEffect, useState } from 'react'
import {getAllDoc} from '../../api/ContentApi'
import Button from './Button'
import Share from '../../icons/Share'
import Plus from '../../icons/Plus'
import Card from './Card'
import Header from './Header'
import NewDocs from './NewDocs'
import ShareLink from './ShareLink'
import Sidebar from '../Sidebar/Sidebar'
function Home() {
  const [list,setList]=useState<any>(null)
  const [loading,setLoading]=useState<boolean>(true)
  const [error,setError]=useState<string>('')
  const [open,setOpen]=useState(false)
    const [share,setShare]=useState(false)
    const handleShare=()=>{
      setOpen(false)
        setShare(p=>!p)
    }

    const handleAdd=()=>{
        setShare(false)
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
    <div className='w-full  min-h-screen bg-[#f9fbfc] flex '>
   {/* <Card list={list}/> */}
     <Sidebar/>
  <div className=' w-full min-h-screen'>
     <Header handleAdd={handleAdd}  handleShare={handleShare}/>

   {/* <Card list={list}/> */}
  {open && <NewDocs handleAdd={handleAdd}/>}
  {share &&  <ShareLink handleShare={handleShare}/>}
  </div>
 
    </div>
  )
}

export default Home
