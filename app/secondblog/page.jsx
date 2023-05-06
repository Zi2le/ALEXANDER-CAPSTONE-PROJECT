import React, { Fragment } from 'react'
import Image from 'next/image'
import img32 from '../secondblog/blog.jpg'
import img33 from '../secondblog/blog1.jpg'
import img34 from '../secondblog/blog2.jpg'
import img35 from '../firstblog/ellipse1.jpg'
import img36 from '../firstblog/ellipse2.jpg'
import img37 from '../firstblog/ellipse3.jpg'
const tems = () => {
 const greenDescription = [
 {
    id: 0,
    image: img32,
    title: 'Category',
    date: 'November 22, 2021',
    page: 'Pitch termsheet backing validation focus release.',
    img:{
      id: 0,
      image:img37,
      name:'Chandler Bing'
    }
},
{
id: 1,
image: img33,
title: 'Category',
date: 'November 22, 2021',
page: 'Seed round direct mailing non-disclosure agreement graphical user interface rockstar.',
img:{
  id: 1,
  image:img35,
  name:'Rachel Green'
}
},
{
id: 2,
image: img34,
title: 'Category',
date: 'November 22, 2021',
page: 'Beta prototype sales iPad gen-z marketing network effects value proposition',
img:{
id: 2,
image:img36,
name:'Monica Geller'
}
}
]
const greens = greenDescription.map( green => (
    <Fragment key={green.id}>
     <section className={`${green.id === 1 ? 'ml-10': '' }`}>
     <div>
      <Image src={green.image} alt='figma pictures'/>
     </div>
     <div className='mt-3'>
     <span className='text-[#0A2640]'>{green.title}</span>
      <span className='text-[#777777] ml-2'>{green.date}</span>
     </div>
     <div className='mt-3'>
      <p className='w-[55%]'>{green.page}</p>
     </div>
     <div className={`${green.id === 0 ? 'mt-8' : 'mt-4'} flex items-center`}>
      <div>
        <Image src={green.img.image} alt='figma pictures'/>
      </div>
      <div className='ml-3 mt-2'>{green.img.name}</div>
     </div>
  
     </section>
    </Fragment>
))
  return (
    <section>
    <section className='chrischain ml-28 mt-20'>
      {greens}
    </section>
    <div className='flex items-center justify-center mt-20'>
    <button className='border py-2 px-7 rounded-2xl text-[#0A2640] border-[#0A2640]'>Load more</button>
    </div>
    </section>
  )
}

export default tems