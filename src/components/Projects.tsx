import GitHubIcon from "@mui/icons-material/GitHub";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
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
    <div>
      <h2>Projects</h2>
      <Grid container spacing={2}>
        {projects.map((p, i) => (
          <Grid key={i} size={{ xs: 12, md: 6 }}>
            <Card>
              <CardContent>
                <h3>{p.name}</h3>
                <p>{p.description}</p>

                <Stack direction="row" spacing={2}>
                  {p.liveURL && (
                    <a href={p.liveURL}>
                      <LaunchIcon />
                    </a>
                  )}
                  <a href={p.ghURL}>
                    <GitHubIcon />
                  </a>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
