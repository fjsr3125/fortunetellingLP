import React from 'react';
import Hero from './components/Hero';
import DiagnosisSection from './components/DiagnosisSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentDiagnosis, setCurrentDiagnosis] = React.useState<string | null>(null);

  const scrollToDiagnosis = () => {
    const element = document.getElementById('diagnosis-anchor');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      <Hero onStartDiagnosis={scrollToDiagnosis} />
      <DiagnosisSection 
        currentDiagnosis={currentDiagnosis}
        setCurrentDiagnosis={setCurrentDiagnosis}
      />
      <Footer />
    </div>
  );
}

export default App;