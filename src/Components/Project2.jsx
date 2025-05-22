import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import pic1 from '../assets/Image/image2.png';

const Project2 = () => {
  return (
    <div className="container my-5 text-center rounded">
      <div className="bg-grey text-white p-4 rounded">
        <img src={pic1} alt="Project" className="img-fluid mb-3 rounded w-100" />
        <h1 className="mb-3 text-success">Pet Adoption Shop</h1>
         <h5 className="text-start">Language using</h5>
        <p className="text-danger text-start">HTML/CSS/JavaScript/React/Bootstrap</p>
        <p className="mb-4 text-start">The Pet Adoption Shop is a user-centric web application designed to streamline the pet adoption process by connecting potential adopters with animals in need of loving homes. The platform offers detailed pet profiles, facilitates adoption applications, and provides resources for responsible pet ownership. Each adoptable animal has a detailed profile showcasing high-quality images, behavioral traits, health status, and compatibility information, enabling potential adopters to make informed decisions. Users can easily search for pets based on criteria such as species, breed, age, and location, streamlining the process of finding a suitable companion. The platform allows users to submit adoption applications directly through the website, facilitating a seamless adoption process. A dedicated section provides articles and guidelines on responsible pet ownership, including care tips, training advice, and health considerations.</p>
         <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
          <Button
            variant="outline-light"
            href="https://github.com/sunitha-v63/Petadoption.git"
            target="_blank"
            rel="noopener noreferrer"
           className="px-5 py-2 fs-5"
          >
            View Code
          </Button>
          <Button
            variant="outline-light"
            href="https://petadoption-sandy.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 fs-5"
          >
            Live Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Project2;
