import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import pic1 from '../assets/Image/image4.png'; 

const Project5 = () => {
  return (
    <div className="container my-5 text-center rounded">
      <div className="bg-grey text-white p-4 rounded">
        <img src={pic1} alt="Project" className="img-fluid mb-3 rounded w-100" />
        <h1 className="mb-3 text-success">Keynest Real Estate</h1>
         <h5 className="text-start">Language using</h5>
        <p className="text-danger text-start">HTML/CSS/JavaScript</p>
        <p className="mb-4 text-start">The Keynest Real Estate platform is a comprehensive web application developed to streamline the browsing, booking, and management of residential properties under the "Landmark" brand. It offers a user-friendly interface that allows prospective buyers and tenants to explore available homes, schedule viewings, and initiate the booking process seamlessly. The platform incorporates advanced search and filtering options, enabling users to find properties that match their specific criteria, such as location, price range, and amenities. High-quality images and detailed property descriptions provide an immersive experience, helping users make informed decisions. Additionally, the application features an integrated appointment scheduling system, allowing users to book property viewings in real-time, with automated confirmations and reminders to enhance the user experience. The responsive design ensures accessibility across various devices, providing a consistent and efficient experience for users on desktops, tablets, and smartphones.</p>
         <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
          <Button
            variant="outline-light"
            href="https://github.com/sunitha-d63/Website.git"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 fs-5"
          >
            View Code
          </Button>
          <Button
            variant="outline-light"
            href="https://sunitha-d63.github.io/Website/RealEstate/index.html"
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

export default Project5;
