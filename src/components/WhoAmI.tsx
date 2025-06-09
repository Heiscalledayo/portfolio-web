import React from 'react'
import TechStack from './TechStack'

const WhoAmI:React.FC = () => {
  return (
    <div className='text-white mt-10 '>
      <div className='grid gap-2 md:grid-cols-2'>
        
        <div>
          <h1 className='text-2xl text-center border-b-gray-500 border-b-4 m-7 mx-20 p-1 md:mx-40' style={{fontFamily: 'Cascadia Mono'}}>About Me</h1>
           <p style={{fontFamily: 'Inconsolata'}} className='text-center text-gray-400 text-[15px] max-w-prose mx-auto leading-7 tracking-tight p-1'>
          👋 Hi, I’m Ayomide — a passionate fullstack web developer who enjoys turning complex problems into simple, scalable solutions.
          I specialize in building modern web applications with technologies like React, Node.js, Firebase, MongoDB, and Tailwind CSS. From sleek frontend interfaces to powerful backend APIs, I love being involved in every part of the development process.
          I’m constantly learning and exploring new technologies to stay sharp and deliver the best results. Whether it’s working remotely, collaborating on a team project, or helping a client bring their idea to life, I approach each challenge with creativity and precision.
          My goal? To build fast, accessible, and impactful digital products that not only work great — but feel great too.
        </p>
        </div>
       
        <div>
          <h1 style={{fontFamily: 'Inconsolata'}} className='text-2xl text-center border-b-gray-500 border-b-4 m-7 mx-20 p-1 md:mx-40'>My Tech Stack </h1>
          <div>
            <TechStack/>
           </div>
        </div>
        
      </div>
    </div>
  )
}

export default WhoAmI