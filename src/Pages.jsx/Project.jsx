import React from 'react';
import { useNavigate } from 'react-router-dom';
import pic1 from '../assets/Image/image5.png';
import pic2 from '../assets/Image/image4.png';
import pic3 from '../assets/Image/image3.png';
import pic4 from '../assets/Image/image2.png';
import pic5 from '../assets/Image/image1.png';

const projects = [
  {
    id: 1,
    title: 'BurgerQueen Resaurant',
    image: pic3,
    languages: ['HTML', 'CSS', 'JavaScript', 'React', ' Bootstrap'],
    ProjectDescription: "Developed a comprehensive web-based application enabling customers to seamlessly browse menus, reserve tables, and place orders online. The system also empowers restaurant staff to efficiently manage reservations, update menu offerings, and oversee order processing, designing user-friendly forms with validation.",
    codeLink: 'https://github.com/sunitha-v63/BurgerQueen.git',
    liveLink: 'https://burger-queen-phi.vercel.app/',
    route: "/project1"
  },
  {
    id: 2,
    title: 'Pet Adoption Shop',
    image: pic4,
    languages: ['HTML', 'CSS', 'JavaScript', 'React', ' Bootstrap'],
    ProjectDescription: "Developed a user-centric web application designed to streamline the pet adoption process by connecting potential adopters with animals in need of loving homes. The platform offers detailed pet profiles, facilitates adoption applications, and provides resources for responsible pet ownership.",
    codeLink: 'https://github.com/sunitha-v63/Petadoption.git',
    liveLink: 'https://petadoption-sandy.vercel.app/',
    route: "/project2"
  },
  {
    id: 3,
    title: 'Plant Shop',
    image: pic5,
    languages: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap'],
    ProjectDescription: 'Developed a comprehensive web application designed to facilitate the browsing, purchasing, and care of indoor and outdoor plants. The platform offers a user-friendly interface for customers to explore a diverse range of plants, categorized by type, care requirements, and suitability for indoor or outdoor environments.',
    codeLink: 'https://github.com/sunitha-v63/Plantshop.git',
    liveLink: 'https://plantshop-ten.vercel.app/',
    route: "/project3"
  },
  {
    id: 4,
    title: 'Lotus Aari work',
    image: pic1,
    languages: ['HTML', 'CSS', 'JavaScript'],
    ProjectDescription: 'The Lotus Aari Work Class offers comprehensive training in the art of Aari embroidery, focusing on the intricate Lotus design. This course is tailored for both beginners and advanced learners, providing step-by-step guidance to master the technique. My projects include implementing image galleries with filtering capabilities, designing user-friendly forms with validation systems.',
    codeLink: 'https://github.com/sunitha-d63/Website.git',
    liveLink: 'https://sunitha-d63.github.io/Website/LotusAariWork/index.html',
    route: "/project4"
  },
  {
    id: 5,
    title: 'Keynest Real Estate',
    image: pic2,
    languages: ['HTML', 'CSS', 'JavaScript'],
    ProjectDescription: 'Developed a comprehensive web application designed to facilitate the browsing, booking, and management of residential properties under the "Landmark" brand. The platform offers a user-friendly interface for prospective buyers and tenants to explore available homes, schedule viewings, and initiate the booking process seamlessly,designing user-friendly forms with validation systems.',
    codeLink: 'https://github.com/sunitha-d63/Website.git',
    liveLink: 'https://sunitha-d63.github.io/Website/RealEstate/index.html',
    route: "/project5"
  },
];

function Project() {
  const navigate = useNavigate();

  const handleImageClick = (route) => {
    navigate(route);
  };
  return (
    <>
      <div className="container project my-5">
        <h2>Projects</h2>
        <h3>using <span style={{ color: "red" }}>HTML/CSS/JavaScripts/React</span></h3>
        <p className='mt-3'>My projects include implementing image galleries with filtering capabilities, designing user-friendly forms with validation systems, and developing add-to-cart functionalities for e-commerce platforms. I have utilized various tools and technologies to enhance user experience and ensure seamless functionality. Beyond technical skills, I possess strong interpersonal abilities, am committed to delivering results, and am always eager to learn and adapt to new technologies. My passion lies in creating captivating website designs and translating them into functional, user-centric applications.</p>
      </div>
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {projects.map((project) => (
            <div className="col" key={project.id}>
              <div className="card h-100 bg-dark p-2">
                <img
                  src={project.image}
                  className="cardimg"
                  alt={`Image of ${project.title}`} onClick={() => handleImageClick(project.route)}
                  style={{ cursor: 'pointer' }}
                />
                <div className="card-body mt-3">
                  <h5 className="card-title text-center fs-4 title">{project.title}</h5>
                  <div className="card-text mt-3 title">
                    <p className='fs-5 title fst-italic'>Languages Used: </p>
                    <p>{project.languages.join(', ')}</p>
                  </div>
                  <p className='text-white'>{project.ProjectDescription}</p>
                  <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
                    <a
                      href={project.codeLink}
                      className="btn btn-outline-secondary homebtn1 fs-5 px-4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                    <a
                      href={project.liveLink}
                      className="btn btn-secondary custom-button px-4 fs-5"
                      target="_blank"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Project;
