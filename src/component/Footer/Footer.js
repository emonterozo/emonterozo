import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import Divider from "@mui/material/Divider";

const responsiveColumn = {
  margin: 1,
  flex: { xs: "100%", sm: "calc(50% - 20px)", md: "calc(33% - 20px)" },
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
};

const Footer = (props) => {
  const { users } = props;
  return (
    <Box bgcolor="#1A2634" padding={3}>
      <Stack direction="column" spacing={2} sx={{ width: "100%" }}>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <Box sx={responsiveColumn}>
            <Typography variant="h6" color="white" textAlign="center">
              Thank you for visiting my personal portfolio website.
            </Typography>
          </Box>
          <Box sx={responsiveColumn}>
            <Stack spacing={1}>
              <Typography
                textAlign="center"
                variant="h5"
                marginY={1}
                color="secondary.light"
              >
                Contact Info
              </Typography>
              <Stack direction="row" spacing={1} alignItems="center">
                <PhoneEnabledIcon sx={{ color: "white" }} />
                <Typography variant="h6" color="white">
                  {users[0].user_contact}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <EmailIcon sx={{ color: "white" }} />
                <Typography variant="h6" color="white">
                  {users[0].user_primary_email}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <PlaceIcon sx={{ color: "white" }} />
                <Typography variant="h6" color="white">
                  {users[0].user_address}
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>
      <Divider sx={{ marginY: 3, backgroundColor: "whitesmoke" }} />
      <Typography
        display="flex"
        justifyContent="center"
        variant="h6"
        color="white"
      >
        Have a great day
      </Typography>
    </Box>
  );
};

export default Footer;
