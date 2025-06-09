import React from 'react'
import projectPicture from '../assets/Portfolio.jpg';

const Projects: React.FC = () => {
  return (
    <div className='mt-5 bg-black text-white p-2'>
      <div>
        <h1 className='text-2xl text-center border-b-gray-500 border-b-4 m-7 mx-20 p-1 md:mx-70' style={{fontFamily: 'Inconsolata', fontWeight: 'bold'}}>Projects</h1>
        <div className='grid gap-8'>
          <div className='p-2 rounded m-2 grid gap-5 md:flex md:m-7'>
            <div className='grid gap-2'>
              <h2 className='text-[20px] font-semibold' style={{fontFamily: 'Dm sans'}}>1. Jambify</h2>
              <div style={{fontFamily: 'Inconsolata'}} className='tracking-tight leading-tight text-gray-400 text-[15px] max-w-prose border-2 border-blue-700 p-2 my-2 rounded'>Lorem, ipsum dolor sit amet 
                consectetur adipisicing elit. 
                Numquam minima vel tempora et sed? 
                Temporibus libero quod dicta non ratione.
              </div>
              <div className='flex gap-2 mt-5 text-center'>
                <h1 style={{fontFamily: 'Inconsolata', fontWeight: '600'}} className='text-[15px]'>Tech Stack:</h1>
                <div className='flex gap-4 place-self-center text-gray-300 text-[10px] font-[poppins]'>
                  <p className=''>React</p>
                  <p className=''>Tailwind</p>
                  <p className=''>MongoDB</p>
                  <p className=''>Express</p>
                </div>
              </div>
              <button className='border-2 p-2 mt-4 w-[100px] rounded-full' style={{fontFamily: 'Inconsolata'}}>Visit Site</button>
            </div>
            <div className='w-auto h-48 overflow-hidden border rounded p-1 md:w-1/2 md:h-60'>
              <img src={projectPicture} alt="A Picture of project" className='w-full h-full'/>
            </div>
          </div>

          <div className='p-2 rounded m-2 grid gap-5 md:flex md:m-7'>
            <div className='w-auto h-48 overflow-hidden border rounded p-1 md:w-1/2 md:h-60'>
              <img src={projectPicture} alt="A Picture of project" className='w-full h-full'/>
            </div>
            <div className='grid gap-2'>
              <h2 className='text-[20px] font-semibold' style={{fontFamily: 'Dm sans'}}>2. Jambify</h2>
              <div style={{fontFamily: 'Inconsolata'}} className='tracking-tight leading-tight text-gray-400 text-[15px] max-w-prose border-2 border-blue-700 p-2 my-2 rounded'>Lorem, ipsum dolor sit amet 
                consectetur adipisicing elit. 
                Numquam minima vel tempora et sed? 
                Temporibus libero quod dicta non ratione.
              </div>
              <div className='flex gap-2 mt-5 text-center'>
                <h1 style={{fontFamily: 'Inconsolata', fontWeight: '600'}} className='text-[15px]'>Tech Stack:</h1>
                <div className='flex gap-4 place-self-center text-gray-300 text-[10px] font-[poppins]'>
                  <p className=''>React</p>
                  <p className=''>Tailwind</p>
                  <p className=''>MongoDB</p>
                  <p className=''>Express</p>
                </div>
              </div>
              <button className='border-2 p-2 mt-4 w-[100px] rounded-full' style={{fontFamily: 'Inconsolata'}}>Visit Site</button>
            </div>
          </div>
          
          <div className='p-2 rounded m-2 grid gap-5 md:flex md:m-7'>
            <div className='grid gap-2'>
              <h2 className='text-[20px] font-semibold' style={{fontFamily: 'Dm sans'}}>1. Jambify</h2>
              <div style={{fontFamily: 'Inconsolata'}} className='tracking-tight leading-tight text-gray-400 text-[15px] max-w-prose border-2 border-blue-700 p-2 my-2 rounded'>Lorem, ipsum dolor sit amet 
                consectetur adipisicing elit. 
                Numquam minima vel tempora et sed? 
                Temporibus libero quod dicta non ratione.
              </div>
              <div className='flex gap-2 mt-5 text-center'>
                <h1 style={{fontFamily: 'Inconsolata', fontWeight: '600'}} className='text-[15px]'>Tech Stack:</h1>
                <div className='flex gap-4 place-self-center text-gray-300 text-[10px] font-[poppins]'>
                  <p className=''>React</p>
                  <p className=''>Tailwind</p>
                  <p className=''>MongoDB</p>
                  <p className=''>Express</p>
                </div>
              </div>
              <button className='border-2 p-2 mt-4 w-[100px] rounded-full' style={{fontFamily: 'Inconsolata'}}>Visit Site</button>
            </div>
            <div className='w-auto h-48 overflow-hidden border rounded p-1 md:w-1/2 md:h-60'>
              <img src={projectPicture} alt="A Picture of project" className='w-full h-full'/>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Projects