import React, { Fragment } from 'react'
import Image from 'next/image'
import img13 from '../sixthcomponent/digital1.jpg'
import img14 from '../sixthcomponent/digital2.jpg'
import img15 from '../sixthcomponent/digital3.jpg'
import img16 from '../sixthcomponent/hsc1.jpg'
import img17 from '../sixthcomponent/hsc4.jpg'
import img18 from '../sixthcomponent/hsc3.jpg'
const six = () => {
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
        <section className={`${blog.id === 1 ? 'h-[250px]': ''}`} >
            <div>
        <Image src={blog.image} width={310} height={309} alt='digital marketing'    className='w-[310px] h-[309px] rounded-2xl'/>
        </div>
        <div className='mt-5'>
            <span className=''>{blog.title}</span>
            <span className='ml-2 text-[grey] text-[15px]'>{blog.date}</span>
        </div>
        <p className='w-[60%] mt-6'>{blog.head}</p>
        <div className={` ${blog.img.id === 0 ? " active" : ""} flex  ${blog.img.id === 0 ? "active" : "" } mt-8`}>
        <Image src={blog.img.image} alt='best cardiothoracic surgeon' width={36}  height={36} className='w-[36px] h-[36px] rounded-full'/>
        <p className=' ml-4 mt-[3px]'>{blog.img.name}</p>
        </div>
        </section>
        </Fragment>
    ))
  return (
    <section className='h-screen'>
    <div className='flex flex-col items-center'>
    <p className='text-[grey]'>Our Blog</p>
    <h2 className='mt-4 text-2xl '>Value proposition accelerator product  </h2>
    <span className='text-xl'>management venture</span>
    </div>

    <section className='mt-20 chrischain'>
        {blogs}
    </section>
    <button className=' border  rounded-3xl px-4 pt-3 text-center flex items-center justify-center'>Load more</button>
    </section>
  )
}

export default six