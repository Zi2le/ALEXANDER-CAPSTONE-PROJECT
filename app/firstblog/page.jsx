import React, { Fragment } from 'react'
import Image from 'next/image'
import img26 from '../firstblog/news1.jpg'
import img27 from '../firstblog/news2.jpg'
import img28 from '../firstblog/new3.jpg'
import img29 from '../firstblog/ellipse1.jpg'
import img30 from '../firstblog/ellipse2.jpg'
import img31 from '../firstblog/ellipse3.jpg'
const firstnew = () => {
  const productDescription = [
    {
        id: 0,
        image: img26,
        title: 'Category',
        date: 'November 22, 2021',
        page: 'Pitch termsheet backing validation focus release.',
        img:{
          id: 0,
          image:img31,
          name:'Chandler Bing'
        }
  },
  {
    id: 1,
    image: img27,
    title: 'Category',
    date: 'November 22, 2021',
    page: 'Seed round direct mailing non-disclosure agreement graphical user interface rockstar.',
    img:{
      id: 1,
      image:img29,
      name:'Rachel Green'
    }
},
{
  id: 2,
  image: img28,
  title: 'Category',
  date: 'November 22, 2021',
  page: 'Beta prototype sales iPad gen-z marketing network effects value proposition',
  img:{
    id: 2,
    image:img30,
    name:'Monica Geller'
  }
}
]
const products = productDescription.map( product => (
  <Fragment key={product.id}>
   <section className={`${product.id === 1 ? 'ml-10': '' }`}>
   <div>
    <Image src={product.image} alt='figma pictures'/>
   </div>
   <div className='mt-3'>
   <span className='text-[#0A2640]'>{product.title}</span>
    <span className='text-[#777777] ml-2'>{product.date}</span>
   </div>
   <div className='mt-3'>
    <p className='w-[55%]'>{product.page}</p>
   </div>
   <div className={`${product.id === 0 ? 'mt-8' : 'mt-4'} flex items-center`}>
    <div>
      <Image src={product.img.image} alt='figma pictures'/>
    </div>
    <div className='ml-3 mt-2'>{product.img.name}</div>
   </div>

   </section>
  </Fragment>
))
  return (
    <section>
    <h1 className='ml-48 text-5xl'>Latest news</h1>
    <section className='chrischain ml-28 mt-10'>
      {products}
    </section>
    </section>
  )
}

export default firstnew