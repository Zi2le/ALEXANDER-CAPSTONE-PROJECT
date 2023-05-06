import React from 'react'
import Image from 'next/image'
import img39 from '../navbar/black.jpg'
const veiao ={
  backgroundImage:"url('/ris/foot.jpg')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundColor:" rgba(0, 0, 0, 0.755)",
  backgroundBlendMode: "overlay",
  backgroundAttachment: "fixed",
  zIndex: 1
}
const ope ={
  backgroundColor: "rgba(128, 128, 128, 0.258)",
  zIndex: 5,
  height:"50%",
  width: "73%",
  margin: "auto",
  top: "50%",
  left: "50%",
  transform:"translate(-42%, -50%)"
}
const swift = {
  justifyItems: "center"
}
const footer = () => {
  return (
    <section className='h-screen grayscale relative' style={veiao} >
   <div className='absolute' style={ope}>
    <div className='grid grid-cols-4 grid-rows-1 gap-x-4 mt-20' style={swift}>
      <div className='ml-10'>
      <div className='flex items-center w-[50%]'>
     <Image src={img39} height={20} width={60} alt='xander' className='rounded-full img'/>
     <p className='ml-3 text-[20px]'>Alexander</p>
      </div>
      <div className='mt-10 ml-10'>
        <p className=' text-[16px] text-[#777777]'>Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</p>
        </div>
        <div className='mt-8 ml-10'>
        <p className='text-[#777777]'>All rights reserved.</p>
        </div>
      </div>
      
     
        <div className=''>
          <ul className='text-[grey]'>
            <li className='text-[black] mt-5'>Landings</li>
            <div className='mt-14'>
            <li>Home</li>
            <li className='mt-4'>Products</li>
            <li className='mt-4'>Services</li>
            </div>
          </ul>
      </div>
        <div>
          <ul className='text-[grey] '>
            <li className='text-[black] mt-5'>Company</li>
            <div className='mt-14'>
            <li>Home</li>
            <li className='mt-2'>Careers <button className='border px-7 py-2  text-center bg-[#65E4A3] text-[#0A2640] rounded-3xl'>Hiring!</button></li>
            <li className='mt-2'>Services</li>
            </div>
          </ul>
        </div>
      <div>
          <ul className='text-[grey]'>
            <li className='text-[black] mt-5'>Resources</li>
            <div className='mt-14'>
            <li>Blog</li>
            <li className='mt-4'>Product</li>
            <li className='mt-4'>Services</li>
            </div>
          </ul>
      </div>
    </div>
   </div>
   
   
    </section>
  )
} 

export default footer