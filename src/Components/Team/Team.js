import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram  } from 'react-icons/fa';
import image1 from '../Assets/team-1.jpg'
import image2 from '../Assets/team-2.jpg'
import image3 from '../Assets/team-3.jpg'
import {motion} from 'framer-motion';



const Team = () => {
  return (
    <>

 
  <div className='max-w-[1240px] mx-auto sm:px-8 px-5 overflow-hidden'>
 
    {/* Top Content */}
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
   className="text-center mb-5 mt-40 py-5 lg:w-1/2 w-full mx-auto">
    <h1 className="text-[#1D2833] sm:text-5xl text-4xl font-bold mb-5">Our Team Members</h1>
    <p className="text-gray-500 text-lg">Vero justo sed sed vero clita amet. Et justo vero sea diam elitr amet ipsum eos ipsum clita duo sed. Sed vero sea diam erat vero elitr sit clita.</p>
  </motion.div>
    

  <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 md:gap-6 sm:gap-8 gap-14 py-20">

  {/* Card 1 */}
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
   className="bg-white border-t-[6px] group border-t-[#2124B1] rounded-lg shadow-lg hover:shadow-[#2124B1] shadow-gray-400 relative">
   <img src={image1} className='rounded-full sm:w-60 sm:h-64 w-48 h-48 mx-auto mt-8' />
  <h1 className="text-2xl font-bold mt-8 text-[#1D2833] text-center">Jhon Doe</h1>
  <p className='text-center text-gray-500 text-lg mt-2'>CEO</p>

  <div className="flex flex-wrap items-center justify-center space-x-4 bg-[#2124B1] py-5 rounded-b-lg mt-6">
      <div className='p-3 rounded-md bg-white cursor-pointer'>
      <FaFacebookF className="text-[#2124B1] text-xl" />
      </div>
      <div className='p-3 rounded-md bg-white cursor-pointer'>
      <FaTwitter className="text-[#2124B1] text-xl" />
      </div>
      <div className='p-3 rounded-md bg-white cursor-pointer'>
      <FaInstagram className="text-[#2124B1] text-xl" />
      </div>


    </div>
  
   </motion.div>



  {/* Card 2 */}
  <motion.div
     initial={{ y: 250, opacity: 0 }} // Initial position: below its final position and hidden
      whileInView={{ y: 0, opacity: 1 }} // Move to original position (y: 0) and become fully visible when in view
      transition={{ 
    delay: 0.4, 
    y: { type: "spring", stiffness: 60 }, // Spring animation for y-axis movement
    opacity: { duration: 0.2 }, // Smooth opacity transition
    ease: "easeIn", // Easing function
    duration: 1 // Overall animation duration
  }}
   className="bg-white border-t-[6px] group border-t-[#2124B1] rounded-lg shadow-lg hover:shadow-[#2124B1] shadow-gray-400 relative">
   <img src={image2} className='rounded-full sm:w-60 sm:h-64 w-48 h-48 mx-auto mt-8' />
  <h1 className="text-2xl font-bold mt-8 text-[#1D2833] text-center">Emma William</h1>
  <p className='text-center text-gray-500 text-lg mt-2'>Manager</p>

  <div className="flex items-center justify-center space-x-4 bg-[#2124B1] py-5 rounded-b-lg mt-6">
      <div className='p-3 rounded-md bg-white cursor-pointer'>
      <FaFacebookF className="text-[#2124B1] text-xl" />
      </div>
      <div className='p-3 rounded-md bg-white cursor-pointer'>
      <FaTwitter className="text-[#2124B1] text-xl" />
      </div>
      <div className='p-3 rounded-md bg-white cursor-pointer'>
      <FaInstagram className="text-[#2124B1] text-xl" />
      </div>
    
    </div>
  
</motion.div>



  {/* Card 3 */}
  <motion.div
     initial={{ y: 350, opacity: 0 }} // Initial position: below its final position and hidden
      whileInView={{ y: 0, opacity: 1 }} // Move to original position (y: 0) and become fully visible when in view
      transition={{ 
    delay: 0.4, 
    y: { type: "spring", stiffness: 60 }, // Spring animation for y-axis movement
    opacity: { duration: 0.2 }, // Smooth opacity transition
    ease: "easeIn", // Easing function
    duration: 1 // Overall animation duration
  }}
  className="bg-white border-t-[6px] group border-t-[#2124B1] rounded-lg shadow-lg hover:shadow-[#2124B1] shadow-gray-400 relative">
   <img src={image3} className='rounded-full sm:w-60 sm:h-64 w-48 h-48 mx-auto mt-8' />
  <h1 className="text-2xl font-bold mt-8 text-[#1D2833] text-center">Noah Michael</h1>
  <p className='text-center text-gray-500 text-lg mt-2'>Designer</p>

  <div className="flex items-center justify-center space-x-4 bg-[#2124B1] py-5 rounded-b-lg mt-6">
      <div className='p-3 rounded-md bg-white cursor-pointer'>
      <FaFacebookF className="text-[#2124B1] text-xl" />
      </div>
      <div className='p-3 rounded-md bg-white cursor-pointer'>
      <FaTwitter className="text-[#2124B1] text-xl" />
      </div>
      <div className='p-3 rounded-md bg-white cursor-pointer'>
      <FaInstagram className="text-[#2124B1] text-xl" />
      </div>
     
    </div>
  
   </motion.div>

    </div>

</div>

    
    

    </>
  )
}

export default Team