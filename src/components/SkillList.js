import React from 'react';

const skills = [
  'JavaScript',
  'React',
  'HTML',
  'CSS',
  'Node.js',
  'Python',
 
];

function SkillList() {
  return (
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
}

export default SkillList;
