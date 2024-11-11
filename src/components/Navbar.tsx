import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const Navbar = () => {
  return (
    <Box sx={{ display: "flex", p: 2 }}>
      <div>JD</div>
      <Stack direction="row" spacing={2} sx={{ marginLeft: "auto" }}>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
      </Stack>
    </Box>
  );
};

export default Navbar;
