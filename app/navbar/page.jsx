import React from 'react'
import Image from 'next/image'
import img from '../navbar/black.jpg'
import {FaLayerGroup, FaTimes} from  "react-icons/fa"
import Link from 'next/link'
import {Cookie} from '@next/font/google'
const cookie = Cookie({
  subsets: ['latin'],
  variable:'--xander',
  weight: '400',
 })
const navbar = () => {
  
  return (
  <>
  <nav className='flex justify-between'>
    <div className='flex items-center justify-evenly ml-3'>
   <Image className='rounded-full img' src={img} alt='blacklion' width={60} height={20} /> 
   <p className={`${cookie.variable} font-sans text-[2xl] ml-4`}>Alexander</p>
    </div>
     <div>
      <div>
      Menu
      </div>
      <ul className='flex'>
     <Link href='/'><li>Product</li></Link>
     <Link href='/fservice'><li>Services</li></Link>
     <Link href='/about'><li>About</li></Link>
     <Link href='/login'><li>Login</li></Link>
      </ul>
     </div>
     <div>
      <button><FaLayerGroup/></button>
      <button><FaTimes/></button>
     </div>
  </nav>
  </>
  )
}

export default navbar