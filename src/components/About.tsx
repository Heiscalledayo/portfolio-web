import React from 'react';
import Image from '../assets/Snapchat-55408010.jpg'

const About: React.FC = () => {
  return (
    <div className='text-white grid place-items-center gap-5 text-center mt-4'>
      <div className='rounded-full overflow-hidden w-[100px] h-[100px]'>
        <img src={Image} alt="An image of Ayomide Oduoye" className='w-full h-full object-cover' />
      </div>
      <h1 className='font-semibold text-[23px]' style={{fontFamily: 'Cascadia Mono'}}>Hi, I am Ayomide Oduoye</h1>
      <p className=' text-xl p-2 md:text-center md:w-100' style={{fontFamily: 'Inconsolata',fontWeight: '500'}}>
        “A fullstack dev skilled in JavaScript, 
        React, Node.js, and databases — delivering clean code and great UX".
      </p>
      <button className='text-black border px-4 py-2 bg-white rounded-full text-[13px] uppercase cursor-pointer' style={{fontWeight: 'bold', fontFamily: 'Inconsolata'}}>Connect with me</button>
    </div>
    
  )
}

export default About