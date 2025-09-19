import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';

const icons = [
  { name: 'React', class: 'devicon-react-original' },
  { name: 'Node.js', class: 'devicon-nodejs-plain' },
  { name: 'Firebase', class: 'devicon-firebase-plain' },
  { name: 'Tailwind CSS', class: 'devicon-tailwindcss-plain' },
  { name: 'JavaScript', class: 'devicon-javascript-plain' },
  { name: 'TypeScript', class: 'devicon-typescript-plain' },
  { name: 'MongoDB', class: 'devicon-mongodb-plain' },
  { name: 'Git', class: 'devicon-git-plain' },
  { name: 'HTML5', class: 'devicon-html5-plain' },
  { name: 'CSS3', class: 'devicon-css3-plain' },
  { name: 'Postgres', class: 'devicon-postgresql-plain' },
];

const TechStack: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 place-items-center py-6">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
          viewport={{ once: true }}
        >
          <i
            className={`${icon.class} ${theme === 'dark' ? 'colored' : ''} text-5xl transition-transform duration-300 transform hover:scale-125`}
            title={icon.name}
            aria-label={icon.name}
          ></i>
          <span className="text-sm mt-2" style={{ fontFamily: 'DM Sans' }}>
            {icon.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default TechStack;
