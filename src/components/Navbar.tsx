import React, { useEffect, useState } from 'react';
import { motion, easeOut } from 'framer-motion';
import { FaGithub } from 'react-icons/fa'; 

const navVariants = {
  hidden: { x: '-100%', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

const Navbar: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate={isMounted ? 'visible' : 'hidden'}
      className="flex justify-between items-center p-4 text-black w-full top-0 left-0 z-50 bg-white shadow-sm"
    >
      <div
        className="logo text-[13px] border-2 p-2 rounded-full font-light"
        style={{ fontFamily: 'Poppins' }}
      >
        AO
      </div>

      <div className="text-sm flex justify-center items-center gap-5">
        {/* GitHub Icon */}
        <a
          href="https://github.com/Heiscalledayo" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-black text-xl hover:scale-110 transition-transform"
          title="View my GitHub"
        >
          <FaGithub />
        </a>

        {/* Hire Me Button */}
        <div
          className="text-white border-none px-4 py-2 bg-black rounded-full text-[13px] font-bold cursor-pointer"
          style={{ fontFamily: 'Inconsolata' }}
        >
          <h1>Hire Me</h1>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
