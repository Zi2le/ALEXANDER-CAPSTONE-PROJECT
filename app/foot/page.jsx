import React from 'react'
import Image from 'next/legacy/image'
import img19 from '../foot/footerimage.jpg'
const foot = () => {
  return (
    <div className='relative'>
    <Image src={img19} layout='fill' objectFit='cover' quality={100}/>
    </div>
  )
}

export default foot