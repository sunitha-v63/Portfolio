import React from 'react';
import one from '../assets/Image/photo.jpg';
import About from './About';
import Contact from './Contact';
import Skills from './Skills';
import Project from './Project';
import about from '../assets/Image/about.jpg';
import { useNavigate } from 'react-router-dom';
import Visionary from './Visionary';
import Education from './Education';
function Home(props) {
  const navigate = useNavigate();
  return (
    <>
      <div className="container mt-5 home-container">
        <div className="card border-0 home">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 d-flex flex-column align-items-center align-items-md-start text-center text-md-start">
              <div className="card border-0 home">
                <h1 className="mb-3">
                  Hi, I'm <span className="title">{props.name}</span>
                </h1>
                <h3 className="mb-3 fst-italic">{props.role}</h3>
              </div>
              <p className="fs-5">
                Hi, I am looking for an innovative and challenging software development and testing environment which
                can fully utilize my capabilities and to be a dynamic software professional working
                systematically, building good logic to be globally competitive following the perfect principles of
                time and quality techniques.
              </p>
              <div className="d-flex gap-3 justify-content-center justify-content-md-start mt-3">
                <button className="btn btn-outline-secondary homebtn1 fs-6">
                  Download CV
                </button>
                <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                  <i className="bi bi-facebook fs-4 text-white"></i>
                </a>
                <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                  <i className="bi bi-whatsapp fs-4 text-white"></i>
                </a>
                <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                  <i className="bi bi-linkedin fs-4 text-white"></i>
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center mt-4 mt-md-0">
              <img
                src={one}
                alt="Profile"
                className="img-fluid rounded-circle border border-primary"
                style={{ maxWidth: '300px' }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* about */}
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 d-flex justify-content-center mb-4 mb-md-0">
            <img
              src={about}
              alt="Profile"
              className="img-fluid rounded-circle border border-primary"
              style={{ maxWidth: '300px' }}
            />
          </div>
          <div className="col-12 col-md-6 about">
            <h1>About Me</h1>
            <h3>
              Full Stack <span>Developer</span>
            </h3>
            <p>
              Good interpersonal skills, committed, result-oriented, hard-working with a quest and zeal to learn new
              technologies. I am skilled in designing and developing. My passion lies in creating captivating website
              designs and implementing them for development. I thoroughly research and analyze the target audience and
              the client's specific requirements. </p>
            <div className="download-social">
              <button
                className="btn btn-outline-secondary homebtn1 fs-6"
                onClick={() => navigate('/about')}
              >
                View More <i className="bi bi-arrow-right ms-3"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Skills />
      <Visionary />
      <Project />
      <Education />
      <Contact />
    </>
  );
}

export default Home;
