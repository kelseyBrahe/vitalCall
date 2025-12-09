import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useWindowWidth } from "./hooks/useWindowWidth";
import DesktopNavbar from "./Components/DesktopNavbar";
import MobileNavbar from "./Components/MobileNavbar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Testimonials from "./Pages/Testimonials";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import ScrollToTop from "./hooks/ScrollToTop";

function App() {
  const width = useWindowWidth();
  console.log("Window width: ", width);
  const breakpoint = 768;
  return (
    <>
      <Router>
        <ScrollToTop />
        {/* Navbar component will go here */}
        {width > breakpoint ? <DesktopNavbar /> : <MobileNavbar />}
        <main>
          {/* Pages will go here, with routing logic */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        {/* Footer will go here */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
