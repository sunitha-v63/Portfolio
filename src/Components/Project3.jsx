import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import pic1 from '../assets/Image/image1.png';

const Project3 = () => {
    return (
        <div className="container my-5 text-center rounded">
            <div className="bg-grey text-white p-4 rounded">
                <img src={pic1} alt="Project" className="img-fluid mb-3 rounded w-100" />
                <h1 className="mb-3 text-success">Plant Shop</h1>
                <h5 className="text-start">Language using</h5>
                <p className="text-danger text-start">HTML/CSS/JavaScript/React/Bootstrap</p>
                <p className="mb-4 text-start">The Plant Shop is a comprehensive web application designed to facilitate the browsing, purchasing, and care of indoor and outdoor plants. The platform offers a user-friendly interface for customers to explore a diverse range of plants, categorized by type, care requirements, and suitability for various environments. Each plant listing provides detailed information, including care instructions, light and water requirements, and ideal placement, assisting customers in making informed decisions. The application features advanced search and filtering options, enabling users to easily find plants that match their specific needs and preferences. An integrated shopping cart and secure checkout process streamline the purchasing experience, while responsive design ensures accessibility across all devices. Additionally, the platform includes educational resources and care guides to support customers in maintaining healthy plants, fostering a community of informed and satisfied plant enthusiasts.</p>
                <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
                    <Button
                        variant="outline-light"
                        href="https://github.com/sunitha-v63/Plantshop.git"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 fs-5"
                    >
                        View Code
                    </Button>
                    <Button
                        variant="outline-light"
                        href="https://plantshop-ten.vercel.app/"
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

export default Project3;
