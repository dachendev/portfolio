import React from "react";
import Box from "@mui/material/Box";

const educations = [
  {
    name: "University of Helsinki",
    tagline: "Full Stack Web Development",
    startDate: "Jun 2024",
    endDate: "Nov 2024",
  },
  {
    name: "Purdue University",
    tagline: "Bachelor of Science in Web Programming and Design",
    startDate: "Aug 2018",
    endDate: "Dec 2022",
  },
];

const Education: React.FC = () => {
  return (
    <div>
      <h2>Education</h2>
      {educations.map((e, i) => (
        <Box key={i} sx={{ p: 2 }}>
          <h3>{e.name}</h3>
          <div>{e.tagline}</div>
          <div>
            {e.startDate} - {e.endDate}
          </div>
        </Box>
      ))}
    </div>
  );
};

export default Education;
