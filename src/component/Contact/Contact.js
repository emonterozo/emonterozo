import React, { useState, useReducer, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import MessageIcon from "@mui/icons-material/Message";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import SendIcon from "@mui/icons-material/Send";
import useMediaQuery from "@mui/material/useMediaQuery";
import axios from "axios";
import { isEmpty } from "lodash";
import { useTheme } from "@mui/material/styles";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";

const photo = require("../../assests/3343839.jpg").default;

const ACTION = {
  SEND: "SEND",
  SEND_FAILED: "SEND_FAILED",
  SEND_SUCCESS: "SEND_SUCCESS",
  SEND_COMPLETED: "SEND_COMPLETED",
};

const initialState = {
  isLoading: false,
  isSuccess: false,
  isAlertVisible: false,
  message: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.SEND:
      return {
        ...initialState,
        isLoading: true,
      };
    case ACTION.SEND_FAILED:
      return {
        isAlertVisible: true,
        isLoading: false,
        isSuccess: false,
        message: "Something went wrong. Please try again",
      };
    case ACTION.SEND_SUCCESS:
      return {
        isAlertVisible: true,
        isSuccess: true,
        isLoading: false,
        message: "Will get back to you soon. Thank you.",
      };
    case ACTION.SEND_COMPLETED:
      return {
        ...initialState,
      };
    default:
      return initialState;
  }
};

const initialUserState = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery("(min-width:700px)");
  const [state, dispatch] = useReducer(reducer, initialState);
  const [user, setUser] = useState(initialUserState);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({ type: ACTION.SEND_COMPLETED });
    }, 3000);

    return () => clearTimeout(timer);
  }, [state.isAlertVisible]);

  const send = () => {
    if (!isEmpty(user.name) && !isEmpty(user.email) && !isEmpty(user.message)) {
      dispatch({ type: ACTION.SEND });
      axios
        .post("/sendmail", user)
        .then(() => {
          dispatch({ type: ACTION.SEND_SUCCESS });
          setUser(initialUserState);
        })
        .catch(() => {
          dispatch({ type: ACTION.SEND_FAILED });
        });
    }
  };

  const handleTextChange = (value, key) => {
    setUser({
      ...user,
      [key]: value,
    });
  };

  return (
    <section id="contact">
      <Box bgcolor="#e4ecfb">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          padding={5}
        >
          <HeadsetMicIcon fontSize="large" />
          <Typography ml={1} variant="h4">
            Get In Touch
          </Typography>
        </Stack>
        <Box justifyContent="center" display="flex" paddingBottom={5}>
          <Paper
            elevation={10}
            sx={{
              width: { lg: "75%", sm: "90%", xs: "95%" },
              height: 400,
              padding: { xs: 2, sm: 5 },
              borderRadius: 3,
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Grid container spacing={2}>
              {isMatch && (
                <Grid
                  item
                  xs={5}
                  alignItems="center"
                  justifyContent="center"
                  display="flex"
                >
                  <img
                    alt="sd"
                    style={{ width: "90%", height: "90%" }}
                    src={photo}
                  />
                </Grid>
              )}
              <Grid item xs={isMatch ? 7 : 12}>
                {state.isAlertVisible && (
                  <Alert
                    variant="filled"
                    severity={state.isSuccess ? "success" : "error"}
                    sx={{ marginY: 1 }}
                  >
                    {state.message}
                  </Alert>
                )}
                <Stack spacing={1}>
                  <TextField
                    placeholder="Name"
                    sx={{
                      width: "100%",
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                    value={user.name}
                    onChange={(event) =>
                      handleTextChange(event.target.value, "name")
                    }
                  />
                  <TextField
                    placeholder="Email"
                    sx={{
                      width: "100%",
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                    value={user.email}
                    onChange={(event) =>
                      handleTextChange(event.target.value, "email")
                    }
                  />
                  <TextField
                    multiline
                    rows={5}
                    placeholder="Message"
                    sx={{
                      width: "100%",
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment sx={{ position: "absolute", top: 27 }}>
                          <MessageIcon />
                        </InputAdornment>
                      ),
                    }}
                    inputProps={{
                      style: { marginLeft: 30 },
                    }}
                    variant="outlined"
                    value={user.message}
                    onChange={(event) =>
                      handleTextChange(event.target.value, "message")
                    }
                  />
                  <LoadingButton
                    onClick={send}
                    endIcon={<SendIcon />}
                    loading={state.isLoading}
                    loadingPosition="center"
                    variant="contained"
                    sx={{
                      bgcolor: theme.palette.secondary.main,
                    }}
                  >
                    Send
                  </LoadingButton>
                </Stack>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Box>
    </section>
  );
};

export default Contact;
