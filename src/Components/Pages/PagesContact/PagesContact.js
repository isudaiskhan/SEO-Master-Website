import React,{useState, useEffect} from 'react'
import bgbottomimage from '../../Assets/bg-bottom-hero.png'
import bgimage2 from '../../Assets/bg-dot.png'
import bgimage3 from '../../Assets/bg-round.png'
import bgimage1 from '../../Assets/bg-tree.png'
import {motion} from 'framer-motion';
import { RxSlash } from "react-icons/rx";
import {FiUser, FiMail, FiMessageSquare} from 'react-icons/fi'
import { FaPen  } from "react-icons/fa6";
import Navbar from '../../Navbar/Navbar'
import { RiCheckboxMultipleBlankFill } from "react-icons/ri";
import Footer from '../../Footer/Footer'
import ScrollButton from '../../ScrollButton/ScrollButton'




const PagesContact = () => {

   
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

  const initialX = windowSize.width >= 640 ? -300 : -170;

  return (
    <>


  <Navbar />
   
   <div className="relative overflow-hidden">
      <div className="relative h-96 flex justify-center items-center overflow-hidden">
      <div className="absolute inset-0 h-96 bg-no-repeat bg-cover bg-[#2124B1] " style={{ backgroundImage: `url(${bgbottomimage})` }}>

      <motion.div
        initial={{ x: initialX, opacity: 0 }} // Initial position: off-screen to the left, hidden, starting from a greater distance
        whileInView={{ x: 0, opacity: 1 }} // Move to original position (x: 0) and become fully visible when in view
        transition={{ 
        delay: 0.2, 
        x: { type: "spring", stiffness: 60 }, // Spring animation for x-axis movement
        opacity: { duration: 1 }, // Smooth opacity transition
        ease: "easeIn", // Easing function
        duration: 1 // Overall animation duration
      }}
           className="flex flex-col max-w-[1240px] mx-auto pt-2 sm:px-16 px-5 h-full">
             <h1 className="sm:text-5xl text-4xl text-center font-bold ps-5 text-white mt-28">Contact Us</h1>
             <div className="flex flex-wrap ps-5 justify-center items-center mt-6">
             <h2 className="text-white mr-4">Home</h2>
             <RxSlash className="text-white mr-4" />

             <h2 className="text-white mr-4">Pages</h2>
             <RxSlash className="text-white mr-4" />

            
               <h2 className="text-white mr-4">Contact Us</h2>

                  </div>
                  </motion.div>
                </div>
             </div>
            </div>


                    
            <div
                    className='bg-no-repeat absolute inset-0 bg-left'
                    style={{ backgroundImage: `url(${bgimage2})` }}>

            <div
                    className='bg-no-repeat absolute inset-0 bg-right-top'
                    style={{ backgroundImage: `url(${bgimage3})` }}>


            <div
                    className='bg-no-repeat absolute inset-0 bg-center mt-20'
                    style={{ backgroundImage: `url(${bgimage1})` }}>

        </div>
        </div>
        </div>


        <div className='w-full mt-32 overflow-hidden'>
        <div className='max-w-[1240px] mx-auto py-8 rounded-md'>
      

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
     className="text-center mb-12 lg:w-1/2 mt-10 sm:px-0 px-4 w-full mx-auto">
      <div className="flex justify-center items-center">
      {/* Icon */}
      <RiCheckboxMultipleBlankFill className="text-xl mr-3 text-[#2124B1]" />
      <h2 className="text-xl font-semibold text-[#2124B1]">Contact Us</h2>

    </div>
    <h1 className="text-[#1D2833] sm:text-4xl text-3xl font-bold mt-5">Contact For Any Query</h1>

  </motion.div>

    <div className='flex flex-col sm:flex-col lg:flex-row lg:p-10'>

   {/* Form Section */}
    <motion.form
     initial={{ y: 150, opacity: 0 }} // Initial position: below its final position and hidden
      whileInView={{ y: 0, opacity: 1 }} // Move to original position (y: 0) and become fully visible when in view
      transition={{ 
    delay: 0.4, 
    y: { type: "spring", stiffness: 60 }, // Spring animation for y-axis movement
    opacity: { duration: 0.2 }, // Smooth opacity transition
    ease: "easeIn", // Easing function
    duration: 1 // Overall animation duration
  }}
     className='md:w-7/12 w-11/12 max-w-3xl mt-5 mx-auto space-y-6 mb-4 md:mb-0'>
   
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className='w-full md:w-1/2 relative'>
          <input type="text" id="input1" name="user_name" placeholder='Name' required className="w-full border rounded border-gray-300 px-4 py-3 placeholder:text-gray-500 text-black focus:outline-[#2124B1]" />
          <FiUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      
      

      <div className='w-full md:w-1/2 relative'>
          <input type="email" id="input2" name="user_Email" placeholder='Email' required className="w-full border rounded border-gray-300 px-4 py-3 placeholder:text-gray-500 text-black focus:outline-[#2124B1]" />
          <FiMail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
        </div>

        <div className='w-full relative'>
          <input type="email" id="input2" name="user_Subject" placeholder='Subject' required className="w-full border rounded border-gray-300 px-4 py-3 placeholder:text-gray-500 text-black focus:outline-[#2124B1]" />
          <FaPen className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>

      <div className='w-full relative'>
        <textarea id="textarea" placeholder='Message' name="message" required rows="6" className="p-2 px-4 py-3 w-full border border-gray-300 placeholder:text-gray-500 rounded-md focus:outline-[#2124B1]" />
        <FiMessageSquare className="absolute right-3 bottom-3 text-gray-500" />
      </div>

      <div className="flex justify-center">
  <button type="submit" className="font-semibold flex items-center justify-center px-8 py-3.5 w-full border rounded-lg hover:bg-[#2123b1dc] bg-[#2124B1] text-white">
    Send Message
  </button>
</div>
 </motion.form>

 
    </div>
  </div>
  </div>


  <Footer />
  <ScrollButton />



      
    </>
  )
}

export default PagesContact