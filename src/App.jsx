
import { useState, useEffect } from "react";
import Preloader from "./components/Preloader";
import Experience from "./components/Experience"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Project from "./pages/Project"
import Services from "./pages/Services"
import Navbar from "./components/Navbar";

const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Preload critical Hero images immediately for browser cache
    const img1 = new Image();
    const img2 = new Image();
    img1.src = "/mee1.png";
    img2.src = "/mee2.png";

    // Safety timeout to dismiss preloader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 15000); // 15 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader setLoading={setLoading} />;
  }

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Project />
      <Experience />
      <Contact />

    </>
  )
}

export default App