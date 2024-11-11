import Grid from "@mui/material/Grid2";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import React from "react";

const Hero: React.FC = () => {
  return (
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
  );
};

export default Hero;
