import React from 'react'
import Image from 'next/image'
import img12 from '../fifthcomponent/office3.jpg'
import {IoIosArrowDropdownCircle} from 'react-icons/io'
const page = () => {
  return (
   <section className='h-screen'>
    <div className='w-[1100px] h-[503px] m-auto'>
    <Image src={img12} width={1100} height={403}alt='office view' className='rounded-[24px] w-[100%] h-[503px] im' />
    </div>
    <div className='flex justify-evenly mt-16'>
      <div >
     <p className='w-[40%] text-xl ml-20'>We connect our customers with the best, and help them keep up-and stay open.</p>
      </div>
      <div>
        <ul className='flex flex-col justify-center mr-20'>
          <li className='flex items-center  border-b-2 p-3'>We connect our customers with the best?< IoIosArrowDropdownCircle className='h-6 w-6  ml-[47px]'/></li>
          <li className='flex items-center  border-b-2 p-3'>Android research & development rockstar?<IoIosArrowDropdownCircle className='h-6 w-6 ml-9'/></li>
        </ul>
      </div>
    </div>
   </section>
  )
}

export default page