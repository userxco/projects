import React from "react";
import Hero from './components/Hero.jsx';
import Header from './components/Header.jsx';
import About from "./components/About.jsx";
import Gallery from "./components/Gallery.jsx";
import Skills from "./components/Skills.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Interview from "./components/Interview.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Copyright from "./components/Copyright.jsx";



function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Skills />
      <Testimonials />
      <Interview />
      <Contact />
      <Footer />
      <Copyright />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
}

export default App;
