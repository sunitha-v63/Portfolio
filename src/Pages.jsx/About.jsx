import React from 'react';
import about from '../assets/Image/about.jpg';

function About() {
  return (
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
          <p className='fs-5'>
            Good interpersonal skills, committed, result-oriented, hard-working with a quest and zeal to learn new
            technologies. I am skilled in designing and developing. My passion lies in creating captivating website
            designs and implementing them for development. I thoroughly research and analyze the target audience and
            the client's specific requirements.
          </p>
           <p className='fs-5'>I'm a visionary web developer passionate about crafting digital experiences that not only meet user needs but anticipate them. My approach blends creative foresight with technical expertise, allowing me to design and develop websites that are both innovative and user-centric. With a keen eye on emerging trends and technologies, I strive to stay ahead of the curve, ensuring that the solutions I provide are not just current but future-ready. </p>
           <p className='fs-5 mb-5'>Personalization is at the heart of my work; I believe that every user interaction should feel intuitive and tailored, enhancing engagement and satisfaction. Whether it's building responsive interfaces, optimizing user journeys, or integrating cutting-edge features, my goal is to transform ideas into impactful digital realities. Let's collaborate to bring your vision to life and create web experiences that resonate.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
