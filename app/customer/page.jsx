"use client"
import React, {useEffect} from 'react'
import Image from 'next/image'
import img3  from '../customer/phone.jpg'
import img5 from '../customer/callbar.jpg'
import {HiCheckCircle} from "react-icons/hi"
import AOS from 'aos'
import 'aos/dist/aos.css';

const customer = () => {
  useEffect(() =>{
    AOS.init({duration: 2100})
  }, [])
  return (
    <section className='h-screen customersection'>
      <div className=' flex azile '>
        <div className='relative'>
        <Image className='img3 relative grayscale' src={img3} alt='Man on a phone call' width={494} height={506} data-aos="fade-up-left"/>
        <Image className='img5 absolute z-10 rounded-lg ' data-aos="fade-right" src={img5} alt='infographic image' width={251} height={388}/>
        </div>
        <div className='flex flex-col thirddiv items-center' data-aos="fade-up-right">
          <h1 className='text-2xl customerh1 '>We connect our customers <br /> with the best, and help them <br /> keep up-and stay open.</h1>
          <ul className='mt-20'>
            <li className='flex items-center mt-3'> <HiCheckCircle className='mx-5 h-7 w-7 '/>We connect our customers with the best. </li>
            <li className='flex items-center mt-3'> <HiCheckCircle className='mx-5 h-7 w-7 '/>Advisor success customer launch party.</li>
            <li className='flex items-center mt-3'> <HiCheckCircle className='mx-5 h-7 w-7'/>Business-to-consumer long tail.</li>
          </ul>
             <button className='border px-7 py-2 mt-[100px] text-center  bg-slate-600 rounded-3xl outline-none'>Start now</button>
        </div>
        </div>
    </section>
  )
}

export default customer