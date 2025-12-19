import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import React from "react";
import Snowfall from "react-snowfall";

function App() {
  return (
    // Removed bg-gray-50 — this was the culprit!
    <div className="relative min-h-screen">
      
      {/* Snowfall layer */}
      <Snowfall
        snowflakeCount={200}
        speed={[0.5, 2.0]}
        wind={[-0.5, 1.0]}
        radius={[0.5, 3.0]}
        color="#ffffff"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 50,
        }}
      />

      {/* Your content — now shows your original colors again */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <Header />
        <Home />
        <About />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;