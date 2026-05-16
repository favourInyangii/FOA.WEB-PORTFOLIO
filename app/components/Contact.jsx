"use client";
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Contact = () => {
  const [result, setResult] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  
  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setResult("Sending....");
    
    const formData = new FormData(event.target);
 formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setResult("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>Connect with me</h4>
      <h2 className='text-center text-5xl font-Ovo'>Get in touch</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.
      </p>
      
      <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
          <input 
            type='text' 
            placeholder='Enter your name' 
            required 
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover dark:text-white' 
            name='name' 
          />
          <input 
            type='email' 
            placeholder='Enter your email' 
            required 
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover dark:text-white' 
            name='email' 
          />
        </div>
        
        <textarea 
          rows='6' 
          placeholder='Enter your message' 
          required 
          className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover dark:text-white mb-6' 
          name='message'
        ></textarea>
        
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
        
        <button 
          type='submit'
          disabled={isLoading}
          className='py-3 px-8 w-max flex items-center justify-center gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 disabled:opacity-50 disabled:cursor-not-allowed'
        >
          Submit now
          <Image src={assets.right_arrow_white} alt='' className='w-4' />
        </button>
        
        {result && (
          <p className={`mt-4 text-center ${result.includes("Successfully") ? "text-green-600" : "text-red-600"}`}>
            {result}
          </p>
        )}
      </form>
    </div>
  )
}

export default Contact