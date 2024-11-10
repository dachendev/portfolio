import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

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
      <Container>
        <Typography variant="h1">Jacob Dachenhaus</Typography>
        <Typography variant="body1">
          Hi, I'm Jacob. I'm a Full Stack Developer.
        </Typography>
        <div>
          <Typography variant="h2">Socials</Typography>
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
          </ul>
        </div>
        <div>
          <Typography variant="h2">Education</Typography>
          <ul>
            {educations.map((name, i) => (
              <li key={i}>{name}</li>
            ))}
          </ul>
        </div>
        <div>
          <Typography variant="h2">Projects</Typography>
          <ul>
            <li>Portfolio</li>
            <li>Workout Buddy</li>
          </ul>
        </div>
        <div>
          <Typography variant="h2">Skills</Typography>
          <Grid container spacing={2}>
            {skills.map((s, i) => (
              <Grid key={i}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "80px",
                    height: "80px",
                  }}
                >
                  <img src={s.imageURL} width={40} />
                  <Typography variant="caption">{s.name}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default App;
