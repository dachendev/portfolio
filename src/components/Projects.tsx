import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid2";
import LaunchIcon from "@mui/icons-material/Launch";
import React from "react";
import Stack from "@mui/material/Stack";

const projects = [
  {
    name: "Portfolio",
    description: "A portfolio website to showcase my skills.",
    liveURL: null,
    ghURL: "https://github.com/dachendev/portfolio",
  },
  {
    name: "Workout Buddy",
    description: "An app to track workout progress and stay accountable.",
    liveURL: null,
    ghURL: "https://github.com/dachendev/workout-buddy",
  },
];

const Projects: React.FC = () => {
  return (
    <Container maxWidth="xl" sx={{ pt: 2, pb: 8 }}>
      <h2>Projects</h2>
      <Grid container spacing={2}>
        {projects.map((p, i) => (
          <Grid key={i} size={{ xs: 12, md: 6 }}>
            <Card>
              <CardMedia
                sx={{ height: 150 }}
                image="https://placehold.co/600x400"
              />
              <CardContent>
                <h3>{p.name}</h3>
                <p>{p.description}</p>

                <Stack direction="row" spacing={2}>
                  {p.liveURL && (
                    <a href={p.liveURL} target="_blank">
                      <LaunchIcon />
                    </a>
                  )}
                  <a href={p.ghURL} target="_blank">
                    <GitHubIcon />
                  </a>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
