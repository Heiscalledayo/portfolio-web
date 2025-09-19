import React from 'react';
import { useTheme } from './ThemeContext';
import { HiOutlineCode, HiOutlineAcademicCap } from 'react-icons/hi';
import { motion } from 'framer-motion';

export const Experience: React.FC = () => {
  const { theme } = useTheme();

  const experiences = [
    {
      icon: <HiOutlineCode />,
      period: 'Jan 2023 – Dec 2025',
      role: 'Fullstack Developer',
      org: 'Oluseed Technologies Limited',
      description:
        'Built and maintained scalable web applications with responsive frontends and robust backends.',
      tech: ['React', 'Node.js', 'MongoDB', 'Firebase'],
    },
    {
      icon: <HiOutlineAcademicCap />,
      period: 'Jan 2025 – Dec 2029',
      role: 'BSc. Computer Science',
      org: 'University of Ilorin',
      description:
        'Developed strong problem-solving and analytical skills through software development coursework.',
      tech: ['C++', 'Algorithms', 'DBMS', 'Computer Systems'],
    },
  ];

  const cardClasses = `
    relative shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300
    p-6 rounded-2xl border flex items-start gap-6
    ${theme === 'dark'
      ? 'bg-gray-800 border-gray-700 text-gray-100'
      : 'bg-white border-gray-200 text-gray-800'}
  `;

  const textMuted = theme === 'dark' ? 'text-gray-400' : 'text-gray-500';
  const textSubtle = theme === 'dark' ? 'text-gray-300' : 'text-gray-900';

  return (
    <section
      className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'} py-16`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h1
          style={{ fontFamily: 'DM Sans' }}
          className="text-3xl font-bold text-center mb-12"
        >
          Experiences & Education
        </h1>

        <div className="relative flex flex-col md:flex-row md:gap-10 gap-8">
          {/* Timeline vertical line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-500/50 to-purple-500/50 hidden md:block"></div>

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={cardClasses}
              style={{ fontFamily: 'Poppins' }}
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-14 h-14 rounded-full 
                  bg-gradient-to-tr from-pink-500/20 to-purple-500/20 text-[#ff4c60] text-2xl shadow-md">
                {exp.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h1 className={`text-sm font-medium ${textMuted}`}>{exp.period}</h1>
                  <h1 className="text-sm font-semibold text-[#ff4c60]">{exp.role}</h1>
                </div>
                <p className={`text-base font-semibold ${textSubtle} mt-1`}>{exp.org}</p>
                <p className={`text-sm ${textMuted} mt-2 leading-relaxed`}>
                  {exp.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className={`text-xs px-2 py-1 rounded-full border ${
                        theme === 'dark'
                          ? 'border-gray-600 text-gray-300'
                          : 'border-gray-300 text-gray-700'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
