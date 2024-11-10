import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Grid from "@mui/material/Grid2";

const educations = ["Full Stack Open", "Purdue University"];

const skills = [
  { name: "HTML", imageURL: "HTML5.svg" },
  { name: "CSS", imageURL: "CSS3.svg" },
  { name: "JavaScript", imageURL: "JavaScript.svg" },
  { name: "TypeScript", imageURL: "TypeScript.svg" },
  { name: "Python", imageURL: "Python.svg" },
  { name: "React", imageURL: "React.svg" },
  { name: "Material UI", imageURL: "Material UI.svg" },
  { name: "Node", imageURL: "Node.js.svg" },
  { name: "Express", imageURL: "Express.svg" },
  { name: "PostgreSQL", imageURL: "PostgresSQL.svg" },
  { name: "MongoDB", imageURL: "MongoDB.svg" },
  { name: "Jest", imageURL: "Jest.svg" },
  { name: "Playwright", imageURL: "Playwrite.svg" },
  { name: "Docker", imageURL: "Docker.svg" },
  { name: "GitHub", imageURL: "GitHub.svg" },
  { name: "Figma", imageURL: "Figma.svg" },
  { name: "Photoshop", imageURL: "Adobe Photoshop.svg" },
];

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <h1>Jacob Dachenhaus</h1>
      <p>Hi, I'm Jacob. I'm a Full Stack Developer.</p>
      <div>
        <h2>Socials</h2>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/dachendev/">
              LinkedIn <LinkedInIcon />
            </a>
          </li>
          <li>
            <a href="https://github.com/dachendev">
              GitHub <GitHubIcon />
            </a>
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
        <Grid container spacing={2}>
          {skills.map((s, i) => (
            <Grid key={i}>
              {s.imageURL && <img src={s.imageURL} width="40" />} {s.name}
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default App;
