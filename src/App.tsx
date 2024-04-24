import { BrowserRouter } from "react-router-dom";
import Navbar from "@/components/app-ui/Navbar";
import About from "./components/app-ui/About";
import Hero from "./components/app-ui/Hero";
import Education from "./components/app-ui/Education";
import Projects from "./components/app-ui/Projects";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
    </BrowserRouter>
  );
}

export default App;
