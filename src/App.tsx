import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import EmailIcon from "@mui/icons-material/Email";
import Box from "@mui/material/Box";

const educations = [
  {
    name: "University of Helsinki",
    tagline: "Full Stack Web Development",
    startDate: "Jun 2024",
    endDate: "Nov 2024",
  },
  {
    name: "Purdue University",
    tagline: "Bachelor of Science in Web Programming and Design",
    startDate: "Aug 2018",
    endDate: "Dec 2022",
  },
];

const experiences = [
  {
    name: "Purdue University",
    imageURL: "PU-H-Full-RGB.svg",
  },
  {
    name: "Talent Courtyard",
    imageURL: "talentcourtyard_logo.jpeg",
  },
];

const projects = [
  {
    name: "Portfolio",
    description: "A portfolio website to showcase my skills.",
    ghURL: "#",
  },
  {
    name: "Workout Buddy",
    description: "An app to track workout progress and stay accountable.",
    ghURL: "#",
  },
];

const skillGroups = [
  {
    name: "Languages",
    skills: [
      { name: "HTML", imageURL: "HTML5.svg" },
      { name: "CSS", imageURL: "CSS3.svg" },
      { name: "JavaScript", imageURL: "JavaScript.svg" },
      { name: "TypeScript", imageURL: "TypeScript.svg" },
      { name: "Python", imageURL: "Python.svg" },
    ],
  },
  {
    name: "Frameworks",
    skills: [
      { name: "React", imageURL: "React.svg" },
      { name: "Material UI", imageURL: "Material UI.svg" },
      { name: "Node", imageURL: "Node.js.svg" },
      { name: "Express", imageURL: "Express.svg" },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "PostgreSQL", imageURL: "PostgresSQL.svg" },
      { name: "MongoDB", imageURL: "MongoDB.svg" },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Jest", imageURL: "Jest.svg" },
      { name: "Playwright", imageURL: "Playwrite.svg" },
      { name: "Docker", imageURL: "Docker.svg" },
      { name: "GitHub", imageURL: "GitHub.svg" },
      { name: "Figma", imageURL: "Figma.svg" },
      { name: "Photoshop", imageURL: "Adobe Photoshop.svg" },
    ],
  },
];

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Container>
        <div>
          <Grid container spacing={2}>
            <Grid size="grow">
              <h1>Jacob Dachenhaus</h1>
              <p>Hi, I'm Jacob. I'm a Full Stack Developer.</p>
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/dachendev/">
                    <LinkedInIcon />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://github.com/dachendev">
                    <GitHubIcon />
                    GitHub
                  </a>
                </li>
                <li>
                  <EmailIcon />
                  dachendev@gmail.com
                </li>
              </ul>
            </Grid>
            <Grid size="grow">
              <img src="duck.jpeg" width="200" />
            </Grid>
          </Grid>
        </div>
        <div>
          <h2>Education</h2>
          <ul>
            {educations.map((e, i) => (
              <li key={i}>
                <div>{e.name}</div>
                <div>{e.tagline}</div>
                <div>
                  {e.startDate} - {e.endDate}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Work Experience</h2>
          <ul>
            {experiences.map((e, i) => (
              <li key={i}>
                {e.name} <img src={e.imageURL} height="40" />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Projects</h2>
          <Grid container spacing={2}>
            {projects.map((p, i) => (
              <Grid key={i} size="grow">
                <Card>
                  <CardContent>
                    <h3>{p.name}</h3>
                    <p>{p.description}</p>
                    <a href={p.ghURL}>
                      <GitHubIcon />
                    </a>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
        <div>
          <h2>Skills</h2>

          <div>
            {skillGroups.map((g, i) => (
              <div key={i}>
                <div>{g.name}</div>
                <ul>
                  {g.skills.map((s, j) => (
                    <li>
                      <img src={s.imageURL} height="20" /> {s.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p>Copyright &copy; {new Date().getFullYear()} Jacob Dachenhaus</p>
        </div>
      </Container>
    </>
  );
};

export default App;
