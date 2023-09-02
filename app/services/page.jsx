"use client"
import React, { Fragment } from 'react'
import Image from 'next/image'
import img from '../services/first.jpg'
import img1 from '../services/firsthand.jpg'
import img2 from '../services/second2.jpg'
import {FaArrowRight} from 'react-icons/fa'
import Ash from '../ash'
const services = () => {
 const serviceDescription = [
    {
        id: 0,
       image: img,
       name: 'infograpic images',
       heading: 'Cool feature title',
       description:`Learning curve network effects
                    return on investment.`, 
        link: 'Explore Page'
    },
    {
        id: 1, 
       image: img1,
       name: 'infograpic images',
       heading: 'Even cooler features',
       description:`Learning curve network effects
                    return on investment.` ,
       link: 'Explore Page'
    },
    {
        id : 2, 
       image: img2,
       name: 'infograpic images',
       heading: 'Cool feature title',
       description:`Learning curve network effects
                    return on investment.`, 
       link: 'Explore Page'
      
    }
 ]
 const services = serviceDescription.map(service => (
   <Fragment key={service.id}>
    <section>
   <Image className='rounded-lg red im cursor-pointer' src={service.image} alt={service.name} width={300} height={354} placeholder='blur'/>
    <h2 className='my-4 text-xl'> {service.heading}</h2>
    <p className='firstpara'>{service.description}</p>
     <div className='flex mt-2 '><span className='border-b-2 border-b-black flex items-center p-2' >{service.link}<FaArrowRight className='mx-5'/></span></div>
    </section>
    </Fragment>
    ))
  return (
    <Ash>
   < section className='h-screen'>
   <h1 className='w-[100%] h-[144px] text-[30px] flex justify-center items-center center'>Handshake infographics mass market crowdfunding iteration</h1>
    <section className='chrischain' >
        {services}
    </section>
    </section>
    </Ash>
  )
}

export default services