'use client'
import React, { Fragment, useEffect } from 'react'
import Image from 'next/legacy/image'
import img23 from '../fourthabout/value1.jpg'
import img24 from '../fourthabout/value2.jpg'
import img25 from '../fourthabout/value3.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css';

const fourthabout = () => {
  useEffect(() =>{
    AOS.init({duration: 2000})
  }, [])
  const valueDescription = [ 
    {
        id: 0,
        image: img23,
        head: 'We are commited.',
        page: 'Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. '
    },
    {
        id: 1,
        image: img24,
        head: 'We are responsible.',
        page: 'Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. '
    },
    {
        id: 2,
        image: img25,
        head: 'We aim for progress.',
        page: 'Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. '
    },

] 
const values = valueDescription.map(value => (
   <Fragment key={value.id}>
        <section>
          <div className='flex mt-10'>
            <div className=''>
                <Image src={value.image} alt='figma' placeholder='blur' className='rounded-2xl grayscale'/>
            </div>
            <div className='ml-10'>
                <h1 className='text-3xl '>{value.head}</h1>
                <p className=' text-[18px] mt-3 '>{value.page}</p>
            </div>
            </div>  
        </section>
        </Fragment>
  )) 
  return (
  <section className='h-[auto] w-[80%] bg-[#0A2640] text-[#F1F1F1] flex flex-col items-center justify-evenly m-auto shadow-2xl shadow-[white]'    
  data-aos="fade-left"
  data-aos-offset="300"
  data-aos-easing="ease-in-sine">
    <section className='w-[50%] h-[90%]'>
    <div className='flex flex-col mt-16'>
        <p className='text-[20px]'>Our vaules</p>
        <h2 className='text-5xl mt-5'>Things in we believe</h2>
    </div>
  <section className='mb-12'>
  <p className='text-lg  mt-8'>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. </p>
    {values}
  </section>
  </section>
  </section>
  )
}

export default fourthabout