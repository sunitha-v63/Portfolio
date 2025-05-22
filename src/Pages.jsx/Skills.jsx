import React from 'react'
import image1 from '../assets/Image/img1.png'
import image2 from '../assets/Image/img2.jpg'
import image3 from '../assets/Image/img3.png'
import image4 from '../assets/Image/img4.png'
import image5 from '../assets/Image/img5.jpeg'

function Skills() {
  return (
    <div className="container py-4 w-50 skills mt-5">
      <h2 className="text-center mb-1">SKILLS</h2>
      <h4 className="text-center mb-5">Here are some of my skills on which I have learnt</h4>
      <div className="gallery-grid ">
        <img className="box1 img-grid" src={image1} alt="img1" />
        <img className="box2 img-grid" src={image2} alt="img2" />
        <img className="box3 img-grid" src={image3} alt="img3" />
        <img className="box4 img-grid" src={image4} alt="img4" />
        <img className="box5 img-grid" src={image5} alt="img5" />
      </div>
    </div>
  )
}

export default Skills