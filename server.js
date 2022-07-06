const { createServer } = require("http");
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const CONFIG = require("./config");

const port = process.env.PORT || CONFIG.PORT;
const authUser = process.env.AUTH_USER || CONFIG.AUTH_USER;
const authPass = process.env.AUTH_PASS || CONFIG.AUTH_PASS;

mongoose.connect(process.env.MONGODB_URI || CONFIG.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = require("./models/user");
const Social = require("./models/social");
const WorkExperience = require("./models/workExperience");
const Education = require("./models/education");
const Project = require("./models/project");
const Technology = require("./models/technology");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: authUser,
    pass: authPass,
  },
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.resolve(__dirname, "build")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.get("/info", async (req, res) => {
  const users = await User.find();
  const socials = await Social.find();
  const workExperiences = await WorkExperience.find().sort({ order: "desc" });
  const educations = await Education.find();
  const projects = await Project.find({ is_visible: true });
  const technologies = await Technology.find().sort({ ratings: "desc" });

  res.json({
    users,
    socials,
    workExperiences,
    educations,
    projects,
    technologies,
  });
});

app.post("/sendmail", (req, res) => {
  User.find({}, (error, users) => {
    if (error) {
      res.sendStatus(500);
    } else {
      transporter.sendMail(
        {
          from: `${req.body.name} ${req.body.email}`,
          to: users[0].user_secondary_email,
          subject: `Message from [ ${req.body.name} <${req.body.email}>]`,
          text: req.body.message,
          html: req.body.message,
        },
        (error, result) => {
          if (error) {
            res.sendStatus(500);
          } else {
            res.sendStatus(200);
          }
        }
      );
    }
  });
});

const server = createServer(app);

server.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server starting a port: ${port}`);
});
