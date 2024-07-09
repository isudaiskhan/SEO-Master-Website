import React, { useState } from 'react';
import { FaFolder, FaPlus, FaTimes  } from 'react-icons/fa';
import image1 from  '../Assets/portfolio-1.jpg';
import image2 from  '../Assets/portfolio-2.jpg';
import image3 from  '../Assets/portfolio-3.jpg';
import image4 from  '../Assets/portfolio-4.jpg';
import image5 from  '../Assets/portfolio-5.jpg';
import image6 from  '../Assets/portfolio-6.jpg';
import whiteimage from '../Assets/icon-shape-white .png'
import { RiCheckboxMultipleBlankFill } from "react-icons/ri";
import {motion} from 'framer-motion';



const Portfolio = () => {
 
    const [currentVideoIndex, setCurrentVideoIndex] = useState(-1);
    const [videoUrls] = useState([
      'https://www.youtube.com/embed/yJg-Y5byMMw?si=hznSQrNwpdG4wMoI',
      'https://www.youtube.com/embed/8VLXHyHRXjc?si=xTUKauNqvr59BDFk',
      'https://www.youtube.com/embed/tt2k8PGm-TI?si=tb7C_vuu5Yu7OM5y',
      'https://www.youtube.com/embed/tt2k8PGm-TI?si=tb7C_vuu5Yu7OM5y',
      'https://www.youtube.com/embed/tt2k8PGm-TI?si=tb7C_vuu5Yu7OM5y',
      'https://www.youtube.com/embed/tt2k8PGm-TI?si=tb7C_vuu5Yu7OM5y',
      'https://www.youtube.com/embed/tt2k8PGm-TI?si=tb7C_vuu5Yu7OM5y', 
      'https://www.youtube.com/embed/yJg-Y5byMMw?si=hznSQrNwpdG4wMoI',
      'https://www.youtube.com/embed/8VLXHyHRXjc?si=xTUKauNqvr59BDFk',
  
     ]);
    const [category, setCategory] = useState('all'); // State to track current category
    const [selectedImage, setSelectedImage] = useState(null);

    const handleIconClick = (image) => {
      setSelectedImage(image);
    };
  
    const handleCloseClick = () => {
      setSelectedImage(null);
    };
  
    const handleCategoryClick = (category) => {
      setCategory(category);
    };
  

  const images = [
    { src: image1, category: 'design', text1: 'VIP Auto Tires & Service', text2: 'eCommerce / Magento' },
    { src: image2, category: 'development', text1: 'VIP Auto Tires & Service', text2: 'Photography' },
    { src: image3, category: 'design', text1: 'VIP Auto Tires & Service', text2: 'eCommerce Magento' },
    { src: image4, category: 'development', text1: 'VIP Auto Tires & Service', text2: 'eCommerce / Magento' },
    { src: image5, category: 'design', text1: 'VIP Auto Tires & Service', text2: 'Photography' },
    { src: image6, category: 'development', text1: 'VIP Auto Tires & Service', text2: 'eCommerce / Magento' },
 
  ];

  const filteredImages = category === 'all' ? images : images.filter(image => image.category === category);


  
  return (
    <>
  
    

      <div className='py-28 mt-5 max-w-[1240px] overflow-hidden mx-auto lg:ps-5 sm:ps-10 sm:pe-10 ps-5 pe-5 lg:pe-5'>

      <motion.div
     initial={{ y: 100, opacity: 0 }} // Initial position: below its final position and hidden
      whileInView={{ y: 0, opacity: 1 }} // Move to original position (y: 0) and become fully visible when in view
      transition={{ 
    delay: 0.4, 
    y: { type: "spring", stiffness: 60 }, // Spring animation for y-axis movement
    opacity: { duration: 0.2 }, // Smooth opacity transition
    ease: "easeIn", // Easing function
    duration: 1 // Overall animation duration
  }}
      >
 <div className="flex items-center justify-center">
      {/* Icon */}
      <RiCheckboxMultipleBlankFill className="text-xl mr-3 text-[#2124B1]" />

      {/* Text */}
      <h2 className="text-xl font-semibold text-[#2124B1]">Our Projects</h2>
    </div>
    <h1 className='text-center text-4xl font-bold mt-2'>Recently Launched Projects</h1>
 </motion.div>

        <div className="flex justify-center mt-16 flex-wrap">

        <motion.button
      initial={{ scale: 0.5, opacity: 0 }} // Initial state: small size and hidden
  whileInView={{ scale: 1, opacity: 1 }} // Animate to larger size and visible when in view
  transition={{ delay: 0.2, type: "spring", stiffness: 60, duration: 1 }} // Spring animation with a delay
    onClick={() => handleCategoryClick('all')} className={`mr-4 ${category === 'all' ? 'bg-[#2124B1] text-white' : 'bg-gray-300 text-black'} px-9 py-2 rounded-md`}>All</motion.button>


         <motion.button
        initial={{ scale: 0.5, opacity: 0 }} // Initial state: small size and hidden
  whileInView={{ scale: 1, opacity: 1 }} // Animate to larger size and visible when in view
  transition={{ delay: 0.3, type: "spring", stiffness: 60, duration: 1 }} // Spring animation with a delay
           onClick={() => handleCategoryClick('design')} className={`mr-4 ${category === 'design' ? 'bg-[#2124B1] text-white' : 'bg-gray-300 text-black'} px-6 py-2 rounded-md`}>Design</motion.button>


     <motion.button
     initial={{ scale: 0.5, opacity: 0 }} // Initial state: small size and hidden
  whileInView={{ scale: 1, opacity: 1 }} // Animate to larger size and visible when in view
  transition={{ delay: 0.3, type: "spring", stiffness: 60, duration: 1 }} // Spring animation with a delay
           onClick={() => handleCategoryClick('development')} className={`mr-4 ${category === 'development' ? 'bg-[#2124B1] text-white' : 'bg-gray-300 text-black'} px-4 py-2 rounded-md`}>Development</motion.button>

          {/* Add more category buttons here */}
        </div>


        <motion.div
     initial={{ y: 150, opacity: 0 }} // Initial position: below its final position and hidden
      whileInView={{ y: 0, opacity: 1 }} // Move to original position (y: 0) and become fully visible when in view
      transition={{ 
    delay: 0.4, 
    y: { type: "spring", stiffness: 60 }, // Spring animation for y-axis movement
    opacity: { duration: 0.2 }, // Smooth opacity transition
    ease: "easeIn", // Easing function
    duration: 1 // Overall animation duration
  }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {filteredImages.map((image, index) => (
    <div key={index} className="relative mt-14 group">
      <div className="absolute inset-0 bg-transparent rounded-lg hover:bg-[#2124B1] transition-colors duration-300 group-hover:bg-[#2124B1] flex flex-col items-start justify-end">
        <div className="flex items-center mb-2 ml-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <FaFolder className='text-lg text-white' />
          <h1 className="text-white ml-2">Web Design</h1>
        </div>
        <h1 className="text-white text-2xl font-semibold mb-10 ml-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Project Name</h1>
      </div>
      <img src={image.src} className="w-full rounded-lg object-cover" alt="Video thumbnail" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="relative w-full h-full">
          <img src={whiteimage} onClick={() => handleIconClick(image.src)}  className="absolute ml-auto cursor-pointer inset-0 rounded-lg object-cover" alt="Hover Image" />
          <FaPlus  onClick={() => handleIconClick(image.src)} className="absolute top-7 right-7 text-3xl cursor-pointer text-[#2124B1]" />
        </div>
      </div>
    </div>
  ))}
</motion.div>


{selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 sm:ps-0 sm:pe-0 ps-4 pe-4 flex items-center justify-center z-50">
          <div className="relative bg-white p-2 mt-4 rounded-lg max-w-lg w-full">
            <FaTimes className="absolute -top-9 text-white right-0 text-3xl cursor-pointer" onClick={handleCloseClick} />
            <img src={selectedImage} alt="Selected" className="rounded-lg" />
          </div>
        </div>
      )}

      </div>


    </>
  );
};

export default Portfolio;