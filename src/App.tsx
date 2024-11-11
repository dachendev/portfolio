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
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

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
    imageURL: "talentcourtyard_logo_h.jpeg",
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
          <Grid container spacing={2} sx={{ paddingTop: 5 }}>
            <Grid size={{ xs: 12, sm: 6 }}>
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
            <Grid size={{ xs: 12, sm: 6 }} sx={{ textAlign: "center" }}>
              <img src="duck.jpeg" width="250" />
            </Grid>
          </Grid>
        </div>
        <div>
          <h2>Education</h2>
          {educations.map((e, i) => (
            <Box key={i} sx={{ p: 2 }}>
              <h3>{e.name}</h3>
              <div>{e.tagline}</div>
              <div>
                {e.startDate} - {e.endDate}
              </div>
            </Box>
          ))}
        </div>
        <div>
          <h2>Work Experience</h2>
          <Grid container spacing={2}>
            {experiences.map((e, i) => (
              <Grid
                key={i}
                size={{ xs: 12, sm: 6 }}
                sx={{ textAlign: "center" }}
              >
                <img src={e.imageURL} height="40" alt={e.name} />
              </Grid>
            ))}
          </Grid>
        </div>
        <div>
          <h2>Projects</h2>
          <Grid container spacing={2}>
            {projects.map((p, i) => (
              <Grid key={i} size={{ xs: 12, md: 6 }}>
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
            <Grid container spacing={2}>
              {skillGroups.map((g, i) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
                  <h3>{g.name}</h3>
                  <List>
                    {g.skills.map((s, j) => (
                      <ListItem key={j}>
                        <ListItemIcon>
                          <img src={s.imageURL} height="24" />
                        </ListItemIcon>
                        <ListItemText>{s.name}</ListItemText>
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
        <Box sx={{ textAlign: "center" }}>
          <p>Copyright &copy; {new Date().getFullYear()} Jacob Dachenhaus</p>
        </Box>
      </Container>
    </>
  );
};

export default App;
