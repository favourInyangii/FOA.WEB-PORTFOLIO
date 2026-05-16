'use client'  // ← Add this at the very top
import { serviceData, assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>What i offer</h4>
      <h2 className='text-center text-5xl font-Ovo'>My services</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        I'm a fullstack web developer based in Abuja, Nigeria with 3 years of experience in companies like lion heart software
      </p>
      
 
      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '1.5rem',
          marginTop: '2.5rem',
          marginBottom: '2.5rem'
        }}
      >
        {serviceData.map(({icon, title, description, link}, index) => (
          <div 
            key={index} 
            style={{
              border: '1px solid #d1d5db',
              borderRadius: '0.5rem',
              padding: '1.5rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            className='hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_rgba(0,0,0,0.8)]'
          >
            <Image src={icon} alt={title} className='w-12 h-12 mb-4' />
            <h3 className='text-lg my-3 text-gray-700 font-Ovo font-semibold'>{title}</h3>
            <p className='text-sm text-gray-600 leading-5 font-Ovo'>{description}</p>
            <a href={link} className='flex items-center gap-2 text-sm mt-4 text-purple-600 hover:gap-3 transition-all'>
              Read More 
              <Image src={assets.right_arrow} alt='arrow' className='w-4' />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services