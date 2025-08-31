import React from 'react'
import Cross from '../../icons/Cross'
interface PropType {
  handleShare: () => void
}
function ShareLink({ handleShare }: PropType) {
  return (
    <div className='flex justify-center ml-60 mt-20 items-center z-50 fixed inset-0   '>
      <div className=' relative  shadow-2xl shadow-black rounded-2xl bg-white'>
        <div className='flex justify-end'>
          <span className='cursor-pointer' onClick={handleShare}>
            <Cross />
          </span>
        </div>
        <div className='bg-white-500 h-[400px] w-[500px] p-10  flex justify-center flex-col gap-4 '>
          <textarea
            className='h-60 bg-black text-white p-3 
             overflow-x-hidden break-words 
             resize-none leading-6'
            placeholder='Type here...'
          />
          <div className='flex justify-center '>
            <button className='border border-black w-[30%] rounded-md'>
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShareLink
