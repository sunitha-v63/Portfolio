import React from 'react';
import one from '../assets/Image/photo.jpg';

function About() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 d-flex justify-content-center mb-4 mb-md-0">
          <img
            src={one}
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
            the client's specific requirements.
          </p>
          <div className="download-social">
            <p style={{ color: 'blue' }}>More about me...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
