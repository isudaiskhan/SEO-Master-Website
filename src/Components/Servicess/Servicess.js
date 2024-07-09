import React from 'react'
import blueimage from '../Assets/icon-shape-blue.png'
import whiteimage from '../Assets/icon-shape-white .png'
import { RiCheckboxMultipleBlankFill } from "react-icons/ri";
import Cards from './Cards';
import {motion} from 'framer-motion';



const Servicess = () => {
  const blueImage = blueimage;
  const whiteImage = whiteimage;

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
  className='max-w-[1240px] mx-auto py-24 mt-10'>
 <div>
 <div className="flex items-center justify-center">
      {/* Icon */}
      <RiCheckboxMultipleBlankFill className="text-xl mr-3 text-[#2124B1]" />

      {/* Text */}
      <h2 className="text-xl font-semibold text-[#2124B1]">Our Services</h2>
    </div>
    <h1 className='text-center text-4xl font-bold mt-2'>What Solutions We Provide</h1>
 </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 mt-20 ps-5 pe-5 sm:ps-14 sm:pe-14 md:ps-12 md:pe-12 lg:ps-8 lg:pe-8 lg:grid-cols-3 gap-x-7 gap-y-12'>
        {/* Box 1 */}
        <Cards
         blueImage={blueImage} whiteImage={whiteImage} />
        {/* Box 2 */}
        <Cards blueImage={blueImage} whiteImage={whiteImage} />

         {/* Box 3 */}
         <Cards blueImage={blueImage} whiteImage={whiteImage} />

          {/* Box 4 */}
        <Cards blueImage={blueImage} whiteImage={whiteImage} />

         {/* Box 5 */}
         <Cards blueImage={blueImage} whiteImage={whiteImage} />

          {/* Box 6 */}
        <Cards blueImage={blueImage} whiteImage={whiteImage} />
      </div>
    </motion.div>
      
    </>
  )
}

export default Servicess