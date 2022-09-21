import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import ImageIcon from "@mui/icons-material/Image";
import CodeIcon from "@mui/icons-material/Code";
import DownloadIcon from "@mui/icons-material/Download";
import useMediaQuery from "@mui/material/useMediaQuery";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import ImageListItem from "@mui/material/ImageListItem";
import ImageList from "@mui/material/ImageList";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";

const Project = (props) => {
  const theme = useTheme();
  const isMatch = useMediaQuery("(min-width:450px)");
  const isPreviewMatch = useMediaQuery("(min-width:600px)");
  const { projects } = props;
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [images, setImages] = useState([]);

  const handleClose = () => {
    setIsPreviewOpen(false);
    setImages([]);
  };

  const handlePressPreview = (preview) => {
    setIsPreviewOpen(true);
    setImages(preview);
  };

  return (
    <section id="projects">
      <Dialog
        open={isPreviewOpen}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        width={500}
      >
        <DialogTitle>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            Preview{" "}
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Stack>
        </DialogTitle>

        <DialogContent>
          <ImageList cols={isPreviewMatch ? 3 : 2}>
            {images.map((item) => (
              <ImageListItem>
                <img src={item} alt="preview" loading="lazy" />
              </ImageListItem>
            ))}
          </ImageList>
        </DialogContent>
      </Dialog>
      <Box bgcolor="whitesmoke">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          padding={5}
        >
          <CodeIcon fontSize="large" />
          <Typography ml={1} variant="h4">
            Projects
          </Typography>
        </Stack>
        <Box>
          <Grid container spacing={2} justifyContent="center" padding={3}>
            {projects.map((project, index) => {
              const {
                project_banner,
                project_name,
                project_tags,
                project_description,
                preview,
                project_code,
                project_demo,
              } = project;
              return (
                <Grid item key={project._id}>
                  <Card
                    key={index}
                    sx={{
                      maxWidth: isMatch ? 400 : 360,
                      height: 530,
                      boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
                    }}
                  >
                    <CardMedia
                      sx={{ paddingTop: "56.25%" }}
                      image={project_banner}
                    />
                    <CardContent
                      sx={{
                        textAlign: "left",
                        padding: 3,
                        height: "100%",
                      }}
                    >
                      <Typography variant="h6" gutterBottom>
                        {project_name}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "left",
                          flexWrap: "nowrap",
                          listStyle: "none",
                          marginY: 1,
                          overflow: "auto",
                        }}
                      >
                        {project_tags.map((tag, index) => {
                          return (
                            <li key={index}>
                              <Chip
                                size="small"
                                label={tag}
                                sx={{ margin: 1 }}
                              />
                            </li>
                          );
                        })}
                      </Box>
                      <Typography variant="body2" height="25%">
                        {project_description}
                      </Typography>
                      <Divider sx={{ marginX: 2 }} light />
                      <Stack
                        direction="row"
                        spacing={1}
                        justifyContent="center"
                        alignItems="center"
                        marginY={1}
                      >
                        <Button
                          startIcon={isMatch ? <ImageIcon /> : null}
                          sx={{
                            width: 120,
                            textTransform: "none",
                            bgcolor: theme.palette.secondary.main,
                          }}
                          variant="contained"
                          onClick={() => handlePressPreview(preview)}
                        >
                          Preview
                        </Button>
                        <Button
                          startIcon={isMatch ? <CodeIcon /> : null}
                          sx={{
                            width: 120,
                            textTransform: "none",
                            bgcolor: theme.palette.secondary.main,
                          }}
                          variant="contained"
                          href={project_code}
                          target="_blank"
                        >
                          Code
                        </Button>
                        <Button
                          startIcon={isMatch ? <DownloadIcon /> : null}
                          variant="contained"
                          sx={{
                            width: 120,
                            textTransform: "none",
                            bgcolor: theme.palette.secondary.main,
                          }}
                          href={project_demo}
                          target="_blank"
                        >
                          Download
                        </Button>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </section>
  );
};

export default Project;
