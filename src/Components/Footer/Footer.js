import React,{useState, useEffect} from 'react'
import {FaFacebookF, FaInstagram } from 'react-icons/fa';
import {AiOutlineTwitter, AiFillLinkedin} from 'react-icons/ai';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import footerimage from '../Assets/footer.png'
import { MdKeyboardArrowRight } from "react-icons/md";
import {motion} from 'framer-motion';
import image1 from '../Assets/portfolio-1.jpg'
import image2 from '../Assets/portfolio-2.jpg'
import image3 from '../Assets/portfolio-3.jpg'
import image4 from '../Assets/portfolio-4.jpg'
import image5 from '../Assets/portfolio-5.jpg'
import image6 from '../Assets/portfolio-6.jpg'
import { FaPaperPlane } from "react-icons/fa";




const Footer = () => {

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array ensures that effect runs only once after mount

  const initialXLeft = windowSize.width >= 640 ? -200 : -100; // Initial X position for left animation
  const initialXRight = windowSize.width >= 640 ? 200 : 100; // Initial X position for right animation

  const initialGreen = {
    x: initialXLeft, // Set initial position for green element
    opacity: 0
  };

  const initialRed = {
    x: initialXRight, // Set initial position for red element
    opacity: 0
  };

  return (
    <>




  <div
        className='bg-no-repeat py-8 bg-[#2124B1]'
        style={{ backgroundImage: `url(${footerimage})` }}>

       <div className='md:px-0 px-5 pt-5'>
  
      <div className='max-w-[1240px] mx-auto px-3 text-gray-300 overflow-hidden'>
      
    <div className='flex flex-wrap justify-center gap-6'>

     
      <div className='w-full lg:w-1/4 md:w-2/5'>
      <motion.div
    initial={initialGreen} // Initial position: off-screen to the left, hidden, starting from a greater distance
    whileInView={{ x: 0, opacity: 1 }} // Move to original position (x: 0) and become fully visible when in view
    transition={{ 
    delay: 0.2, 
    x: { type: "spring", stiffness: 60 }, // Spring animation for x-axis movement
    opacity: { duration: 1 }, // Smooth opacity transition
    ease: "easeIn", // Easing function
    duration: 1 // Overall animation duration
  }}

         className='space-y-3 mt-12'>
        <h6 className='text-[#FFFFFF] text-xl font-bold ps-2'>Get In Touch</h6>
          <div className="mt-20 text-white py-4 space-y-3">
        <div className="flex items-center space-x-2 text-white">
          <FiMapPin className='ml-2' />
          <span >123 Street, New York, USA</span>
        </div>
        <div className="flex items-center space-x-2 text-white">
          <FiPhone className='ml-2' />
          <span>+012 345 67890</span>
        </div>
        <div className="flex items-center space-x-2 text-white">
          <FiMail className='ml-2' />
          <span>example@gmail.com</span>
        </div>
      </div>
      </motion.div>
        
        <div className="flex items-center justify-start">
      <div className='md:flex items-center py-6 text-center'>
      <motion.div
      initial={initialRed} // Initial position: off-screen to the left, hidden, starting from a greater distance
      whileInView={{ x: 0, opacity: 1 }} // Move to original position (x: 0) and become fully visible when in view
      transition={{ 
      delay: 0.2, 
      x: { type: "spring", stiffness: 60 }, // Spring animation for x-axis movement
      opacity: { duration: 1 }, // Smooth opacity transition
      ease: "easeIn", // Easing function
      duration: 1 // Overall animation duration
    }}
               className='flex justify-end text-white space-x-3 flex-wrap ps-1'>
                  <a href='#' className='px-2 py-2 group rounded-full border-2 duration-300 border-white hover:bg-white'>
                      <FaFacebookF className='group-hover:text-[#2124B1] text-white text-xl' />
                  </a>
                  <a href='#' className='px-2 py-2 group rounded-full border-2 duration-300 border-white hover:bg-white'>
                      <AiOutlineTwitter className='group-hover:text-[#2124B1] text-white text-xl' />
                  </a>
  
                  <a href='#' className='px-2 py-2 group rounded-full border-2 duration-300 border-white hover:bg-white'>
                      <FaInstagram className='group-hover:text-[#2124B1] text-white text-xl' />
                  </a>
  
                  <a href='#' className='px-2 py-2 group rounded-full border-2 duration-300 border-white hover:bg-white'>
                      <AiFillLinkedin className='group-hover:text-[#2124B1] text-white text-xl' />
                  </a>
              </motion.div>
          </div>
      </div>

      

      </div>         
   

  
      <div className='w-full lg:w-1/6 md:w-2/5'>
      <motion.div
    initial={initialGreen} // Initial position: off-screen to the left, hidden, starting from a greater distance
    whileInView={{ x: 0, opacity: 1 }} // Move to original position (x: 0) and become fully visible when in view
    transition={{ 
    delay: 0.2, 
    x: { type: "spring", stiffness: 60 }, // Spring animation for x-axis movement
    opacity: { duration: 1 }, // Smooth opacity transition
    ease: "easeIn", // Easing function
    duration: 1 // Overall animation duration
  }}
       className='space-y-3 mt-12'>
      <h6 className='text-[#FFFFFF] text-xl font-bold ps-2'>Popular Link</h6>
          <ul>
  <a href='#' className='flex items-center group'>
    <MdKeyboardArrowRight className='mr-1 text-xl text-white' />
    <li className='py-2 text-white group-hover:tracking-widest duration-500'>About Us</li>
  </a>
  <a href='#' className='flex items-center group'>
    <MdKeyboardArrowRight className='mr-1 text-xl text-white' />
    <li className='py-2 text-white group-hover:tracking-widest duration-500'>Contact Us</li>
  </a>
  <a href='#' className='flex items-center group'>
    <MdKeyboardArrowRight className='mr-1 text-xl text-white' />
    <li className='py-2 text-white group-hover:tracking-widest duration-500'>Privacy Policy</li>
  </a>
  <a href='#' className='flex items-center group'>
    <MdKeyboardArrowRight className='mr-1 text-xl text-white' />
    <li className='py-2 text-white group-hover:tracking-widest duration-500'>Terms & Condition</li>
  </a>

  <a href='#' className='flex items-center group'>
    <MdKeyboardArrowRight className='mr-1 text-xl text-white' />
    <li className='py-2 text-white group-hover:tracking-widest duration-500'>Careers</li>
  </a>
</ul>
        </motion.div>
      </div>


      <div className='w-full lg:w-1/4 md:w-2/5 overflow-hidden'>
      <motion.div
    initial={initialRed} // Initial position: off-screen to the left, hidden, starting from a greater distance
    whileInView={{ x: 0, opacity: 1 }} // Move to original position (x: 0) and become fully visible when in view
    transition={{ 
    delay: 0.2, 
    x: { type: "spring", stiffness: 60 }, // Spring animation for x-axis movement
    opacity: { duration: 1 }, // Smooth opacity transition
    ease: "easeIn", // Easing function
    duration: 1 // Overall animation duration
  }}
     className='space-y-3 mt-12'>
        <h6 className='text-[#FFFFFF] text-xl font-bold ps-3'>Project Gallery</h6>
        <div className="flex flex-wrap ps-4">
      <div className="flex justify-center items-center flex-wrap space-x-2 md:mb-4 md:mt-3">
        {/* Images for the first row */}
        <img src={image1} alt="Image 1" className="w-16 h-16" />
        <img src={image2} alt="Image 2" className="w-16 h-16" />
        <img src={image3} alt="Image 3" className="w-16 h-16" />
      </div>
      <div className="flex justify-center flex-wrap items-center md:ps-0 sm:ps-2 space-x-2">
        {/* Images for the second row */}
        <img src={image4} alt="Image 5" className="w-16 h-16" />
        <img src={image5}  alt="Image 6" className="w-16 h-16" />
        <img src={image6} alt="Image 7" className="w-16 h-16" />
      </div>
    </div>
      </motion.div>
    </div>
        

        <motion.div
    initial={initialRed} // Initial position: off-screen to the left, hidden, starting from a greater distance
    whileInView={{ x: 0, opacity: 1 }} // Move to original position (x: 0) and become fully visible when in view
    transition={{ 
    delay: 0.2, 
    x: { type: "spring", stiffness: 60 }, // Spring animation for x-axis movement
    opacity: { duration: 1 }, // Smooth opacity transition
    ease: "easeIn", // Easing function
    duration: 1 // Overall animation duration
  }}
         className=" lg:w-1/4 md:w-2/5 w-full mt-12 md:mb-0 md:mr-4 lg:ps-0 md:ps-5">
        <h2 className="text-xl font-bold text-white">Newsletter</h2>
        <p className="text-white mb-7 mt-4">Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulpu.</p>
         {/* Input field with icon */}
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Enter Your Email"
          className="border border-gray-300 text-black text-lg placeholder:text-gray-500 rounded-full py-3 px-6 w-full"
        />
        <FaPaperPlane className="absolute top-0 text-2xl cursor-pointer right-0 mt-3.5 mr-5 text-[#2124B1]" />
      </div>

      </motion.div>

    </div>


      <div className='w-full lg:w-1/3 md:w-2/5 lg:px-3 overflow-hidden'>

      </div>
    </div> 
  </div>
  
          <div className='tracking-wider text-start mx-auto max-w-[1240px] mt-24 lg:px-8 px-0 overflow-hidden'>
          <div className="flex flex-col lg:flex-row lg:space-y-0 space-y-5">
          <motion.div
          initial={initialGreen} // Initial position: off-screen to the left, hidden, starting from a greater distance
          whileInView={{ x: 0, opacity: 1 }} // Move to original position (x: 0) and become fully visible when in view
          transition={{ 
          delay: 0.2, 
          x: { type: "spring", stiffness: 60 }, // Spring animation for x-axis movement
          opacity: { duration: 1 }, // Smooth opacity transition
          ease: "easeIn", // Easing function
          duration: 1 // Overall animation duration
        }}
              className="lg:w-7/12 lg:text-start text-center">
              <h1 className='text-white'>Copyright © 2024 All rights reserved | Developed by Sudais Khan .</h1>
              </motion.div>
              <motion.div
            initial={initialRed} // Initial position: off-screen to the left, hidden, starting from a greater distance
            whileInView={{ x: 0, opacity: 1 }} // Move to original position (x: 0) and become fully visible when in view
            transition={{ 
            delay: 0.2, 
            x: { type: "spring", stiffness: 60 }, // Spring animation for x-axis movement
            opacity: { duration: 1 }, // Smooth opacity transition
            ease: "easeIn", // Easing function
            duration: 1 // Overall animation duration
          }}
               className="lg:w-5/12 flex flex-wrap lg:justify-end justify-center space-x-5">
        <a href='#' className='border-r pe-5 text-white'>Home</a>
        <a href='#' className='border-r pe-5 text-white'>Cookies</a>
        <a href='#' className='border-r pe-5 text-white'>Help</a>
        <a href='#' className='text-white'>FQAs</a>
         </motion.div>
          </div>

     </div>
     </div>
    
    </>
  )
}

export default Footer