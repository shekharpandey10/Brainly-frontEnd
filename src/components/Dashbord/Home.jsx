import React, { useEffect, useState } from 'react'
import {getAllDoc} from '../../api/ContentApi'
import { useSearchParams } from 'react-router-dom'
function Home() {
const [docs,setDocs]=useState(null)

  useEffect(()=>{
    console.log('use effcet is callig ')
   const fetchAllDocs=async()=>{
    const res=await getAllDoc()
    setDocs(res)
   }
   fetchAllDocs()
  },[])
  console.log(docs)

  return (
    <div>
      hello at home
    </div>
  )
}

export default Home
