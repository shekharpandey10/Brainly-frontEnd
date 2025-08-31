import React from 'react'
interface ButtonProps{
    icon:React.ReactNode,
    name:string,
    color:'primary'|'secondary'|'danger'
    onClick:()=>void
}

function Button({ icon, name, color,onClick }: ButtonProps) {
  return (
    <button  className={`
        ${color === 'primary' ? 'bg-[#e0e7ff] text-[#5b54c5]' : ''}
        ${color === 'secondary' ? 'bg-[#5046e3] text-white  hover:shadow-2xl    font-normal w-[150px] ' : ''}
        ${color === 'danger' ? 'bg-red-600 text-white' : ''}
        h-8 w-[130px] flex justify-center items-center p-5 px-5 hover:shadow-2xl hover:duration-150  font-semibold text-lg rounded-md
      `} onClick={onClick}>
      <span>{icon}</span>
      <span className=' pl-4 whitespace-nowrap '>{name}</span> 
    </button>
  )
}
export default Button
