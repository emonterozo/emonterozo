import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import ComputerIcon from "@mui/icons-material/Computer";

const Skill = (props) => {
  const { technologies } = props;
  return (
    <section id="skills">
      <Box bgcolor="whitesmoke">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          padding={5}
        >
          <ComputerIcon fontSize="large" />
          <Typography ml={1} variant="h4">
            Skills
          </Typography>
        </Stack>
        <Box>
          <Grid container spacing={2} justifyContent="center" padding={3}>
            {technologies.map((technology, index) => {
              return (
                <Grid item key={index}>
                  <Avatar
                    src={technology.technology_image}
                    sx={{
                      margin: { sm: 1, md: 2 },
                      width: 150,
                      height: 150,
                      backgroundColor: "#1A2634",
                      boxShadow: "0 0px 6px 1px #2C2E43",
                    }}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </section>
  );
};

export default Skill;
