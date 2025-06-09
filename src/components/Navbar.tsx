import React from 'react'

const Navbar: React.FC = () => {
  return (
    <>
      <nav className='flex justify-between items-center p-4 text-white'>
        <div className="logo text-[13px] border-2 p-2 rounded-full font-light" style={{fontFamily: 'Poppins'}}>AO</div>
        <div className="text-sm flex justify-center items-center gap-5">
          <div className="text-black border-none px-4 py-2 bg-white rounded-full text-[13px] font-bold cursor-pointer" style={{fontFamily: 'Inconsolata'}}>
            <h1>Hire Me</h1>
          </div>
        </div>
        
      </nav>
    </>
  )
}

export default Navbar