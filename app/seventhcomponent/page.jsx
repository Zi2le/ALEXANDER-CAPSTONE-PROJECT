import React from 'react'
import Link from 'next/link'
const eda = () => {
  return (
   <section className='h-screen flex items-center justify-center '>
    <div className='flex flex-col justify-center items-center w-[69%] h-[55%]  bg-gradient-to-r from-[#1C3D5B] hover:from-[#2F3349]  m-[auto]'>
        <div className='flex flex-col justify-center items-center '>
            <p className='text-center text-4xl text-[white] '>An enterprise template to ramp </p>
            <span className=' text-3xl mt-2 text-[white] '>up your company website</span>
        </div>
        <div className='flex justify-center items-center mt-20'>
            <input type="email" name="em" id="em" placeholder='Your email address' className='bg-[ #FFFFFF] rounded-3xl px-6 py-2 outline-none shadow-md placeholder:text-[black]' />
          <Link href='/fservice'>  <button className='border px-5 bg-[#65E4A3] ml-3 py-2 rounded-3xl hover:bg-slate-500 outline-none shadow-md shadow-slate-800'>Start now</button></Link>
        </div>
    </div>
   </section>
  )
}

export default eda