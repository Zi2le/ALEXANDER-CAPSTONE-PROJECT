"use client"
import React, { Fragment, useEffect } from 'react'
import Image from 'next/image'
import img13 from '../sixthcomponent/digital1.jpg'
import img14 from '../sixthcomponent/digital2.jpg'
import img15 from '../sixthcomponent/digital3.jpg'
import img16 from '../sixthcomponent/hsc1.jpg'
import img17 from '../sixthcomponent/hsc4.jpg'
import img18 from '../sixthcomponent/hsc3.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css';
const six = () => {
    useEffect(() =>{
        AOS.init({duration: 2100})
      }, [])
    const blogDescription = [
        {
            id: 0,
            image: img13,
            title:'Category',
            date: 'November 22, 2021',
            head: `Pitch termsheet 
                   backing  validation  focus 
                        release.`,
            img : {
             id: 0,
            image: img16,
            name: `Richard Bartlett`
            }
        },
        {
            id: 1,
            image: img14,
            title:'Category',
            date: 'November 22, 2021',
            head: 'Seed round direct mailing non-disclosure agreement graphical user interface rockstar.',
            img :{ 
            id: 1,
            image: img17,
            name: `William O'Neill`
            }
        },
        {
            id: 2,
            image: img15,
            title:'Category',
            date: 'November 22, 2021',
            head: 'Beta prototype sales iPad gen-z marketing network effects value proposition',
            img :{
             id: 2,   
             image: img18,
            name: `Gideon Cohen`
            }
        }
        ]  
    const blogs = blogDescription.map(blog =>(
       < Fragment key={blog.id}>
        <section className={`${blog.id === 1 ? 'ml-4': ''}`}  >
            <div className='relative group'> 
        <Image src={blog.image} width={310} height={309} alt='digital marketing' className='w-[310px] h-[309px] rounded-2xl cursor-pointer'data-aos='fade-right' data-aos-duration ={blog.id === 0 ? "1100" : blog.id === 1 ? "1500" : "1700" } data-aos-offset='400' data-aos-easing="ease-in-sine"/>
   <div className={`absolute right-0 left-0 bottom-0 top-0 ${blog.id === 2 ? 'w-[310px] h-[0px] rounded-[16px]': blog.id === 1 ? 'w-[310px] h-[0px] rounded-[16px]':'w-[310px] h-[0px] rounded-[16px]'}  bg-blend-normal bg-black bg-opacity-40 h-0 transition duration-300 ease-in group-hover:h-[100%] cursor-pointer`}></div>
        </div>
        <div>
        <div className='mt-5'>
            <span className=''>{blog.title}</span>
            <span className='ml-2 text-[grey] text-[15px]'>{blog.date}</span>
        </div>
        <p className='w-[60%] mt-6'>{blog.head}</p>
        <div className={` ${blog.img.id === 0 ? " active" : ""} flex  ${blog.img.id === 0 ? "active" : "" } mt-8`}>
        <Image src={blog.img.image} alt='best cardiothoracic surgeon' width={36}  height={36} className='w-[36px] h-[36px] rounded-full'/>
        <p className=' ml-4 mt-[3px]'>{blog.img.name}</p>
        </div>
        </div>
        </section>
        </Fragment>
    ))
  return (
    <section className='h-screen'>
    <div className='flex flex-col items-center'>
    <p className='text-[grey]'>Our Blog</p>
    <h2 className='mt-4 text-[38px] font-normal '>Value proposition accelerator product  </h2>
    <span className='text-[38px]'>management venture</span>
    </div>

    <section className='chrischain ml-28 mt-10'>
        {blogs}
    </section>
    <div className='flex item-center justify-center mt-6'>
    <button className=' border rounded-3xl flex flex-col items-center px-5 py-3 border-black hover:border-none hover:bg-gradient-to-tl from-slate-600 hover:text-white outline-none'>Load more</button>
    </div>
    </section>
  )
}

export default six


