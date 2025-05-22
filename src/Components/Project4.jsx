import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import pic1 from '../assets/Image/image5.png';

const Project4 = () => {
  return (
    <div className="container my-5 text-center rounded">
      <div className="bg-grey text-white p-4 rounded">
        <img src={pic1} alt="Project" className="img-fluid mb-3 rounded w-100" />
        <h1 className="mb-3 text-success">Lotus Aari work</h1>
        <h5 className="text-start">Language using</h5>
        <p className="text-danger text-start">HTML/CSS/JavaScript</p>
        <p className="mb-4 text-start">The Lotus Aari Work Class offers comprehensive training in the art of Aari embroidery, focusing on the intricate Lotus design. This course is tailored for both beginners and advanced learners, providing step-by-step guidance to master the technique. The curriculum encompasses a wide range of embroidery techniques, including basic chain stitch practices, various silk thread stitches, Zardozi work, mirror work, cutwork, and 3D & 5D patchwork. Students also learn blouse marking, sketching, and tracing, enhancing their design skills. The course is designed to be flexible, allowing learners to access materials anytime, anywhere, and on any device. Individual attention is provided to each student, with daily doubt-solving sessions via WhatsApp. Upon completion, students receive a government-registered certificate, empowering them to start their own embroidery business from home. In my projects, I have implemented image galleries with filtering capabilities and designed user-friendly forms with validation systems to enhance the learning experience.</p>
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
            href="https://sunitha-d63.github.io/Website/LotusAariWork/index.html"
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

export default Project4;
