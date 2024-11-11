import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

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
      <Timeline>
        {educations.map((e, i) => (
          <TimelineItem key={i}>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <h3>{e.name}</h3>
              <div>{e.tagline}</div>
              <div>
                {e.startDate} - {e.endDate}
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default Education;
