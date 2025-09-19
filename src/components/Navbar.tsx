import React, { useEffect, useState } from 'react';
import { motion, easeOut } from 'framer-motion';
import { FaGithub } from 'react-icons/fa'; 
import { useTheme } from './ThemeContext';
import { HiSun } from 'react-icons/hi';
import { HiMoon } from 'react-icons/hi';



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
  const { theme, toggleTheme } = useTheme();
  

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate={isMounted ? 'visible' : 'hidden'}
      className={`
        flex justify-between items-center p-4 w-full top-0 left-0 z-50 shadow-sm
        ${theme === 'dark' ? 'bg-gray-900 text-white' : 'text-black' 
      }
`}

    >
      <div
        className="logo text-[13px] border-2 p-2 rounded-full font-light"
        style={{ fontFamily: 'Poppins' }}
      >
        AO
      </div>

      <div className="text-sm flex justify-center items-center gap-5">
        {/* Theme */}
        <div>
          {theme === "light" ? (
            <HiMoon
              onClick={toggleTheme}
              className="cursor-pointer text-xl text-gray-800"
            />
          ) : (
            <HiSun
              onClick={toggleTheme}
              className="cursor-pointer text-xl text-white"
            />
          )}
        </div>


        {/* GitHub Icon */}
        <a
          href="https://github.com/Heiscalledayo" 
          target="_blank"
          rel="noopener noreferrer"
          className={`text-xl hover:scale-110 transition-transform ${theme === 'dark' ? 'text-white' : 'text-black'}`}
          title="View my GitHub"
        >
          <FaGithub />
        </a>

        {/* Hire Me Button */}
        <a
          href="mailto:ayomidecoder@gmail.com"
          className={`border-none px-4 py-2 rounded-full text-[13px] font-bold cursor-pointer ${theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'} `}
          style={{ fontFamily: 'Inconsolata' }}
        >
          <h1>Hire Me</h1>
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
