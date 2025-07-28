import React from 'react';
import ProjectCard from './ProjectCard';
import image_1 from '../assets/jambify.jpg';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Jambify',
      description: 'Ask, Answer, Excel on your JAMB exam',
      fullDescription:
        'Jambify is a vibrant online learning community built specifically to help Nigerian students prepare effectively for the Joint Admissions and Matriculation Board (JAMB) examination.',
      image: image_1,
      link: 'https://jambify.vercel.app',
      tech: ['React', 'Nodejs', 'Tailwind'],
    },
    // {
    //   title: 'E-commerce Admin Dashboard',
    //   description: 'Manage products, users, and orders with ease.',
    //   fullDescription:
    //     'An admin dashboard for an e-commerce platform. Features include product CRUD operations, user management, order tracking, and analytics charting. Built with React, Node.js, MongoDB, and Tailwind.',
    //   image: image_1,
    //   link: 'https://ecomadmin.example.com',
    //   tech: ['React', 'Node.js', 'MongoDB'],
    // },
    // {
    //   title: 'Blogging Platform',
    //   description: 'Write, edit, and publish blogs with rich text.',
    //   fullDescription:
    //     'A fullstack blogging platform allowing users to sign up, write blog posts using a rich-text editor, view others’ content, and comment. Built with Next.js, Sanity CMS, and Tailwind CSS.',
    //   image: image_1,
    //   link: 'https://blogsite.example.com',
    //   tech: ['Next.js', 'Sanity', 'Tailwind'],
    // },
  ];

  return (
    <section className="bg-white text-black py-20 px-4" id="projects">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10" style={{ fontFamily: 'Cascadia Mono' }}>
          🚀 Projects I’ve Built
        </h2>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
