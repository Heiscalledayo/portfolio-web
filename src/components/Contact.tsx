import React from 'react'

const Contact: React.FC = () => {
  return (
    <div className='bg-black text-white pb-5'>
      <div className='grid text-center pt-5 gap-7 px-2'>
        <h1 className='text-2xl font-bold' style={{fontFamily: 'Inconsolata'}}>Contact Me</h1>
        <p style={{fontFamily: 'Dm Sans'}} className='text-center md:w-[500px] place-self-center text-gray-400'>I am open for freelance projects, remote works my inbox is always open. 
          Whether you have a question, a project for me or just want to say hi, 
          I’m there for you!!!
        </p>
        <button className='border w-[100px] place-self-center p-2 rounded font-[poppins] cursor-pointer'>Text me </button>
      </div>
    </div>
  )
}

export default Contact