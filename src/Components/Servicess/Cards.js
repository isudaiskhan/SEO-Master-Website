import React,{useState} from 'react'
import { FaHome } from 'react-icons/fa';


const Cards = ({ blueImage, whiteImage }) => {
    const [showBlueImage, setShowBlueImage] = useState(true);

    const toggleImage = () => {
      setShowBlueImage(!showBlueImage);
    };
  return (
    <>

<div
      className='bg-white group rounded-xl hover:bg-[#2124B1] flex flex-col items-center relative transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 duration-500 shadow-lg shadow-gray-500'
      onMouseEnter={toggleImage}
      onMouseLeave={toggleImage}
    >
      <div className='mt-8 relative z-10'>
        <img src={showBlueImage ? blueImage : whiteImage} alt="Image" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <FaHome className="text-3xl text-white group-hover:text-[#2124B1]" />
        </div>
      </div>
      <h1 className='text-xl text-black text-center duration-500 group-hover:text-white tracking-wide font-medium mt-6'>SEO Optimization</h1>
      <p className='mt-3 text-gray-500 text-lg duration-500 group-hover:text-white text-center px-6'>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
      <div className='p-8'>
        <button className="bg-[#2124B1] duration-500 shadow-lg shadow-[#2124B1] group-hover:bg-white group-hover:text-black hover:shadow-none font-semibold tracking-wider text-white py-3 px-8 rounded-full">
          Read More
        </button>
      </div>
    </div>

      
    </>
  )
}

export default Cards
