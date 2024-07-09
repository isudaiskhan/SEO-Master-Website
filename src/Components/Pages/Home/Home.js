import React from 'react'
import About from "../../About/About";
import Footer from "../../Footer/Footer";
import Hero from "../../Hero/Hero";
import NewsLetter from "../../NewsLetter/NewsLetter";
import Portfolio from "../../Portfolio/Portfolio";
import ScrollButton from "../../ScrollButton/ScrollButton";
import Servicess from "../../Servicess/Servicess";
import Team from "../../Team/Team";
import Testimonial from "../../Testimonial/Testimonial";
import Layout from '../../Layout/Layout';




const Home = () => {
  return (
    <>


    <Layout>
    <Hero />
    <About />
    <NewsLetter />
    <Servicess />
    <Portfolio />
    <Testimonial />
    <Team />
    <Footer />
    <ScrollButton />
    </Layout>
      
    </>
  )
}

export default Home
