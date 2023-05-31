"use client"
import React, {useState } from 'react'
import Image from 'next/image'
import xan7 from '../first/download(1).jpg'
import xan8 from '../first/download(2).jpg'
import xan9 from '../first/download.jpg'
const Fris = () => {
  const [name, setName] = useState('')
  const [wel, setWel] = useState('')
  const [uni, setUni] = useState('')
 
  const azile = {
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
    borderBottom: "2px solid grey",
    width: "150px"
  }
const typ = (e) =>{
    setName(e.target.value)
  }
  function out(color,duration){
    setTimeout(() =>{
    document.body.style.backgroundColor = color
    document.images.style.backgroundColor= 'color'
    setTimeout(() =>{
    document.body.style.backgroundColor = ''
    document.images.style.backgroundColor= ''
     }, duration=10000)
    }, duration=2000)
  }
  const random = () =>{
    const xan6 = [xan7,xan8,xan9]
    const alex = Math.floor(Math.random()* xan6.length)
    return xan6[alex]
  }
   
  const welcome = () =>{
    const xan1 = /xander/i
    const xan2 = /chris/i
    const xan3 = /master|masha/i
    const xan4 = /christopher/i
    const xan5 = /francis|franc/i
  const message = xan1.test(name) ? 'Welcome Master' 
  :xan4.test(name)? `Get the fuck out of here ${name}
 ${out('black')}`
  :xan2.test(name)?`F out ${name}`
  :xan3.test(name)? `Welcome to Xander master masha`
  :xan5.test(name)? `Welcome to Xander Monsieur Francois`
  : `Welcome to Alexander  Xander ${name}!`
  random()
  
  setUni(random())
   setWel(message) 
  } 
  const type = (e) =>{
   setName(e.target.value)
  }
//   import {Cookie} from 'next/font/google'
// const dancing_script = Cookie({
//   subsets: ['latin'],
//   variable:'--xander',
//   weight: '400',
//  })
//  const check = (e) =>{
//       e.key === 'Enter'
//       welcome()
//     }
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       welcome();
//     }, 2000);

//     return () => {
//       clearTimeout(timer);
//     };
//   }, [name]);
//   useEffect(() =>{
//     setTimeout(() =>{
//       welcome()
//     }, 2000)
//     }, [])
  return( 
    <section className='h-screen overflow-hidden grayscale flex flex-col justify-center items-center'>
      {/* <div className='relative flex justify-center z-10 '>
      <div className='w-[150px] h-[100px] absolute rounded-xl bg-black left-[10px] -z-10 skew-x-[60deg] skew-y-[-37deg]' ></div>
      <div className='w-[200px] h-[200px] absolute rounded-xl bg-[red] z-13 left-[6px] bottom-[70px]  -z-10'></div>
      <div className='w-[150px] h-[120px] absolute rounded-xl bg-[grey] right-[60px] top-[-18px]  skew-x-[43deg] skew-y-[-22deg]   -z-10' ></div>
      <div className='w-[150px] h-[120px] absolute rounded-xl bg-[yellow] right-[-65px] top-[110px] skew-x-[43deg] skew-y-[-22deg]  -z-10' ></div>
      </div> */}
<div className='flex  justify-center text-2xl space-x-4 items-center'>
  <p>
    Hello
  </p>
  <input className='border-none mb-3 text-center' type="text" name="greet" id="greet"  value={name} onChange={typ} style={azile}/>
  <div onClick={welcome}>
  <button>Enter</button>
</div>
</div>
<div className='flex items-center text-xl'>
  <Image className='rounded-full w-[100px] h-[100px]' src={uni} height={80} width={80} alt='..'/>
  <p>{wel}</p>
</div>
    </section>
   
 
  )
}

export default Fris