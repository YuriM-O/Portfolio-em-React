import React, { useState, useRef } from 'react';
import Header from './components/cabecalho';
import Presentation from './components/apresentacao'
import Experience from './components/experiencia'
import Education from './components/educacao'
import Skills from './components/habilidades'
import Contact from './components/contato';
import './App.css'

function App() {
  const sections = [
    { id: 'header', component: <Header /> },
    { id: 'presentation', component: <Presentation /> },
    { id: 'experience', component: <Experience /> },
    { id: 'education', component: <Education /> },
    { id: 'skills', component: <Skills /> },
    { id: 'contact', component: <Contact /> },
  ];

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const goToPreviousSection = () => {
    setCurrentSectionIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const goToNextSection = () => {
    setCurrentSectionIndex((prevIndex) => Math.min(sections.length - 1, prevIndex + 1));
  };

  return (
    <div className="app-container">
      <div className="navigation-buttons">
        <button onClick={goToPreviousSection} disabled={currentSectionIndex === 0}>
          Anterior
        </button>
        <button onClick={goToNextSection} disabled={currentSectionIndex === sections.length - 1}>
          Próximo
        </button>
      </div>

      <div className="main-content-slider">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`section-slide ${index === currentSectionIndex ? 'active' : ''}`}
          >
            {section.component}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App