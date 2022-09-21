import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import renderHTML from "react-render-html";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import PersonIcon from "@mui/icons-material/Person";

const responsivePaper = {
  flex: { xs: "100%", sm: "calc(50% - 20px)", md: "calc(33% - 20px)" },
};

const About = (props) => {
  const theme = useTheme();
  const { users } = props;
  return (
    <section id="about">
      <Box>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          padding={5}
        >
          <PersonIcon fontSize="large" />
          <Typography ml={1} variant="h4">
            About Me
          </Typography>
        </Stack>
        <Box height="100%" display="flex" justifyContent="center">
          <Stack direction="column" spacing={2} sx={{ width: "100%" }}>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              <Box
                sx={{
                  ...responsivePaper,
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  paddingBottom: { md: 5 },
                }}
              >
                <Box
                  elevation={3}
                  sx={{
                    width: { xs: 280, sm: 280, md: 500 },
                    height: { xs: 300, sm: 500, md: 500 },
                    borderRadius: 3,
                    boxShadow: 6,
                    backgroundSize: "cover",
                    backgroundImage: `url(${users[0].user_image})`,
                  }}
                />
              </Box>
              <Box
                sx={{
                  ...responsivePaper,
                  padding: 5,
                }}
              >
                <Box>
                  <Stack spacing={1}>
                    <Typography variant="body1">
                      {renderHTML(users[0].user_summary)},
                    </Typography>
                    <Button
                      elevation={20}
                      sx={{
                        width: 150,
                        textTransform: "none",
                        bgcolor: theme.palette.secondary.dark,
                      }}
                      href={users[0].user_resume}
                      target="_blank"
                      variant="contained"
                      endIcon={<KeyboardArrowRightIcon />}
                    >
                      Resume
                    </Button>
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Box>
    </section>
  );
};

export default About;
