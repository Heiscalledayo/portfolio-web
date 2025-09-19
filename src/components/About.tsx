import React from "react";
import { motion } from "framer-motion";
import Image from "../assets/Snapchat-55408010.jpg";
import { useTheme } from "./ThemeContext";

const About: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section
      id="about"
      className={`${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      } py-20 px-6 transition-colors duration-300`}
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* 👤 Profile image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-40 h-40 mx-auto rounded-full overflow-hidden shadow-lg ring-4 ring-gray-200 dark:ring-gray-700 mb-6"
        >
          <img
            src={Image}
            alt="Ayomide Oduoye"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* 📝 Intro text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ fontFamily: "DM Sans" }}
        >
          I'm Ayomide Oduoye
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6"
          style={{ fontFamily: "DM Sans" }}
        >
          A passionate Fullstack Developer who loves building scalable web
          applications using JavaScript, React, Node.js, and modern databases.
          I enjoy writing clean code, crafting seamless user experiences, and
          solving real-world problems through technology.
        </motion.p>

        {/* 📄 Resume button */}
        <motion.a
          href="/resume.pdf" // Update with your resume path
          download
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="inline-block bg-[#ff4c60] hover:bg-[#e34355] text-white font-semibold px-6 py-3 rounded-full transition duration-300"
          style={{ fontFamily: "DM Sans" }}
        >
          Download My Resume
        </motion.a>
      </div>
    </section>
  );
};

export default About;
