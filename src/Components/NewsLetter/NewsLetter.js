import React from 'react'
import { FaPaperPlane } from "react-icons/fa";
import bgnewsletterImage from '../Assets/bg-newsletter.png';
import newletterImage from '../Assets/newsletter.png';
import {motion} from 'framer-motion';



const NewsLetter = () => {
  return (
    <>


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
        className='bg-no-repeat lg:py-5 py-7 bg-[#2124B1] bg-cover'
        style={{ backgroundImage: `url(${bgnewsletterImage})` }}>

<div className="flex flex-col md:flex-row items-center justify-center">
      {/* Text */}
      <div className="md:w-1/2 w-full md:px-0 sm:px-20 px-5 md:mb-0 md:mr-4">
        <h2 className="text-3xl font-bold text-white">Ready to get started</h2>
        <p className="text-white mb-7 mt-4">Diam elitr est dolore at sanctus nonumy.</p>
         {/* Input field with icon */}
      <div className="md:w-3/4 relative">
        <input
          type="text"
          placeholder="Enter Your Email"
          className="border border-gray-300 text-lg placeholder:text-gray-500 rounded-full py-3 px-6 w-full"
        />
        <FaPaperPlane className="absolute top-0 text-2xl right-0 mt-3.5 mr-5 text-[#2124B1]" />
      </div>

      </div>

     
      {/* Image */}
      <div className="w-full mt-4 md:mt-0 md:w-1/3 hidden md:block">
        <img src={newletterImage} alt="Newsletter" className="w-full" />
      </div>

      
    </div>
</motion.div>
      
    </>
  )
}

export default NewsLetter