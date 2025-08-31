import React from 'react'

function Card({list}:any) {
  return (
    <>
     {list.length>0 && list.map((d:any,i:any)=>{
     { console.log(d,'the boss')}
      return <div>
        <span>{d?.title}</span>
        <span>{d?.type}</span>
        <span>{d?.link}</span>
        <span>{d?.tags?.map((t:any,j:any)=><div>{t}</div>)}</span>
      </div>
    })}
      </>
  )
}

export default Card
