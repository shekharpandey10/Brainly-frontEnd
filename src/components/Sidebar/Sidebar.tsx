import React from 'react'
import BrandIcon from '../../BrandIcon'
import TwitterIcon from '../../icons/TwitterIcons'
import YouTubeIcon from '../../icons/YouTubeIcon'
import DocumentIcon from '../../icons/DocumentIcon'
import TagIcon from '../../icons/TagIcon'
import LinksIcon from '../../icons/LinksIcon'
import Footer from '../Footer.tsx/Footer'
const buttonCss='flex justify-center text-2xl gap-3 items-center  cursor-pointer hover:bg-gray-300 p-3 rounded-sm duration-700'
function Sidebar() {
  return (
    <div className='w-[30%] border h-screen shadow-md shadow-black flex flex-col gap-16'>

        <div className='flex text-5xl text-[#4b459f] font-semibold gap-3 font-poppins p-4 '><BrandIcon/> <span>Brainly</span></div>

        <div className='flex justify-start flex-col  pl-1 gap-5'>
            <div className={buttonCss}><TwitterIcon/> <span>Tweets</span></div>
            <div className={buttonCss}><YouTubeIcon/> <span>Youtube</span></div>
            <div className={buttonCss}><DocumentIcon/> <span>Documents</span></div>
            <div className={buttonCss}><LinksIcon/><span>Links</span></div>
            <div className={buttonCss}><TagIcon/> <span>Tags</span></div>
        </div>
        <Footer/>
    </div>
  )
}

export default Sidebar
