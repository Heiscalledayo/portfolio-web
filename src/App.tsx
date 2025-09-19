import About from "./components/About";
import Contact from "./components/Contact";
import { Experience } from "./components/Experience";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
// import TestimonialSection from "./components/Testimonial";
import WhoAmI from "./components/WhoAmI";

function App() {
  return (
    <div className="bg-white text-black h-full">
      <Navbar/>
      <About/>
      <WhoAmI/>
      <Experience/>
      <Projects/>
      {/* <TestimonialSection/> */}
      <Contact/>
    </div>
  )
}

export default App
