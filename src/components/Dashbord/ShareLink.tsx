import React from 'react'
import Cross from '../../icons/Cross'
interface PropType{
  handleShare:()=>void
}
function ShareLink({handleShare}:PropType) {
  return (
    <div className='flex justify-center items-center w-full h-screen bg-[#c7e0eb27] '>
     <div className='shadow-2xl shadow-black rounded-2xl bg-white'>
       <div className='flex justify-end' >
        <span className='cursor-pointer' onClick={handleShare}><Cross /></span>
      </div>
      <div className= 'bg-white-500 h-[400px] w-[500px] p-10  flex justify-center flex-col gap-4 '>
        <input type="text" className='h-60 bg-gray-400' />
       <div className='flex justify-center '>
         <button  className='border border-black w-[30%] rounded-md' >Copy</button>
       </div>
      </div>
     </div>
    </div>
  )
}

export default ShareLink
