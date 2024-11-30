import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Timeline from "./Components/Timeline";
import Project from "./Components/Project";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <About />
        <Skills />
        <Timeline />
        <Project />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
