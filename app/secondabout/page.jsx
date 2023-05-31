"use client"
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';

const secondabout = () => {
  useEffect(() =>{
    AOS.init({duration: 2000})
  }, [])
  return (
    <section className='h-screen mt-28' >
       <div className='flex flex-col items-center h-[60%] w-[70%] m-auto bg-gradient-to-tl from-slate-600' data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine">
        <div className='flex flex-col justify-center items-center'>
            <p className='text-[white] mt-20'>Our numbers</p>
            <h1 className='text-4xl text-[white] mt-4'>Handshake infographic mass market </h1>
            <h1 className='text-4xl text-[white] mt-2'>crowdfunding iteration.</h1>
            </div>
            <div className='flex justify-around items-center mt-20 text-start'>
            <div className='mr-16'>
            <h1 className='text-6xl'>120m</h1>
            <p>Cool feature title</p>
            </div>
            <div className='mx-10'>
            <h1 className='text-6xl'>10.000</h1>
            <p>Cool feature title</p>
            </div>
            <div className='ml-20'>
            <h1 className='text-6xl'>240</h1>
            <p>Cool feature title</p>
            </div>
            </div>
            </div>
    </section>
  )
}

export default secondabout