import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Components/Home/Home";
import Contact from "../Components/Contact/Contact";
import About from "../Components/About/About";
import ResponsiveAppBar from "../ShareModule/Headers/Headers"

export default function Rout() {
  return (
    <>
      <Router>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </Router>
    </>
  )
}