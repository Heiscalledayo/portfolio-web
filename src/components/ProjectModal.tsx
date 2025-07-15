import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  fullDescription: string;
  image: string;
  link: string;
};

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: "0", opacity: 1, transition: { duration: 0.4 } },
};

const ProjectModal: React.FC<Props> = ({
  isOpen,
  onClose,
  title,
  fullDescription,
  image,
  link,
}) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4"
      variants={backdrop}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        variants={modal}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="bg-white rounded-lg p-6 max-w-lg w-full shadow-lg"
        style={{ fontFamily: 'DM Sans' }}
      >
        <img src={image} alt={title} className="rounded h-50 w-screen mb-4" />
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-sm text-gray-700 mb-4">{fullDescription}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-blue-600 hover:underline text-sm font-bold"
        >
          Visit Live Site →
        </a>
        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 text-sm"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
