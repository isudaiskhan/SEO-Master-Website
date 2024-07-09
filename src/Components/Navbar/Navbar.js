import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaSearch, FaTimes } from 'react-icons/fa';



const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('HOME');
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHasScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileMenu(false);
    window.scrollTo(0, 0);

    const pagesaboutPaths = ['/pagesabout'];
    const pagesservicePaths = ['/pagesservice'];
    const pagesprojectPaths = ['/pagesproject'];
    const pagesPaths = ['/ourteam', '/testimonials'];
    const contactPaths = ['/contact'];

    if (pagesaboutPaths.some(path => location.pathname.includes(path))) {
      setActiveMenuItem('ABOUT');
    } else if (pagesservicePaths.some(path => location.pathname.includes(path))) {
      setActiveMenuItem('SERVICE');
    } else if (pagesprojectPaths.some(path => location.pathname.includes(path))) {
      setActiveMenuItem('PROJECT');
    } else if (pagesPaths.some(path => location.pathname.includes(path))) {
      setActiveMenuItem('PAGES');
    } else if (contactPaths.some(path => location.pathname.includes(path))) {
      setActiveMenuItem('CONTACT');
    } else {
      setActiveMenuItem('HOME');
    }
  }, [location]);

  const navItems = [
    { id: 'home', label: 'HOME', link: '/' },
    { id: 'pagesabout', label: 'ABOUT', link: '/pagesabout' },
    { id: 'pagesservice', label: 'SERVICE', link: '/pagesservice' },
    { id: 'pagesproject', label: 'PROJECT', link: '/pagesproject' },
    {
      id: 'pages',
      label: 'PAGES',
      submenu: [
        { label: 'OUR TEAM', link: '/ourteam' },
        { label: 'TESTIMONIALS', link: '/testimonials' },
      ]
    },
    { id: 'contact', label: 'CONTACT', link: '/contact' }
  ];


  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  const toggleSubmenu = (id) => {
    setOpenSubmenu(openSubmenu === id ? null : id);
  };

  return (
    <>
      <nav className={`sticky top-0 w-full bg-[#2124B1] z-50 transition duration-300 ${hasScrolled ? 'top-0 shadow-xl bg-[#2124B1]' : ''}`}>
        <div className="relative max-w-[1240px] mx-auto sm:ps-9 sm:pe-9 ps-5 pe-5 xl:ps-0 xl:pe-0">
          <div className="lg:py-5 py-6 mx-auto flex items-center justify-between lg:justify-start">
            <div>
            <div className='flex flex-wrap items-center cursor-pointer'>
               <FaSearch className='text-4xl text-white' />
               <h1 className='sm:text-4xl sm:tracking-wide text-3xl ml-4 font-bold text-white'>SEO</h1>
               <span className='text-xl text-white font-bold mt-3'>Master</span>
             </div>
            </div>
            <div className="hidden lg:flex items-center space-x-5 ml-auto">
              <ul className="flex items-center">
                {navItems.map((item) => (
                  <li key={item.id} className="p-3 mx-1 duration-500 border-transparent relative group cursor-pointer">
                    <NavLink
                      to={item.link}
                      onClick={() => setMobileMenu(false)}
                      className={`text-white duration-300 group group-hover:text-[#4777F5] ${activeMenuItem === item.label ? 'text-[#4777F5]' : ''}`}
                      activeclassname="text-[#e60000] underline"
                      style={{ color: activeMenuItem === item.label ? '#4777F5' : '' }} // Apply color based on activeMenuItem
                    >
                      {item.label}
                      {item.id === 'pages' && <MdOutlineKeyboardArrowDown className="inline text-xl mb-1 group-hover:text-[#4777F5] duration-500 group-hover:rotate-180 ml-1" />}
                    </NavLink>
                    {item.submenu && (
                      <ul className="absolute top-full left-0 hidden group-hover:block shadow-lg w-60 z-10">
                        {item.submenu.map((subItem) => (
                          <li key={subItem.label} className="border-b border-b-[#2124B1] bg-white hover:border-transparent hover:bg-[#2124B1]">
                            <NavLink
                              to={subItem.link}
                              className="block w-full p-4 px-7 font-semibold text-[#2124B1] hover:text-white transition-colors duration-300"
                              activeclassname="text-[#FEA116]"
                            >
                              {subItem.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <div className="flex items-center space-x-8">
                <div className="relative">
                  <button onClick={toggleSearch} className="">
                    <FaSearch className="text-[#4777F5] text-xl mt-1" />
                  </button>
                  {isSearchOpen && (
                    <motion.div
                    initial={{ x: 200, opacity: 0 }} // Initial position: off-screen to the left, hidden, starting from a greater distance
                    whileInView={{ x: 0, opacity: 1 }} // Move to original position (x: 0) and become fully visible when in view
                    transition={{ 
                    delay: 0.2, 
                    x: { type: "spring", stiffness: 60 }, // Spring animation for x-axis movement
                    opacity: { duration: 1 }, // Smooth opacity transition
                    ease: "easeIn", // Easing function
                    duration: 1 // Overall animation duration
                  }}
                     className="fixed inset-0 bg-gray-200 bg-opacity-90 z-50 flex justify-center items-center">
                      <div className="bg-white rounded-lg shadow-md w-2/3 relative">
                        <input
                          type="text"
                          placeholder="Search"
                          className="py-4 rounded-md w-full pl-5 pr-12 focus:outline-none focus:ring-2 focus:ring-[#2124B1]"
                        />
                        <button onClick={toggleSearch} className="absolute top-0 right-0 p-4 bg-gray-300 rounded-md">
                          <FaSearch className="text-gray-500 text-2xl" />
                        </button>
                      </div>
                      <button onClick={toggleSearch} className="absolute top-4 right-3 mt-2 mr-2">
                        <FaTimes className="text-gray-600 text-2xl" />
                      </button>
                    </motion.div>
                  )}
                </div>
                <div className="w-full">
                  <NavLink to='#'>
                  <button className="bg-[#4777F5] shadow-sm shadow-[#4777F5] hover:shadow-none text-lg tracking-wider text-white py-2 px-6 rounded-full">
                    Pro Version
                  </button>
                  </NavLink>
                </div>
               
              
               
              </div>
            </div>
            <div className="block lg:hidden">
              <button onClick={toggleMobileMenu}>
                {mobileMenu ? (
                  <IoMdMenu className="text-4xl text-white" />
                ) : (
                  <IoMdMenu className="text-4xl text-white" />
                )}
              </button>
            </div>
          </div>
          </div>
      </nav>
      
      {mobileMenu && (
        <div className="fixed inset-0 z-50 min-h-screen bg-black bg-opacity-70">
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 60, duration: 1 }}
            className="absolute right-0 min-h-screen sm:w-3/5 w-full py-4 px-8 shadow md:w-1/3 bg-[#2124B1] z-50"
          >
            <button className="absolute top-0 right-0 mt-4 mr-4" onClick={closeMobileMenu}>
              <AiOutlineClose className="text-4xl text-white" />
            </button>
            <ul className="mt-8 flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.id} className="relative p-3 select-none group cursor-pointer">
                  {!item.submenu ? (
                    <NavLink
                      to={item.link}
                      onClick={() => setMobileMenu(false)}
                      className={`text-white duration-300 font-semibold hover:text-white ${activeMenuItem === item.label ? 'text-white' : ''}`}
                      activeclassname="text-[#FF0F10] underline"
                      style={{ color: activeMenuItem === item.label ? '#fff' : '' }} // Apply color based on activeMenuItem
                    >
                      {item.label}
                    </NavLink>
                  ) : (
                    <div
                      onClick={() => toggleSubmenu(item.id)}
                      className={`text-white duration-300 font-semibold hover:text-white ${activeMenuItem === item.label ? 'text-white' : ''}`}
                      style={{ color: activeMenuItem === item.label ? '#fff' : '' }} // Apply color based on activeMenuItem
                    >
                      {item.label}
                      <MdOutlineKeyboardArrowDown
                        className={`inline text-2xl duration-300 ml-1 transform ${openSubmenu === item.id ? 'rotate-180' : 'rotate-0'}`}
                      />
                      {openSubmenu === item.id && (
                        <ul className="pt-2">
                          {item.submenu.map((subItem) => (
                            <li key={subItem.label} className="border-b-[#2124B1] border-b hover:border-b-transparent bg-white shadow-lg hover:bg-[#2124B1]">
                              <NavLink
                                to={subItem.link}
                                onClick={() => setMobileMenu(false)}
                                className="block w-full px-7 tracking-wider text-[#2124B1] text-sm p-4 hover:text-white transition-colors duration-300"
                                activeclassname="#2124B1"
                              >
                                {subItem.label}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
                     
            <div className="flex flex-wrap space-y-3 items-center">
              <div className="relative mx-4 overflow-hidden">
              <button onClick={toggleSearch} className="">
                    <FaSearch className="text-[#4777F5] text-xl mt-3" />
                  </button>
                {isSearchOpen && (
                  <motion.div
                    initial={{ x: 200, opacity: 0 }} // Initial position: off-screen to the left, hidden, starting from a greater distance
                    whileInView={{ x: 0, opacity: 1 }} // Move to original position (x: 0) and become fully visible when in view
                    transition={{ 
                    delay: 0.2, 
                    x: { type: "spring", stiffness: 60 }, // Spring animation for x-axis movement
                    opacity: { duration: 1 }, // Smooth opacity transition
                    ease: "easeIn", // Easing function
                    duration: 1 // Overall animation duration
                  }}
                     className="fixed inset-0 bg-gray-200 bg-opacity-90 z-50 flex justify-center items-center">
                      <div className="bg-white rounded-lg shadow-md w-2/3 relative">
                        <input
                          type="text"
                          placeholder="Search"
                          className="py-4 rounded-md w-full pl-5 pr-12 focus:outline-none focus:ring-2 focus:ring-[#2124B1]"
                        />
                        <button onClick={toggleSearch} className="absolute top-0 right-0 p-4 bg-gray-300 rounded-md">
                          <FaSearch className="text-gray-500 text-2xl" />
                        </button>
                      </div>
                      <button onClick={toggleSearch} className="absolute top-4 right-3 mt-2 mr-2">
                        <FaTimes className="text-gray-600 text-2xl" />
                      </button>
                    </motion.div>
                )}
              </div>
             
              <div className="w-full px-3">
                  <NavLink to='#'>
                  <button className="bg-[#4777F5] mt-2 shadow-sm shadow-[#4777F5] hover:shadow-none text-lg tracking-wider text-white py-2 px-6 rounded-full">
                    Pro Version
                  </button>
                  </NavLink>
                </div>
            </div>

          </motion.div>
        </div>
      )}
      
    </>
  );
};

export default Navbar;