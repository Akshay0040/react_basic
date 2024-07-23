
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../src/Commponents/pages/Navbar.jsx"
import Hero from "../src/Commponents/pages/Hero.jsx"
import About from "../src/Commponents/pages/About.jsx";
import Booking from "../src/Commponents/pages/Booking.jsx";


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
            <About/>
            {/* <Booking/> */}
            </>

          }
          />

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
