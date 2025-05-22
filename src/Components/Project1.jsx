import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import pic1 from '../assets/Image/project1.png';

const Project1 = () => {
  return (
    <div className="container my-5 text-center rounded">
      <div className=" text-white p-4 rounded">
        <img src={pic1} alt="Project" className="img-fluid mb-3 rounded w-100" />
        <h1 className="mb-3 text-success">BurgerQueen Restaurant</h1>
        <h5 className="text-start">Language using</h5>
        <p className="text-danger text-start">HTML/CSS/JavaScript/React/Bootstrap</p>
        <p className="mb-4 text-start">
          The BurgerQueen Restaurant web application is a comprehensive platform designed to streamline both customer interactions and restaurant operations. Customers can seamlessly browse an up-to-date digital menu, place orders online, and reserve tables—all from the comfort of their devices. The system also empowers restaurant staff to efficiently manage reservations, update menu offerings, and oversee order processing. Beyond these core features, the application offers real-time inventory tracking to prevent shortages and reduce waste. Staff scheduling tools help optimize labor costs, while integrated payment processing supports various methods, including credit cards and digital wallets. The system's analytics dashboard provides valuable insights into sales trends, customer preferences, and operational bottlenecks, enabling data-driven decision-making. Additionally, the platform supports customer relationship management (CRM) functionalities, allowing for personalized marketing campaigns and loyalty programs that enhance customer retention. By integrating with third-party delivery services, the application extends its reach, offering customers multiple ordering options. The inclusion of contactless dining features, such as QR code-based menus and ordering systems, ensures a safe and convenient dining experience. In essence, the BurgerQueen Restaurant web application serves as an all-in-one solution that enhances operational efficiency, improves customer satisfaction, and drives business growth.
        </p>
        <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
          <Button
            variant="outline-light"
            href="https://github.com/sunitha-v63/BurgerQueen.git"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 fs-5"
          >
            View Code
          </Button>
          <Button
            variant="outline-light"
            href="https://burger-queen-phi.vercel.app/"
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

export default Project1;
