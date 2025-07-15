import React from 'react';
import { motion, easeOut } from 'framer-motion';
import Image from '../assets/Snapchat-55408010.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut, 
    },
  },
};

const About: React.FC = () => {
  return (
    <motion.div
      className="text-black grid place-items-center gap-5 text-center mt-4 px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        variants={itemVariants}
        className="rounded-full overflow-hidden w-[100px] h-[100px]"
      >
        <img
          src={Image}
          alt="An image of Ayomide Oduoye"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.h1
        variants={itemVariants}
        className="font-semibold text-[30px] p-5 md:text-[35px]"
        style={{ fontFamily: 'DM Sans' }}
      >
        I'm Ayomide Oduoye — Fullstack Developer crafting functional & user-friendly web experiences.
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-xl max-w-xl"
        style={{ fontFamily: 'Inter', fontWeight: '500' }}
      >
        Passionate about building scalable web applications using JavaScript, React, Node.js, and modern databases. 
        I focus on writing clean code, delivering seamless user experiences, and solving real-world problems through tech.
      </motion.p>

      <motion.button
        variants={itemVariants}
        className="text-white border border-black px-6 py-2 bg-black rounded-full text-[13px] uppercase cursor-pointer font-bold font-inconsolata hover:bg-white hover:text-black transition duration-300"
      >
        Let's Work Together
      </motion.button>
    </motion.div>
  );
};

export default About;
