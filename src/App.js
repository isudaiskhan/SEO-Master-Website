import {Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import PagesAbout from './Components/Pages/PagesAbout/PagesAbout';
import PagesService from './Components/Pages/PagesService/PagesService';
import PagesProject from './Components/Pages/PagesProject/PagesProject';
import PagesContact from './Components/Pages/PagesContact/PagesContact';
import OurTeam from './Components/Pages/Pages/OurTeam/OurTeam';
import Testimonials from './Components/Pages/Pages/Testimonials/Testimonials';


function App() {
  return (
    <>

   <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/pagesabout" element={<PagesAbout />} />
          <Route path="/pagesservice" element={<PagesService />} />
          <Route path="/pagesproject" element={<PagesProject />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<PagesContact />} />
   </Routes>
    </>
  );
}

export default App;