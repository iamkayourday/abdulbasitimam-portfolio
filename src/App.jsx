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
// import ThemeSwitcher from "./Components/ThemeSwitcher";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#1e1e1f] text-white dark:text-[#1e1e1f] dark:bg-[#F2F2F2]">
      
      <Header />
      <main className="flex-grow ">
        <About />
        {/* <ThemeSwitcher /> */}
        <BentoGrid />
        <Skills />
        <Timeline />
        <Services />
        <Project />
        <Testimonial />
        <Contact />
        <AIChatWidget />
      </main>
      <Footer />
    </div>
  );
}

export default App;
