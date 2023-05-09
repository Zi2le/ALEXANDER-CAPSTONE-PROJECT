import React from 'react'
import Link from 'next/link'
import {FaUserAlt} from "react-icons/fa"
import {RiLockPasswordFill} from "react-icons/ri"
import Image from 'next/image'
import img38 from '../tristan/login1.jpg'
import {Cookie} from 'next/font/google'
const dancing_script = Cookie({
  subsets: ['latin'],
  variable:'--xander',
  weight: '400',
 })
const ris ={
  backgroundImage:"url('/ris/login2.jpg')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundColor: " rgba(128, 128, 128, 0.258)",
  backgroundBlendMode: "overlay",
  backgroundAttachment: "fixed",
  zIndex: 1
}
const master= {
  backgroundColor: "white",
  zIndex: 5,
  height:"79%",
  width: "35%",
  margin: "auto",
  top: "50%",
  left: "50%",
  transform:"translate(-50%, -50%)"
} 
const relative = {
  zIndex: 10
}
const absolute = {
  zIndex: 1
}
const tris = () => {
  return (
    <section className='h-screen m-0 grayscale relative' style={ris}>
   <div className='absolute' style={master}>
    <div className='flex flex-col justify-center items-center'>
      <p className={ `${dancing_script.variable} font-sans text-zinc-900  text-center mt-5 text-xl`}>AZILE LOGIN PAGE</p>
     <div className='flex justify-center items-center mt-20'> 
       <Image src={img38} height={45} width={45} alt='xander' className=' rounded-full'/>
       <p className={`${dancing_script.variable} font-sans ml-4`}>Alexander</p>
     </div>
     <div className='flex flex-col justify-center items-center relative mt-20'> 
     <div className='relative'>
     <FaUserAlt className=' absolute left-2 top-[62%] transform -translate-y-1/2 ' /> 
      <input type="text" name="user" id="user" placeholder='Username' className=' mt-5 pl-10 p-4 outline-none shadow-2xl rounded-3xl relative bg-transparent placeholder:text-slate-800 placeholder:shadow-2xl placeholder: shadow-black '/>
      </div>
     <div className='relative mr-3'>
      <RiLockPasswordFill className='absolute left-8 top-[62%] transform -translate-y-1/2 h-5 w-5'/> 
      <input type="password" name="pass" id="pass"  placeholder='   Password' className='relative mt-5 pl-10 p-4   outline-none bg-transparent placeholder:text-slate-800 rounded-3xl shadow-2xl ml-6 placeholder: shadow-black placeholder:shadow-md '/>
      </div>
     <Link href='/'> <button className='border rounded-3xl py-3 px-10 bg-black text-white text-center outline-none mt-20 ' type="submit">Login</button></Link>
     </div>
     <div className='mt-6'>
      <p className='text-center '>Forgot password? <Link href='/login'>Sign up</Link> </p>
      
     </div>
   </div>
   </div>
    </section>
  )
}

export default tris