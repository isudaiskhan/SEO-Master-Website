import React,{useState,useEffect} from 'react'
import image1 from '../Assets/about.jpg'
import { FaCheck, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { RiCheckboxMultipleBlankFill } from "react-icons/ri";
import {motion} from 'framer-motion';




const About = () => {
    const [experience, setExperience] = useState({
        years: 0,
        clients: 0,
        projects: 0,
      });
    
      useEffect(() => {
        const durations = {
          years: 20, // 1 second
          clients: 10, // 2 seconds
          projects: 15, // 3 seconds
        };
    
        const resetExperience = () => {
          setExperience({
            years: 0,
            clients: 0,
            projects: 0,
          });
        };
    
        const intervals = Object.keys(experience).map(property => {
          return setInterval(() => {
            setExperience(prevExperience => ({
              ...prevExperience,
              [property]: Math.min(prevExperience[property] + 1, property === 'years' ? 200 : property === 'clients' ? 400 : 250),
            }));
          }, durations[property]);
        });
    
        // Add event listener for visibility change
        document.addEventListener('visibilitychange', resetExperience);
    
        // Cleanup: remove event listener and clear intervals
        return () => {
          document.removeEventListener('visibilitychange', resetExperience);
          intervals.forEach(interval => clearInterval(interval));
        };
      }, []);
  return (
    <>


      
<div className="relative w-full overflow-hidden flex flex-col items-center justify-end">  


<div className='relative w-full py-28 px-4'>
  <div className='max-w-[1240px] mx-auto flex flex-col lg:flex-row sm:px-8 px-3'>
  
    {/* First Div */}
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
     className='lg:w-1/2 w-full md:mt-8'>
     <div className="flex items-center ml-2">
      {/* Icon */}
      <RiCheckboxMultipleBlankFill className="text-xl mr-3 text-[#2124B1]" />

      {/* Text */}
      <h2 className="text-xl font-semibold text-[#2124B1]">About Us</h2>
    </div>
      <h1 className='md:text-4xl text-[#1D2833] sm:text-2xl text-3xl ps-1 lg:px-2 font-bold tracking-wide py-2'>The best SEO solution with 10 years of experience</h1>
      <p className='text-lg text-gray-600 sm:pe-10 lg:px-2 ps-1 mt-5'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet .</p>




   

    <div className="flex flex-wrap mt-5 sm:space-x-8 items-center">
      {/* First row */}
      <div className="w-full mb-4 sm:w-2/5 sm:mb-0 flex items-center">
        <FaCheck className="text-2xl mr-2 text-[#2124B1]" />
        <p className="text-lg font-semibold">Award Winning</p>
      </div>
      <div className="w-full sm:w-auto mb-4 sm:mb-0 flex items-center">
      <FaCheck className="text-2xl mr-2 text-[#2124B1]" />
        <p className="text-lg font-semibold">24/7 Support</p>
      </div>
      </div>
       
      <div className="flex flex-wrap mt-3 sm:space-x-8 items-center">

      {/* Second row */}
      <div className="w-full mb-4 sm:w-2/5 sm:mb-0 flex items-center">
        <FaCheck className="text-2xl mr-2 text-[#2124B1]" />
        <p className="text-lg font-semibold">Professional Staff</p>
      </div>
      <div className="w-full sm:w-auto mb-4 sm:mb-0 flex items-center">
      <FaCheck className="text-2xl mr-2 text-[#2124B1]" />
        <p className="text-lg font-semibold">Fair Prices</p>
      </div>
      </div>





      <div className="sm:flex flex-wrap mt-10 sm:space-x-5 items-center">


      <div>
      <button className="bg-[#2124B1] shadow-lg shadow-[#2124B1] hover:shadow-none font-semibold tracking-wider text-white py-3 px-8 rounded-full">
        Read More
      </button>
      </div>

      {/* Left side with icons */}
      <div className="flex items-center sm:mt-0 mt-10 flex-wrap space-x-5">
      <a href='#' className='px-2 py-2 group rounded-full border-2 duration-300 border-[#2124B1] hover:bg-[#2124B1]'>
                      <FaFacebookF className='group-hover:text-white text-[#2124B1] text-xl' />
                  </a>
                  <a href='#' className='px-2 py-2 group rounded-full border-2 duration-300 border-[#2124B1] hover:bg-[#2124B1]'>
                      <AiOutlineTwitter className='group-hover:text-white text-[#2124B1] text-xl' />
                  </a>
  
                  <a href='#' className='px-2 py-2 group rounded-full border-2 duration-300 border-[#2124B1] hover:bg-[#2124B1]'>
                      <FaInstagram className='group-hover:text-white text-[#2124B1] text-xl' />
                  </a>
  
                  <a href='#' className='px-2 py-2 group rounded-full border-2 duration-300 border-[#2124B1] hover:bg-[#2124B1]'>
                      <AiFillLinkedin className='group-hover:text-white text-[#2124B1] text-xl' />
                  </a>
      </div>
     
    </div>
    </motion.div>

   
    {/* Image Div */}
    <motion.div
  initial={{ scale: 0.5, opacity: 0 }} // Initial state: small size and hidden
  whileInView={{ scale: 1, opacity: 1 }} // Animate to larger size and visible when in view
  transition={{ delay: 0.2, type: "spring", stiffness: 60, duration: 1 }} // Spring animation with a delay
     className='lg:ml-auto sm:mx-auto lg:w-5/12 mt-12'>
    <img src={image1} className='' />
    </motion.div>
  </div>
</div>
</div>
      
    </>
  )
}

export default About