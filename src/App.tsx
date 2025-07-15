import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import WhoAmI from "./components/WhoAmI";

function App() {
  return (
    <div className="bg-white text-black h-full">
      <Navbar/>
      <About/>
      <WhoAmI/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
