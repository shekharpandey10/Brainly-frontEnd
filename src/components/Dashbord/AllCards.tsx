import React from 'react'
import Card from './Card'

function AllCards({list}) {
  return (
    <div className='grid grid-cols-2 gap-4 items-stretch p-4'>
      {list && list.map((d:any,i:any)=><Card data={d}/>)}
    </div>
  )
}

export default AllCards
