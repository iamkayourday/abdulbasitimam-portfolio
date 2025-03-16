import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Timeline from "./Components/Timeline";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import AIChatWidget from "./Components/AiChatWidget";
import Testimonial from "./Components/Testimonial";
import BentoGrid from "./Components/BentoGrid";
import Services from "./Components/Services";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <Header />
      <main className="flex-grow">
        <About />
        <BentoGrid />
        <Skills />
        <Timeline />
        <Services />
        <Project />
        <Contact />
        <Testimonial />
        <AIChatWidget />
      </main>
      <Footer />
    </div>
  );
}

export default App;
