'use client'
import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Work = () => {
  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>My portfolio</h4>
      <h2 className='text-center text-5xl font-Ovo'>My latest work</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in both front-end and back-end development.
      </p>
      
      {/* FORCED 4-COLUMN GRID FOR WORK */}
      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '1.25rem',
          marginTop: '2.5rem',
          marginBottom: '2.5rem'
        }}
      >
        {workData.map((project, index) => (
          <div 
            key={index} 
            style={{
              aspectRatio: '1/1',
              backgroundImage: `url(${project.bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '0.5rem',
              position: 'relative',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            className='group hover:-translate-y-1 hover:shadow-[4px_4px_0_rgba(0,0,0,0.8)]'
          >
            <div 
              style={{
                backgroundColor: 'white',
                width: '90%',
                borderRadius: '0.375rem',
                position: 'absolute',
                bottom: '1.25rem',
                left: '50%',
                transform: 'translateX(-50%)',
                padding: '0.75rem 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease'
              }}
              className='group-hover:bottom-7'
            >
              <div>
                <h2 className='font-Ovo font-semibold text-sm'>{project.title}</h2>
                <p className='text-xs text-gray-600 font-Ovo'>{project.description}</p>
              </div>
              <div 
                style={{
                  border: '1px solid black',
                  borderRadius: '9999px',
                  width: '1.75rem',
                  height: '1.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}
                className='group-hover:bg-lime-300 group-hover:shadow-[2px_2px_0_#000]'
              >
                <Image src={assets.send_icon} alt='send icon' className='w-3'/>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <a 
        className='w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-400 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover hover:shadow-[4px_4px_0_#000] hover:-translate-y-1 duration-500 transition-all cursor-pointer' 
        href='#contact'
      >
        Show More 
        <Image src={assets.right_arrow_bold} alt='Right arrow' className='w-4' />
      </a>
    </div>
  )
}

export default Work