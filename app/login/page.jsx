import React from 'react'
import Link from 'next/link'
import {RiMailLockLine } from "react-icons/ri"
import {MdLockPerson} from "react-icons/md"
import {RiLockPasswordFill, RiTwitterFill} from "react-icons/ri"
import Image from 'next/image'
import xan12 from './_.jpg'
// import {Cookie} from 'next/font/google'
// const dancing_script = Cookie({
//   subsets: ['latin'],
//   variable:'--xander',
//   weight: '400',
//  })
const master ={
  background: "linear-gradient(225deg, hsla(285, 47%, 13%, 1) 12%, hsla(332, 50%, 21%, 1) 34%, hsla(235, 25%, 44%, 1) 48%, hsla(243, 23%, 40%, 1) 48%, hsla(337, 45%, 18%, 1) 82%, hsla(332, 40%, 16%, 1) 94%, hsla(277, 39%, 12%, 1) 95%)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  zIndex: 1,
}

const ris={
  zIndex: 5,
  height:"74%",
  width: "30%",
  top: "50%",
  left: "50%",
  transform:"translate(-50%, -50%)"
}
const azile = {
  border: "none",
  outline: "none",
  backgroundColor: "transparent",
  borderBottom: "2px solid black",
  width: "250px"
}
const Tris = () => {
  return(
  <section className='h-screen relative grayscale' style={master}>
    <div className='absolute   outline-none h-[auto]  shadow-2xl rounded-3xl backdrop-filter backdrop-blur backdrop-brightness-150 flex flex-col items-center' style={ris}>
      <div className='text-[white]  flex flex-col justify-center items-center'>
        <div className='mt-16'>
     <Image className='rounded-full' src={xan12} width={120} height={120} alt='xander'/>
     </div>
     <div className='flex flex-col space-y-9 mt-[72px]'>
     <div className='flex justify-center items-center relative'>
      <RiMailLockLine className='text-black relative left-5'/>
      <input type="email" name="email" id="email" className='pl-8' placeholder='Email ID' style={azile}/>
      </div>
      <div className='flex justify-center items-center relative'>
        <MdLockPerson className='text-black relative left-5'/>
      <input type="password" name="pass" id="pass" className='pl-8' placeholder='Password' style={azile}/>
      </div>
       </div>
       <div className='flex text-[13px] font-extralight space-x-12 mt-5 space-y-1'>
       <div className='flex items-center space-x-2 '>
        <input type="checkbox" name="rem" id="rem" className='h-3 w-3 cursor-pointer'  />
        <label htmlFor="rem" className='cursor-pointer'>Remeber me</label>
       </div>
       <div>
        <p className=' italic  cursor-pointer'>Forgot Password ?</p>
       </div>
       </div>
       <div className=' mt-11 flex justify-center items-center '>
       <Link href={'/'}><button className='border pb-2 px-28 text-center rounded-xl cursor-pointer outline-none  hover:shadow-md hover:shadow-slate-300'>LOGIN</button></Link> 
       </div>
       </div>
    </div>
  </section>
 
  )
}

export default Tris