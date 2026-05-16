"use client"
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, {useRef} from 'react'

const Navbar = () => {
  const sideMenuRef = useRef();
  const openMenu = ()=>{
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }
   const closeMenu = ()=>{
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }
  return (
    <>
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color} alt='' className='w-full' loading="eager" />
      </div>
      
      <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 bg-white'>
        <a href='#top'>
          <Image src={assets.logo} alt='logo' className='w-38 cursor-pointer mr-14' />
        </a>

        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white'>
          <li><a className='font-ovo hover:text-purple-600 transition-colors' href='#top'>Home</a></li>
          <li><a className='font-ovo hover:text-purple-600 transition-colors' href='#about'>About me</a></li>
          <li><a className='font-ovo hover:text-purple-600 transition-colors' href='#services'>services</a></li>
          <li><a className='font-ovo hover:text-purple-600 transition-colors' href='#work'>My Work</a></li>
          <li><a className='font-ovo hover:text-purple-600 transition-colors' href='#contact'>Contact me</a></li>
        </ul>
        
        <div className='flex items-center gap-4'>
          <button>
            <Image src={assets.moon_icon} alt='' className='w-6'/>
          </button>
          <a href='#contact' className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo hover:bg-gray-100 transition-colors'>
            Contact 
            <Image src={assets.arrow_icon} alt='arrow' className='w-3' />
          </a>
           <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image src={assets.menu_black} alt='' className='w-6'/>
          </button>
        </div>
        {/*------mobile screen menu------*/}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={assets.close_black} alt='' className='w-5 cursor-pointer' />
          </div>
          <li><a className='font-ovo hover:text-purple-600 transition-colors' onClick={closeMenu} href='#top'>Home</a></li>
          <li><a className='font-ovo hover:text-purple-600 transition-colors'onClick={closeMenu} href='#about'>About me</a></li>
          <li><a className='font-ovo hover:text-purple-600 transition-colors'onClick={closeMenu} href='#services'>services</a></li>
          <li><a className='font-ovo hover:text-purple-600 transition-colors'onClick={closeMenu} href='#work'>My Work</a></li>
          <li><a className='font-ovo hover:text-purple-600 transition-colors'onClick={closeMenu} href='#contact'>Contact me</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar