import React from 'react';

const TechStack:React.FC = () => {
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

  return (
    <div className="flex flex-wrap justify-center gap-6 text-5xl text-gray-700 py-6">
      {icons.map((icon, index) => (
        <div
          key={index}
          className="transition-transform duration-300 ease-in-out transform hover:scale-125 hover:-rotate-3 hover:shadow-lg cursor-pointer"
        >
          <i
            className={`${icon.class}`}
            title={icon.name}
            aria-label={icon.name}
          ></i>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
