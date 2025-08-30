import React from 'react'
interface ButtonProps{
    icon:React.ReactNode,
    name:string,
    color:'primary'|'secondary'|'danger'
}
function Button({ icon, name, color }: ButtonProps) {
  return (
    <button  className={`
        ${color === 'primary' ? 'bg-[#e0e7ff] text-[#5b54c5]' : ''}
        ${color === 'secondary' ? 'bg-[#5046e3] text-white' : ''}
        ${color === 'danger' ? 'bg-red-600 text-white' : ''}
        h-8 w-[130px] flex justify-center items-center p-5 gap-2 font-semibold text-lg rounded-md
      `}>
      {icon}
      <span>{name}</span> 
    </button>
  )
}
export default Button
