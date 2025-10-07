import React, { useState } from 'react'
import Button from './Button'
import Share from '../../icons/Share'
import Plus from '../../icons/Plus'
import LogOut from '../../icons/LogOut'
import { toast } from 'react-toastify'

interface PropType{
    handleAdd:()=>void,
    handleShare:()=>void,
    handleLogOut:()=>void
}
function Header({handleAdd,handleShare,handleLogOut}:PropType) {
  return (
    <div className='w-[100%] h-[100px] flex justify-between px-10 items-center shadow-md shadow-gray-300 '>
      <h1 className='text-5xl font-bold'>All Notes</h1>
      <div className='flex gap-4'>
        <Button name='Share' color='primary' icon={<Share />} onClick={handleShare}  />
        <Button name='Add Content' color='secondary' icon={<Plus />} onClick={handleAdd} />
        <Button name='' color='danger' icon={<LogOut />} onClick={()=>{handleLogOut()
          toast.success('logOut successfully')
        }} />
      </div>
    </div>
  )
}

export default Header
