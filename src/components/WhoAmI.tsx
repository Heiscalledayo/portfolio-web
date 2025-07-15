import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import TechStack from './TechStack';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const WhoAmI: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#0f0f0f] to-black mt-2 text-white py-20 px-4 ">
      <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
        {/* About Me */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1
            className="text-2xl text-center border-b-4 border-gray-500 mb-6 mx-10 md:mx-20"
            style={{ fontFamily: 'Cascadia Mono' }}
          >
            About Me
          </h1>

          {/* Typing animation heading */}
          <div className="text-center mb-4">
            <TypeAnimation
              sequence={[
                "👋 Hi, I’m Ayomide",
                1500,
                "A Fullstack Web Developer 💻",
                1500,
                "I build fast, scalable web apps ⚡",
                1500,
                "Let’s create something amazing together ✨",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-[1rem] md:text-2xl font-semibold"
              style={{ fontFamily: 'DM Sans' }}
            />
          </div>

          {/* Paragraph and bullet points */}
          <p
            style={{ fontFamily: 'Inconsolata' }}
            className="text-center text-gray-400 text-[15px] leading-7 tracking-tight max-w-prose mx-auto"
          >
            I’m a passionate fullstack developer who transforms complex problems into scalable, elegant solutions.
            I build responsive interfaces and efficient APIs using technologies like React, Node.js, Firebase, and MongoDB.
            I’m always up-to-date with modern trends and best practices to deliver high-quality code.
          </p>

          {/* Highlights */}
          <ul className="text-sm mt-4 text-left text-gray-400 list-disc list-inside px-6 md:px-10">
            <li>💻 3+ years building with React, Node.js, and MongoDB</li>
            <li>⚙️ Strong in REST APIs, Firebase, and Tailwind CSS</li>
            <li>🚀 Experienced with fullstack freelance & team projects</li>
            <li>🎯 Focused on clean UI and performance-driven apps</li>
          </ul>

          {/* CTA button */}
          <div className="flex justify-center mt-6">
            <a
              href="/resume.pdf"
              download
              className="border border-white px-6 py-2 rounded-full text-sm uppercase font-bold hover:bg-white hover:text-black transition duration-300"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1
            style={{ fontFamily: 'Inconsolata' }}
            className="text-2xl text-center mb-6 mx-10 md:mx-20 border-b-4 border-gray-500"
          >
            My Tech Stack
          </h1>
          <TechStack />
        </motion.div>
      </div>
    </div>
  );
};

export default WhoAmI;
