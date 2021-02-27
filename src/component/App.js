import { useEffect, useState } from "react";
import axios from "axios";

import './App.css';

import Navigation from './Navigation/Navigation';
import Skill from "./Skill/Skill";
import Project from "./Project/Project";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Alert from "./Alert/Alert";

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isAlertVisible, setIsAlertVisible] = useState(false)
  const [isSending, setIsSending] = useState(false)

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

  const sendEmail = (data) => {
    setIsSending(true)
    axios
    .post("/sendmail", data)
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
    })
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
          <Navigation socials={data.socials} />
          
          <div>
            <section className="banner-area d-flex flex-column align-items-center justify-content-center min-vh-100" id="home">
              <div className="banner-img"
                style={{
                  backgroundImage: `url(${data.users[0].landing_page_image})`,
                }} >
              </div>
              <h1 className="display-4 text-white">
                Hi, I'm {data.users[0].user_firstname}
                <br/> 
                {data.users[0].user_lastname}
              </h1>
              <h3 className="display-5 text-warning">{data.users[0].user_title}</h3>
            </section>
          </div>

          <About user={data.users[0]} works={data.workExperiences} educations={data.educations} />
          <Skill skills={data.technologies} />
          <Project projects={data.projects} />
          <Contact user={data.users[0]} />
          <Footer user={data.users[0]} isAlertVisible={isAlertVisible} alert={showAlert} isSending={isSending} send={sendEmail} />
          
        </div>
      )}
    </div>
  );
};

export default App;
