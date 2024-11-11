import Box from "@mui/material/Box";
import React from "react";

const Footer: React.FC = () => {
  return (
    <div>
      <Box sx={{ textAlign: "center" }}>
        <p>Copyright &copy; {new Date().getFullYear()} Jacob Dachenhaus</p>
      </Box>
    </div>
  );
};

export default Footer;
