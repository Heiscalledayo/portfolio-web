import React, { useState } from 'react';
import { useTheme } from './ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

// Example images
import jambify from '../assets/jambify.jpg';
import clientWork from '../assets/jambify.jpg';

type Project = {
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  link: string;
  tech: string[];
};

const Projects: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [expanded, setExpanded] = useState<string | null>(null);

  const sectionBg = isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black';
  const headingColor = isDark ? 'text-white' : 'text-black';

  const personalProjects: Project[] = [
    {
      title: 'Jambify',
      description: 'Ask, Answer, Excel on your JAMB exam',
      fullDescription:
        'Jambify is a vibrant online learning community built to help Nigerian students prepare effectively for the JAMB examination.',
      image: jambify,
      link: 'https://jambify.vercel.app',
      tech: ['React', 'Node.js', 'Tailwind'],
    },
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio built from scratch',
      fullDescription:
        'This portfolio website showcases my skills, projects, and experience as a fullstack developer.',
      image: jambify,
      link: 'https://myportfolio.vercel.app',
      tech: ['React', 'Framer Motion', 'Tailwind'],
    },
  ];

  const clientProjects: Project[] = [
    {
      title: 'Speak Africa',
      description: 'Learn, Curate, Engage',
      fullDescription:
        'A content platform designed to empower African voices, offering educational resources and curated stories.',
      image: clientWork,
      link: 'https://speakafrica.com',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    },
    {
      title: 'E-commerce Platform',
      description: 'Marketplace for artisans',
      fullDescription:
        'Built a scalable platform for artisans to showcase their products and connect with customers.',
      image: clientWork,
      link: 'https://artisanstore.com',
      tech: ['Next.js', 'Express', 'MongoDB'],
    },
  ];

  const renderProject = (project: Project) => (
    <div
      key={project.title}
      onClick={() =>
        setExpanded(expanded === project.title ? null : project.title)
      }
      className={`cursor-pointer rounded-xl overflow-hidden shadow-md border transition-all duration-300 hover:shadow-xl hover:scale-[1.02]
        ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 text-left">
        <h3
          className={`text-xl font-bold mb-1 text-[#ff4c60]`}
          style={{ fontFamily: 'DM Sans' }}
        >
          {project.title}
        </h3>

        <p
          className={`text-sm mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
          style={{ fontFamily: 'Inconsolata' }}
        >
          {project.description}
        </p>

        <AnimatePresence>
          {expanded === project.title && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p
                className={`text-sm mb-3 leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                {project.fullDescription}
              </p>

              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className={`px-2 py-1 rounded-full text-xs font-semibold 
                    ${isDark ? 'bg-gray-700 text-gray-200' : 'bg-black text-white'}`}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-bold hover:underline ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                }`}
              >
                Visit Live Site →
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );

  return (
    <section
      className={`${sectionBg} py-20 px-4 transition-colors duration-500`}
      id="projects"
    >
      <div className="max-w-6xl mx-auto">

        <h2
          className={`text-3xl font-bold mb-10 text-center ${headingColor}`}
          style={{ fontFamily: 'DM Sans' }}
        >
          Recent Works
        </h2>

        {/* Personal Projects */}
        <h3
          className={`text-2xl font-bold mb-6 ${headingColor}`}
          style={{ fontFamily: 'DM Sans' }}
        >
          🧠 Personal Projects
        </h3>
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {personalProjects.map(renderProject)}
        </div>

        {/* Client Projects */}
        <h3
          className={`text-2xl font-bold mb-6 ${headingColor}`}
          style={{ fontFamily: 'DM Sans' }}
        >
          🤝 Client Projects
        </h3>
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {clientProjects.map(renderProject)}
        </div>
      </div>
    </section>
  );
};

export default Projects;
