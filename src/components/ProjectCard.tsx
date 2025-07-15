import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';

type Props = {
  title: string;
  description: string;
  image: string;
  link: string;
  tech: string[];
  fullDescription: string;
};

const ProjectCard: React.FC<Props> = ({
  title,
  description,
  image,
  link,
  tech,
  fullDescription,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.2}
        scale={1.02}
        transitionSpeed={400}
        className="bg-gray-100 rounded-xl shadow-md overflow-hidden cursor-pointer"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onClick={() => setIsOpen(true)}
          className="hover:shadow-xl transition-transform"
        >
          <img src={image} alt={title} className="w-full h-48 object-cover" />
          <div className="p-4 text-left">
            <h3 className="text-xl font-bold mb-2" style={{fontFamily: 'DM Sans'}}>{title}</h3>
            <p className="text-sm text-gray-700 mb-3" style={{fontFamily: 'Inconsolata'}}>
              {description}
            </p>
            <div className="flex flex-wrap gap-2 text-xs mb-2">
              {tech.map((item, i) => (
                <span
                  key={i}
                  className="bg-black text-white px-2 py-1 rounded-full font-semibold"
                >
                  {item}
                </span>
              ))}
            </div>
            <span className="text-blue-600 font-semibold hover:underline text-sm" style={{fontFamily: 'DM Sans'}}>
              View Details →
            </span>
          </div>
        </motion.div>
      </Tilt>

      {/* Modal */}
      {isOpen && (
        <ProjectModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title={title}
          fullDescription={fullDescription}
          image={image}
          link={link}
        />
      )}
    </>
  );
};

export default ProjectCard;
