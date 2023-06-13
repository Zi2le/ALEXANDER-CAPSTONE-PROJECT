import React, { Fragment } from 'react'
import Image from 'next/legacy/image'
import img20 from '../thirdabout/team1.jpg'
import img21 from '../thirdabout/team2.jpg'
import img22 from '../thirdabout/team3.jpg'
const thirdabout = () => {
  const teamDescription = [
  {
    id: 0,
    image:img20 ,
    name: 'Michael Scott',
    post: 'General Manager  ',
  },
  {
    id: 1,
    image:img21 ,
    name: 'Dwight Schrute',
    post: 'General Manager',
  },
  {
    id: 2,
    image: img22,
    name: 'Pam Beetsley',
    post: 'General Manager',
  }
] 
const teams = teamDescription.map(team=> (
    <Fragment key={team.id}>
  <section className='mt-20'>
    <Image src={team.image} alt='team' className='im placeholder:animate-ping' placeholder='blur'/>
    <p className='mt-2 text-xl ml-2'>{team.name}</p>
    <p className='text-[grey] mt-2 ml-2'>{team.post}</p>
  </section>
    </Fragment>
)) 
  return (
  <section className='mb-40'>
    <div className='flex flex-col w-[59%] h-[50%] m-auto'>
        <p className='text-[grey] mb-5'>Our team</p>
        <h1 className='text-3xl mb-5'>The leadership team</h1>
        <p className='text-[#777777] w-[79%]'>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. </p>
    </div>
    <section className='flex justify-evenly'>
        {teams}
    </section>
  </section>
  )
}

export default thirdabout