import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import WorkIcon from "@mui/icons-material/Work";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import { useTheme } from "@mui/material/styles";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = (props) => {
  const theme = useTheme();
  const { secondary } = theme.palette;
  const { experiences } = props;

  return (
    <section id="experiences">
      <Box bgcolor="#1A2634" height="100vh">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          padding={5}
        >
          <WorkHistoryIcon fontSize="large" sx={{ color: "white" }} />
          <Typography ml={1} color="white" variant="h4">
            Work Experiences
          </Typography>
        </Stack>
        <VerticalTimeline>
          {experiences.map((experience) => (
            <VerticalTimelineElement
              key={experience._id}
              className="vertical-timeline-element--work"
              contentStyle={{ background: secondary.main, color: "#fff" }}
              contentArrowStyle={{
                borderRight: `7px solid  ${secondary.main}`,
              }}
              iconStyle={{ background: secondary.main, color: "#fff" }}
              date={experience.inclusive_date}
              icon={experience.is_employed ? <WorkIcon /> : <WorkHistoryIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {experience.job_title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {experience.company_name}
              </h4>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Box>
    </section>
  );
};

export default Experience;
