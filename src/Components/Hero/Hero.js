import React,{useState, useEffect} from 'react'
import heroimage from '../Assets/hero.png'
import bgbottomimage from '../Assets/bg-bottom-hero.png'
import bgimage2 from '../Assets/bg-dot.png'
import bgimage3 from '../Assets/bg-round.png'
import bgimage1 from '../Assets/bg-tree.png'
import {motion} from 'framer-motion';



const Hero = () => {

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


<div className="relative w-full bg-[#2124B1] overflow-hidden">  

<div
        className='bg-no-repeat bg-left-top'
        style={{ backgroundImage: `url(${bgimage2})` }}>


<div
        className='bg-no-repeat bg-center'
        style={{ backgroundImage: `url(${bgimage1})` }}>


<div
        className='bg-no-repeat bg-right-top '
        style={{ backgroundImage: `url(${bgimage3})` }}>


<div className='flex flex-col items-center justify-end overflow-hidden'>

<div className='relative w-full py-16 px-4'>
  <div className='max-w-[1240px] sm:px-8 px-4 mx-auto flex flex-col lg:flex-row'>
    {/* First Div */}
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

     className='lg:w-7/12 w-full md:mt-8'>
      <h1 className='md:text-5xl text-white sm:text-4xl text-3xl lg:text-start md:text-center font-bold tracking-wide py-2'>All in one SEO tool need to grow your business rapidly</h1>
      <p className='text-lg text-white lg:pe-10 mt-5 lg:text-start md:text-center'>Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam sit justo amet ipsum vero ipsum clita lorem .</p>

<div className='flex sm:space-x-5 space-x-3 lg:justify-start md:justify-center'>
      <button className="bg-[#F7FAFF] shadow-2xl shadow-[#F7FAFF] hover:shadow-none font-semibold sm:tracking-wider text-black mt-10 sm:py-4 sm:px-12 py-3 px-6 rounded-full">
        Free Quote
      </button>

      <button className="hover:bg-[#F7FAFF] border-2 duration-300 border-[#F7FAFF] shadow-2xl shadow-[#F7FAFF] hover:shadow-none font-semibold sm:tracking-wider text-white hover:text-black mt-10 sm:py-4 sm:px-12 py-3 px-6 rounded-full">
       Contact Us
      </button>
      </div>
    </motion.div>

   
    {/* Image Div */}
    <motion.div
  initial={{ scale: 0.5, opacity: 0 }} // Initial state: small size and hidden
  whileInView={{ scale: 1, opacity: 1 }} // Animate to larger size and visible when in view
  transition={{ delay: 0.2, type: "spring", stiffness: 60, duration: 1 }} // Spring animation with a delay
     className='md:mx-auto lg:mt-0 mt-24'>
    <img src={heroimage} className='' />
    </motion.div>
  </div>
</div>
    <img src={bgbottomimage} className='' />

</div>
  </div>


 </div>
 </div>
  </div>

    </>
  )
}

export default Hero