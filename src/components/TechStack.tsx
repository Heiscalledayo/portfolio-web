import React from 'react';
import { motion } from 'framer-motion';

const icons = [
  { name: 'React', class: 'devicon-react-original colored' },
  { name: 'Node.js', class: 'devicon-nodejs-plain colored' },
  { name: 'Firebase', class: 'devicon-firebase-plain colored' },
  { name: 'Tailwind CSS', class: 'devicon-tailwindcss-plain colored' },
  { name: 'JavaScript', class: 'devicon-javascript-plain colored' },
  { name: 'TypeScript', class: 'devicon-typescript-plain colored' },
  { name: 'MongoDB', class: 'devicon-mongodb-plain colored' },
  { name: 'Git', class: 'devicon-git-plain colored' },
  { name: 'HTML5', class: 'devicon-html5-plain colored' },
  { name: 'CSS3', class: 'devicon-css3-plain colored' },
];

const TechStack: React.FC = () => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 place-items-center py-6">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center text-white cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
          viewport={{ once: true }}
        >
          <i
            className={`${icon.class} text-5xl transition-transform duration-300 transform hover:scale-125`}
            title={icon.name}
            aria-label={icon.name}
          ></i>
          <span className="text-sm mt-2 font-inconsolata">{icon.name}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default TechStack;
