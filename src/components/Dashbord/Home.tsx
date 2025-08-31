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
import { useNavigate } from 'react-router-dom'
import AllCards from './AllCards'
function Home() {
  const [list,setList]=useState<any>(null)
  const [loading,setLoading]=useState<boolean>(true)
  const [error,setError]=useState<string>('')
  const [open,setOpen]=useState(false)
    const [share,setShare]=useState(false)
   const navigate= useNavigate()
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
  else{
    setError(result.error || 'Internal server Error')
    navigate('/login')
  }
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
  <div className={`w-full min-h-screen  flex ${open || share?'bg-[#2f4c5827]':'bg-[#f9fbfc]'} `}>

     <Sidebar/>
  <div className=' w-full min-h-screen'>
     <Header handleAdd={handleAdd}  handleShare={handleShare}/>

   <AllCards list={list}/>
  {open && <NewDocs handleAdd={handleAdd}/>}
  {share &&  <ShareLink handleShare={handleShare}/>}
  </div>
 
    </div>
  )
}

export default Home
