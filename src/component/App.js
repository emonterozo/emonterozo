import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

import Skill from "./Skill/Skill";
import Project from "./Project/Project";
import About from "./About/About";
import Alert from "./Alert/Alert";

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isAlertVisible, setIsAlertVisible] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const name = useRef(null);
  const email = useRef(null);
  const message = useRef(null);

  useEffect(() => {
    console.log('useEffect')
    getData();
  },[]);

  const getData = () => {
    axios
    .get("/info")
    .then((res) => {
      setData(res.data);
      setIsLoading(false);
    })
    .catch((err) => {
      throw err;
    });
  }

  const sendEmail = (e) => {
    e.preventDefault()
    setIsSending(true)
    axios
    .post("/sendmail", {
     name: name.current.value,
     email: email.current.value,
     message: message.current.value
    })
    .then((res) => {
      setIsSending(false)
      if(res.status === 200) {
        setIsSuccess(true)
        setIsAlertVisible(true)
      } else {
        setIsSuccess(false)
        setIsAlertVisible(true)
      }

      setTimeout(() => {
        setIsAlertVisible(false)
      }, 5000);
    })
    .catch((err) => {
      throw err;
    });
  }

  const showAlert = () => {
    return (
      isSuccess ? <Alert message="We recieved your message. Thank you." type="alert-success" /> :
      <Alert message="Something went wrong, Please try again." type="alert-danger" />
    )
  }


  return (
    <div>
      {isLoading && <div id="loader"></div>}
      {!isLoading && (
        <div>
          <nav class="fixed-top navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
              <a class="navbar-brand" href="#ab">
                e.monterozo
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                  {data.socials.map((social) => (
                    <li class="nav-item ml-4 socials">
                      <a class="nav-link" href={social.social_url} target="_blank">
                        <i
                          class={social.icon_name}
                        />
                      </a>
                    </li>
                  ))}
                </ul>
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="#home">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#about">
                      About
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#skills">
                      Skills
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#projects">
                      Projects
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <section class="banner-area" id="home">
            <div
              class="banner-img"
              style={{
                backgroundImage: `url(${data.users[0].landing_page_image})`,
              }}
            ></div>
            <h1>Hi, I'm {data.users[0].user_firstname} </h1>
            <h1>{data.users[0].user_lastname}</h1>
            <h3>{data.users[0].user_title}</h3>
          </section>

          <About
            user={data.users[0]}
            works={data.workExperiences}
            educations={data.educations}
          />
          <Skill skills={data.technologies} />
          <Project projects={data.projects} />

          <section class="contact-area" id="contact">
            <h3 class="section-title">Contact</h3>
            <ul class="contact-content">
              <li>
                <i class="fa fa-map-marker text-danger"></i>
                <p>{data.users[0].user_address}</p>
              </li>
              <li>
                <i class="fa fa-phone text-danger"></i>
                <p>{data.users[0].user_contact}</p>
              </li>
              <li>
                <i class="fa fa-envelope text-danger"></i>
                <p>{data.users[0].user_primary_email}</p>
              </li>
            </ul>
          </section>

          <footer class="bg-dark text-white">
            <div class="container-fluid p-3">
              <div class="row align-items-center">
                <div class="col-md-6">
                  <h3 class="text-center">Thank you for visiting!</h3>
                  <h5 class="text-center text-warning">Design & Developed
                  
                  by {`${data.users[0].user_firstname} ${data.users[0].user_lastname}`}</h5>
                </div>
                <div class="col-md-6">
                {
                  isAlertVisible &&
                    showAlert()
                }
                <form onSubmit={sendEmail}>
                <div class="input-group mb-2">
                <input class="form-control mr-2" type="text" placeholder="Your Name" ref={name} maxLength="30" required />
                <input class="form-control ml-2" type="email" placeholder="Your Email" ref={email} maxLength="30" required />
                </div>
                <textarea
                class="form-control"
                ref={message}
                placeholder="Your Message"
                required
                rows="4" />
                {
                  isSending ?  <button class="btn btn-primary btn-block p-2 mt-2" type="button">
                  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span class="sr-only">Loading...</span> </button> :
                   <button type="submit" class="btn btn-primary btn-block p-2 mt-2"><i class="fa fa-envelope"></i> Send Message</button>
                }
                </form>
                </div>
              </div>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
};

export default App;
