import React, { useState } from 'react'
import Button from './Button'
import Share from '../../icons/Share'
import Plus from '../../icons/Plus'
import LogOut from '../../icons/LogOut'

interface PropType{
    handleAdd:()=>void,
    handleShare:()=>void,
    handleLogout:()=>void
}
function Header({handleAdd,handleShare,handleLogout}:PropType) {
  return (
    <div className='w-[100%] h-[100px] flex justify-between px-10 items-center shadow-md shadow-gray-300 '>
      <h1 className='text-5xl font-bold'>All Notes</h1>
      <div className='flex gap-4'>
        <Button name='Share' color='primary' icon={<Share />} onClick={handleShare}  />
        <Button name='Add Content' color='secondary' icon={<Plus />} onClick={handleAdd} />
        <Button name='' color='danger' icon={<LogOut />} onClick={handleLogout} />
      </div>
    </div>
  )
}

export default Header
