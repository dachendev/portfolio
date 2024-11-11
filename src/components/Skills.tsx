import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React from "react";

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

const Skills: React.FC = () => {
  return (
    <Container maxWidth="xl" sx={{ pt: 2, pb: 8 }}>
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
    </Container>
  );
};

export default Skills;
