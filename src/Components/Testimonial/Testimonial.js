import React,{useState,useRef} from 'react'
import bgimage from '../Assets/bg-newsletter.png'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../Assets/testimonial-1.jpg'
import image2 from '../Assets/testimonial-2.jpg'
import image3 from '../Assets/testimonial-3.jpg'
import image4 from '../Assets/testimonial-4.jpg'
import { FaQuoteLeft } from "react-icons/fa";
import {motion} from 'framer-motion';



const Testimonial = () => {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);


    const images = [image1, image2, image3, image4];
    const productNames = ["Client Name", "Client Name", "Client Name", "Client Name"];
    const prices = ["Profession", "Profession", "Profession", "Profession"];
  
    const settings = {
      infinite: true,
      speed: 2000,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true, // Enable autoplay
      autoplaySpeed: 3000, // Set autoplay speed in milliseconds
      arrows: false, // Hide default arrows
      pauseOnHover: false, // Pause autoplay on hover
      centerMode: true,
      centerPadding: '0%', // Adjust as needed


  
      responsive: [
        {
          breakpoint: 1024,
          settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          },
        },

        {
          breakpoint: 768,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          },
        },
      ],

    

      beforeChange: (current, next) => setCurrentSlide(next),

    }

  
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
        className='bg-no-repeat bg-[#2124B1]'
        style={{ backgroundImage: `url(${bgimage})` }}>



       <div
      className='max-w-[1240px] sm:px-8 px-4 mx-auto py-12 relative overflow-hidden'>

      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index}>  
          <div className="flex flex-wrap -mx-6 sm:mt-16 mt-24">
          <div className="mx-auto w-11/12 md:px-4 sm:px-14 px-4 mb-4">
          <div className={`border-t-[6px] border-t-white rounded-lg border overflow-hidden shadow-md flex ${currentSlide === index ? 'border-t-white bg-[#4777F5]' : ''}`}>
          
          <div className={`absolute ms-20 p-3 bg-white border-white border-2 rounded-full transform -translate-x-1/2 -translate-y-1/2 ${currentSlide === index ? 'bg-[#2123b1f8]' : ''}`}>
            <FaQuoteLeft className={`text-[#2124B1] text-xl ${currentSlide === index ? 'text-[#1a1a1a]' : ''}`} />
        </div>

      {/* Price and Description Column */}
     <div className="w-full px-6 py-5">
     <p className={`text-white border-b text-lg py-4 ${currentSlide === index ? 'text-[#666666]' : 'border-b-white'}`}>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam .</p>
     <div className="relative flex mt-6">
     <img className="rounded-full object-cover sm:w-20 sm:h-20 w-16 h-16 mb-3 sm:mb-0 sm:mr-7 mr-5" src={image} alt={`Image ${index + 1}`} />
     <div className="w-full sm:w-auto sm:mt-2 mt-1">
      <h2 className={`text-xl font-semibold text-white ${currentSlide === index ? 'text-[#1a1a1a]' : ''}`}>{productNames[index]}</h2>
      <p className={`text-white sm:text-lg mt-2 ${currentSlide === index ? 'text-[#666666]' : ''}`}>{prices[index]}</p>
    
    </div>
   </div>
   </div>
   </div>
   </div>
   </div>
   </div>
        ))}
      </Slider>
      <div className='flex justify-center mt-16'>
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 mx-2 cursor-pointer rounded-full ${currentSlide === index ? 'bg-[#4777F5]' : 'bg-white'}`}
            onClick={() => sliderRef.current.slickGoTo(index)}
          />
        ))}
      </div>
   
    </div>

        </motion.div>
    </>
  )
}

export default Testimonial