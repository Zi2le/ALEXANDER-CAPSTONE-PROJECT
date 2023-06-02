import React from 'react'
import Link from 'next/link'
const eda = () => {
  return (
   
   <section className='h-screen flex items-center justify-center relative overflow-hidden'>
   
    <div className='flex flex-col justify-center items-center w-[69%] h-[50%]  bg-[#0A2640]  m-[auto] relative z-10 overflow-hidden'>
    <div className='h-[430px] w-[430px] bg-[#1C3D5B] rounded-full absolute bottom-[200px] right-[-10px] -z-10 '></div>
        <div className='flex flex-col justify-center items-center '>
            <p className='text-center text-4xl text-[white] '>An enterprise template to ramp </p>
            <span className=' text-3xl mt-2 text-[white] '>up your company website</span>
        </div>
        <div className='flex justify-center items-center mt-20'>
            <input type="email" name="em" id="em" placeholder='Your email address' className='bg-[ #FFFFFF] rounded-3xl px-6 py-2 outline-none shadow-md placeholder:text-[black]' />
          <Link href='/fservice'>  <button className='border px-5 bg-[#65E4A3] ml-3 py-2 rounded-3xl hover:bg-[#1C3D5B] outline-[none] shadow-md shadow-slate-800'>Start now</button></Link>
        </div>
    </div>
   </section>
  
  )
}

export default eda