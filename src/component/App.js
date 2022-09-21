import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import Stack from "@mui/material/Stack";
import Typed from "react-typed";
import { useTheme } from "@mui/material/styles";
import Skeleton from "@mui/material/Skeleton";

import "./App.css";
import Navigation from "./Navigation/Navigation";
import About from "./About/About";
import Experience from "./Experience/Experience";
import Project from "./Project/Project";
import Skill from "./Skill/Skill";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

const responsivePaper = {
  margin: 1,
  flex: { xs: "100%", sm: "calc(50% - 20px)", md: "calc(33% - 20px)" },
};

const App = () => {
  const theme = useTheme();
  const [data, setData] = useState({
    educations: [],
    projects: [],
    socials: [],
    technologies: [],
    users: [],
    workExperiences: [],
  });
  const { users } = data;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("useEffect");
    axios
      .get("/info")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  const handlePressSocial = (url) => {
    window.open(url, "_blank");
  };

  const renderSocial = (social) => {
    const { _id, social_name, social_url } = social;
    let icon = <LinkedInIcon fontSize="large" color="primary" />;
    if (social_name.toLowerCase() === "github") {
      icon = <GitHubIcon fontSize="large" color="primary" />;
    } else if (social_name.toLowerCase() === "facebook") {
      icon = <FacebookIcon fontSize="large" color="primary" />;
    }

    return (
      <Avatar
        key={_id}
        sx={{
          width: 50,
          height: 50,
          backgroundColor: "white",
        }}
        onClick={() => handlePressSocial(social_url)}
      >
        {icon}
      </Avatar>
    );
  };

  return (
    <section id="home">
      <Box>
        <Navigation />
        {isLoading ? (
          <Box
            marginTop={10}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Skeleton variant="rounded" width="90%" height="85vh" />
          </Box>
        ) : (
          <>
            {users.length > 0 && (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                backgroundColor={theme.palette.primary.main}
                height="100vh"
              >
                <Stack direction="column" spacing={2} sx={{ width: "100%" }}>
                  <Box sx={{ display: "flex", flexWrap: "wrap-reverse" }}>
                    <Box
                      sx={{
                        ...responsivePaper,
                      }}
                    >
                      <Box
                        sx={{
                          marginLeft: { xs: 2, sm: 2, md: 8 },
                          marginRight: { xs: 2, sm: 2 },
                        }}
                      >
                        <Stack spacing={1}>
                          <Typography
                            variant="h2"
                            sx={{
                              color: "white",
                              fontFamily: "Poppins",
                              fontWeight: 600,
                            }}
                          >
                            {users[0].user_greeting}
                          </Typography>
                          <Typography
                            variant="h2"
                            sx={{
                              color: "white",
                              fontFamily: "Poppins",
                              fontWeight: 600,
                            }}
                          >
                            {`I'm ${users[0].user_firstname} ${users[0].user_lastname}`}
                          </Typography>
                          <Typed
                            style={{
                              color: "white",
                              fontSize: 30,
                            }}
                            strings={users[0].user_developments}
                            typeSpeed={40}
                            backSpeed={50}
                            loop
                          />
                        </Stack>
                        <Stack mt={3} direction="row" spacing={2}>
                          {data.socials.map(renderSocial)}
                        </Stack>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        ...responsivePaper,
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        marginTop: { xs: 1 },
                      }}
                    >
                      <Avatar
                        alt="avatar"
                        src={users[0].user_avatar}
                        sx={{
                          width: { xs: 250, sm: 350, md: 350 },
                          height: { xs: 250, sm: 350, md: 350 },
                        }}
                      />
                    </Box>
                  </Box>
                </Stack>
              </Box>
            )}
            <About users={users} />
            <Experience experiences={data.workExperiences} />
            <Skill technologies={data.technologies} />
            <Project projects={data.projects} />
            <Contact />
            <Footer users={users} />
          </>
        )}
      </Box>
    </section>
  );
};

export default App;
