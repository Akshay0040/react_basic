
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../src/Commponents/pages/Navbar.jsx"
import Hero from "../src/Commponents/pages/Hero.jsx"
import About from "../src/Commponents/pages/About.jsx";
import Booking from "../src/Commponents/pages/Booking.jsx";
import Service from "../src/Commponents/pages/Service.jsx";
import ContactUs from '../src/Commponents/pages/ContactUs.jsx';
import HotelPortfolio from '../src/Commponents/pages/HotelPortfolio.jsx';
import Footer from '../src/Commponents/pages/Footer.jsx';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route

          path="/"
          element={
            <>
            <Navbar/>
            <Hero/>
            <HotelPortfolio />
            <Service/>
            <About/>
            <ContactUs />
            <Footer/>
           
            {/* <Booking/> */}
            </>

          }
          />

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
