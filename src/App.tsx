import React from "react";

const educations = ["Full Stack Open", "Purdue University"];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Python",
  "React",
  "Node.js",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "Figma",
];

const App: React.FC = () => {
  return (
    <>
      <h1>Jacob Dachenhaus</h1>
      <p>Hi, I'm Jacob. I'm a Full Stack Developer.</p>
      <div>
        <h2>Socials</h2>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/dachendev/">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/dachendev">GitHub</a>
          </li>
        </ul>
      </div>
      <div>
        <h2>Educations</h2>
        <ul>
          {educations.map((name, i) => (
            <li key={i}>{name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Projects</h2>
        <ul>
          <li>Portfolio</li>
          <li>Workout Buddy</li>
        </ul>
      </div>
      <div>
        <h2>Skills</h2>
        <ul>
          {skills.map((name, i) => (
            <li key={i}>{name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
