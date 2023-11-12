import React from 'react';
import AnimatedText from "@/components/AnimatedText"

const SkillsPage = () => {
  const skillsMatrix = [
    ['HTML', 'CSS', 'JavaScript'],
    ['React', 'Next.js', 'Tailwind CSS'],
    ['Node.js', 'Express', 'MongoDB'],
  ];

  return (
    <div className="container mx-auto mt-20 mb-20">
        <AnimatedText text="My Skills" className="mt-16 mb-16" />
      <div className="grid grid-cols-3 gap-4 mb-50">
        {skillsMatrix.map((category, index) => (
          <div key={index} className="p-4 border border-solid border-gray-300 rounded-md mb-40 bg-gray-400">
            <h2 className="text-xl font-semibold mb-5">{`Category ${index + 1}`}</h2>
            <ul>
              {category.map((skill, skillIndex) => (
                <li key={skillIndex} className="list-disc ml-4">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
