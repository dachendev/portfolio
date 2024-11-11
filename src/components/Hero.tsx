import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";

const socials = [
  {
    text: "LinkedIn",
    icon: <LinkedInIcon />,
    href: "https://www.linkedin.com/in/dachendev/",
  },
  {
    text: "GitHub",
    icon: <GitHubIcon />,
    href: "https://github.com/dachendev",
  },
];

const Hero: React.FC = () => {
  return (
    <Container maxWidth="xl" sx={{ pt: 2, pb: 8 }}>
      <Box>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 8 }}>
            <h1 style={{ fontSize: "calc(2rem + 1.25vw)" }}>
              Hi, I'm Jacob Dachenhaus.
              <br />
              Full Stack Developer & UX/UI Designer.
            </h1>
            <p>Full Stack Developer</p>
            <List sx={{ mb: 4 }}>
              {socials.map((s, i) => (
                <ListItemButton
                  key={i}
                  component="a"
                  href={s.href}
                  target="_blank"
                >
                  <ListItemIcon>{s.icon}</ListItemIcon>
                  <ListItemText>{s.text}</ListItemText>
                </ListItemButton>
              ))}
              <ListItem>
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText>dachendev@gmail.com</ListItemText>
              </ListItem>
            </List>
            <Grid container spacing={2}>
              <Button variant="contained" size="large">
                Hire Me
              </Button>
              <Button variant="outlined" size="large">
                Previous Work
              </Button>
            </Grid>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }} sx={{ textAlign: "center" }}>
            <img src="duck.jpeg" width="250" />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Hero;
