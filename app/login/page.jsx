import React from 'react'
import Link from 'next/link'
import {IoFingerPrintOutline} from "react-icons/io5"
import {HiX} from 'react-icons/hi'
const theb = {
  backgroundImage: "url('/ris/login3.jpg')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundColor: " rgba(0, 0, 0, 0.755)",
  backgroundBlendMode: "overlay",
  backgroundAttachment: "fixed",
  zIndex: 1
}
const beth ={
  backgroundColor: "black",
  zIndex: 5,
  height:"79%",
  width: "33%",
  margin: "auto",
  top: "50%",
  left: "50%",
  transform:"translate(-50%, -50%)"
}
const azile = {
  border: "none",
  outline: "none",
  backgroundColor: "transparent",
  borderBottom: "2px solid grey",
  width: "400px"
}
const span ={
  textDecoration:"underline"
}
const Elizabeth = () => {
  return (
   <section className='relative m-0 h-screen grayscale shadow-2xl text-[white]' style={theb}>
    <div className='absolute ' style={beth}>
   <div className='' ><Link href='/' ><HiX className='h-6 w-6 fill-white'/></Link></div>
     <div className='flex flex-col justify-center items-center '>
      <div className='mt-16'>
        <IoFingerPrintOutline className='h-10 w-10' />
      </div>
      <div className='flex flex-col mt-10 items-center justify-center'>
        <label htmlFor="name" className='mt-3 '>Your name</label> 
        <input type="text" name="name" id="name" className=' text-center border-b-2 border-grey' style={azile} /> 
        <label htmlFor="email" className='mt-3'>Email address</label> 
        <input type="email" name="email" id="email" className='mb-3 text-center'  style={azile} /> 
        <label htmlFor="password" className='mt-3'>Password</label>  
        <input type="password" name="password" id="password" required style={azile} className='text-center' />
       <Link href='/'><button type="submit" className='mt-7 py-2 px-5 bg-gradient-r from-[grey] text-center rounded-3xl border'>Sign up</button></Link> 
      </div>
      <div className='  flex flex-col justify-center items-center mt-3'>
        <p className=' w-[65%] text-center pb-2'>
          By creating an account, you are agree and accept to all your <Link href='/mr'><span className=' underline text-[grey]' style={span}>Terms</span></Link>  and <Link href='/mr'> <span className='underline text-[grey]' style={span}> Privacy policy.</span></Link>
        </p>
       </div>
        <div className='flex flex-col justify-center items-center mt-16'> 
        <p className=''>Already have an account <Link href='/tristan'><span className=' text-[grey]' style={span}>Log in.</span> </Link> </p>
      </div>
     </div>
     </div>
   </section>
  )
}

export default Elizabeth

