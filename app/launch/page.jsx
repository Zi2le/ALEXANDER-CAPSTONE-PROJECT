import React from 'react'
import Image from 'next/image'
import img6 from  '../launch/paydonut.jpg'
import img7 from '../launch/thedonut.jpg'
import img8 from '../launch/firstwoman.jpg'
import {FaLeaf} from 'react-icons/fa'
import {FiEye, FiSun} from 'react-icons/fi'
const launch = () => {
  return (
    <section className='h-screen'>
    <div className='flex azile items-center '>
    <div className='flex flex-col '>
      <h2 className='text-2xl mt-8'>We connect our customers <br /> with the best, and help them <br /> keep up-and stay open.</h2>
      <ul>
        <li className='border flex items-center rounded p-2 px-10 shadow-md shadow-black mt-20 bg-[#0A2640] text-[#ffff] ' > <FaLeaf className='mx-3' />We connect our customers with the best.</li>
        <li className='border flex items-center rounded p-2 px-10  shadow-md mt-4'><FiEye className='mx-3'/>Advisor success customer launch party.</li>
        <li className='border flex items-center rounded p-2 px-10  shadow-md mt-6' > <FiSun className='mx-3'/>Business-to-consumer long tail.</li>
      </ul>
    </div>
    <div className='relative'>
    <Image className='img8 relative grayscale' src={img8} width={444} height={523} alt='woman on a call'/>
    <Image className='img7 absolute ' src={img7} width={291} height={388} alt='donut chart'/>
    </div>
    </div>
    </section>
  )
}

export default launch