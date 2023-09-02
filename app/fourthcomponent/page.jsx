"use client"
import React, { Fragment, useEffect } from 'react'
import {BsFillArrowRightCircleFill,BsFillArrowLeftCircleFill} from 'react-icons/bs'
import Image from 'next/image'
import img9 from '../fourthcomponent/fine1.jpg'
import img10 from '../fourthcomponent/fine2.jpg'
import img11 from '../fourthcomponent/fine3.jpg'
import 'aos/dist/aos.css'
import AOS from 'aos'
const web = () => {
  const center = {
    justifyItems: "center"
  }
  useEffect(() =>{
    AOS.init({duration: 2000})
  }, [])


    const webDescription = [
        { 
         id: 0,
         head: `“Buyer buzz partner 
                 network disruptive 
                 non-disclosure agreement
                 business”`,
          image: img9,
          name: 'Albus Dumbledore',
          position:'Manager @ Howarts'
            
        },
        { 
          id: 1,
          head: `"Learning curve 
                  infrastructure value 
                   proposition advisor 
                   strategy user 
                   experience hypotheses 
                   investor.”`,
          image: img10,
          name: 'Severus Snape',
          position:'Manager @ Slytherin'
          
      },
      { 
         id: 2,
         head: `“Release facebook 
                 responsive web design 
                 business model canvas seed money
                 monetization.”`,
         image: img11,
         name: 'Harry Potter',
        position:'Team Leader @ Gryffindor'
        
    }
    ]
    const webs = webDescription.map(web => (
      <Fragment key={web.id}>
        <section className={`${web.id === 1 ? 'h-[380px] w-[350px]': ''}border bg-[#ffffff] w-[350px] h-[322px] mt-6 rounded-2xl shadow-2xl`}>
     <h2 className='ml-10 w-[270px] text-[24px] mt-5 '>{web.head}</h2>
        <div className={`${web.id === 1 ? 'mt-20': ''} flex mt-11 justify-center items-center `}>
     <Image className='rounded-full img11 shadow-sm ' src={web.image} width={58} height={58} alt='kdrama guys' placeholder='blur'/>
     <div className='flex flex-col'>
     <h5 >{web.name}</h5>
     <h6 className='text-[grey] mt-2'>{web.position}</h6>
     </div>
     </div>
     </section>
      </Fragment>
    ))
  return (
 <section className='h-screen mt-8  '>
  <div className='w-[85%] h-[85%] bg-[#0A2640] m-auto border rounded-2xl'>
<div className='flex justify-between  mt-10 '>
<div>
<h2 className='text-2xl ml-20 text-[white] mt-5'>
An enterprise template to ramp <br /> up your company website
</h2>
</div>
<div className='flex mr-28 mt-9 cursor-pointer'>
<BsFillArrowLeftCircleFill className='h-10 w-10 mr-3 text-white'/> <BsFillArrowRightCircleFill className='h-10 w-10 text-white'/>
</div>
</div>
<section className='grid grid-cols-3 mt-16  gap-1' style={center}>
 {webs} 
</section >
</div>
 </section>
  )
}

export default web