import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";

const Footer: React.FC = () => {
  return (
    <Container>
      <Box sx={{ textAlign: "center" }}>
        <p>Copyright &copy; {new Date().getFullYear()} Jacob Dachenhaus</p>
      </Box>
    </Container>
  );
};

export default Footer;
