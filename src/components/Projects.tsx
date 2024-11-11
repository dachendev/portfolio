import GitHubIcon from "@mui/icons-material/GitHub";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid2";
import React from "react";

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

const Projects: React.FC = () => {
  return (
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
  );
};

export default Projects;
