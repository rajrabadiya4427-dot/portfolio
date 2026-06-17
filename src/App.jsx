
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
    const timer = setTimeout(() => {
      setLoading(false);
    }, 7500); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
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