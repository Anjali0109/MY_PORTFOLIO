// src/App.jsx
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/about';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from "./components/Education";


function App() {
  // Add a simple loading screen
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading assets
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-900">
        <div className="text-4xl text-blue-500 font-bold">Loading...</div>
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About/>
      
      <Education/>
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;