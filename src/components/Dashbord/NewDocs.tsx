import React from 'react'
import Cross from '../../icons/Cross'
interface PropType{
    handleAdd:()=>void
}
function NewDocs({handleAdd}:PropType) {
  return (
    <div className='flex justify-center items-center  pt-10 bg-[#c7e0eb27] ' >
    <div className='shadow-2xl shadow-black rounded-2xl '>
            <div className='flex justify-end p-2' > 
           <span onClick={handleAdd} className='cursor-pointer'> <Cross/></span>
        </div>
    <div className='bg-white-500 h-[400px] w-[500px] p-10  flex justify-center flex-col gap-4 '>
          <input type='text' placeholder='Enter title' className='h-16 bg-gray-300 rounded-xl text-center'/>
      <input type='text' placeholder='Enter Url'className='h-16 bg-gray-300  rounded-xl text-center'/>
      <input type='text' placeholder='Enter type'className='h-16 bg-gray-300 rounded-xl text-center '/>
      <div className='flex justify-center'>
        <button className='bg-[#585cdb] h-8 w-[30%] h-11 rounded-md text-white '>Save</button>
      </div>
    </div>
    </div>
    </div>  
  )
}

export default NewDocs
