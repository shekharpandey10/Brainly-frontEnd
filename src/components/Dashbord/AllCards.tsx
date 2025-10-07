import React from 'react'
import Card from './Card'

function AllCards({list}:any) {
  console.log(list ,' from the all cards')
    if(list.length<1) return <div className='flex justify-center items-center text-gray-400 h-[500px] select-none'>Docs continer is empty</div>
  return (
    <div className='grid grid-cols-2 gap-4 items-stretch p-4'>
      {list && list.map((d:any,i:any)=><Card data={d}/>)}
    </div>
  )
}

export default AllCards
