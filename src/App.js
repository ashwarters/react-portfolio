import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Resume from "./components/Resume";
import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState('About');

  const renderPage = () => {
    switch (currentSection) {
      case 'Projects':
        return <Projects />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />
    }
  }
  return (
    <div>
        <Nav
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        ></Nav>   
        
        <main>
            {renderPage(currentSection)}
        </main>
        
        <Footer></Footer>
    </div>  
  );
}

export default App;