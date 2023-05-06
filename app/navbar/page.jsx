"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import img from '../navbar/black.jpg'
import {FaLayerGroup, FaTimes} from  "react-icons/fa"
import Link from 'next/link'
import {Cookie} from 'next/font/google'
const dancing_script = Cookie({
  subsets: ['latin'],
  variable:'--xander',
  weight: '400',
 })
const navbar = () => {
  const [menu, setMenu] = useState(false)
  const xander = () =>{ 
    setMenu(!menu)
  }
  const tired = {
    opacity: 0,
    marginLeft: '20px'
  }
  const xan ={
    transition: 'transform 0.3s ease-in-out',
    transform: menu ? '' : 'translateX(-100%)'
    
  }
  return (
  <>
  <nav className='flex justify-between items-center'>
    <div className='flex items-center  justify-between  ml-3 '>
   <Image className='rounded-full img' src={img} alt='blacklion' width={60} height={20} priority={true} /> 
   <p className={`${dancing_script.variable} font-sans ml-4`}>Alexander</p>
    </div>
     <div className='flex justify-center items-center '>
      
      <ul className={`${menu ? '' : 'opacity-0 '} flex border space-x-20 text-center py-3 px-5 bg-black text-white ${menu ? '' : 'xan'}`} style={xan}>
     <Link href='/product'><li>Product</li></Link>
     <Link href='/fservice'><li>Services</li></Link>
     <Link href='/about'><li>About</li></Link>
     <Link href='/zile'><li><button>Login</button></li></Link>
      </ul>
      <div className='flex'>
        {!menu && (
        <button className={`${dancing_script.variable}font-sans border py-3 px-5 text-white bg-black text-center `} onClick={xander}> Menu</button>)}
        <div className='border py-3 px-5 flex items-center justify-center text-white bg-black ' onClick={xander}>
           { menu ? <FaTimes className='h-6 w-6'/> :  <FaLayerGroup  className='h-5 w-5'/>  }
     </div>
      </div>
     </div>
    
  </nav>
 
  </>
  )
}

export default navbar