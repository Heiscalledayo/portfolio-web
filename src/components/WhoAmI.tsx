import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import TechStack from "./TechStack";
import { useTheme } from "./ThemeContext";
import { FiCoffee } from "react-icons/fi";
import { HiOutlineFire, HiOutlineUsers, HiOutlineChartBar } from "react-icons/hi";

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

const WhoAmI: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section
      id="about"
      className={`${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      } py-20 px-6 transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto grid gap-16 md:grid-cols-2 items-start">
        {/* === Left: About Me === */}
        <motion.div
          // variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2
            className="text-4xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500"
            style={{ fontFamily: "DM Sans" }}
          >
            Get To Know Me
          </h2>

          <div className="mb-6">
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
              className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-200"
              style={{ fontFamily: "Cascadia Mono" }}
            />
          </div>

          <p
            className={`text-lg leading-7 max-w-prose ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
            style={{ fontFamily: "DM Sans" }}
          >
            I’m a passionate fullstack developer who transforms complex problems
            into scalable, elegant solutions. I build responsive interfaces and
            efficient APIs using technologies like React, Node.js, Firebase, and
            MongoDB.
          </p>

          {/* Highlights */}
          <ul
            className={`grid gap-2 mt-6 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
            style={{ fontFamily: "DM Sans" }}
          >
            <li>💻 5+ years with React, Node.js, and MongoDB</li>
            <li>⚙️ Strong in REST APIs, Firebase, and Tailwind CSS</li>
            <li>🚀 Freelance + team fullstack experience</li>
            <li>🎯 Focused on clean UI & performance-driven apps</li>
          </ul>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 md:flex md:gap-10 mt-10">
            {[
              { icon: <HiOutlineFire size={32} />, label: "Projects Completed", value: "20+" },
              { icon: <FiCoffee size={32} />, label: "Cups of Coffee", value: "30+" },
              { icon: <HiOutlineUsers size={32} />, label: "Satisfied Clients", value: "15+" },
              { icon: <HiOutlineChartBar size={32} />, label: "Years Experience", value: "5+" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className={`flex gap-3 p-4 rounded-xl ${
                  theme === "dark"
                    ? "bg-white/5 border border-gray-700"
                    : "bg-white shadow-sm"
                }`}
              >
                <div className="text-pink-500">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold">{item.value}</h3>
                  <p className="text-sm opacity-80">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* === Right: Tech Stack === */}
        <motion.div
          // variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2
            className="text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500"
            style={{ fontFamily: "DM Sans" }}
          >
            Technologies I Use
          </h2>
          <TechStack />
        </motion.div>
      </div>
    </section>
  );
};

export default WhoAmI;
