import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import React from "react";

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

const WorkExperience: React.FC = () => {
  return (
    <Container>
      <h2>Work Experience</h2>
      <Grid container spacing={2} sx={{ p: 2 }}>
        {experiences.map((e, i) => (
          <Grid key={i} size={{ xs: 12, sm: 6 }} sx={{ textAlign: "center" }}>
            <img src={e.imageURL} height="40" alt={e.name} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default WorkExperience;
