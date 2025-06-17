import FourPillars from './diagnosis/FourPillars';
import Tarot from './diagnosis/Tarot';
import Palmistry from './diagnosis/Palmistry';
import Omikuji from './diagnosis/Omikuji';

interface DiagnosisSectionProps {
  currentDiagnosis: string | null;
  setCurrentDiagnosis: (diagnosis: string | null) => void;
}

const DiagnosisSection = ({
  currentDiagnosis,
  setCurrentDiagnosis
}: DiagnosisSectionProps) => {
  return (
    <section id="diagnosis-anchor" className="section diagnosis-section">
      <div className="container">
        <h2 className="section-title">🔮 あなたの運命を占います</h2>
        
        <div className="diagnosis-grid">
          <FourPillars 
            isActive={currentDiagnosis === 'fourpillars'}
            setActive={() => setCurrentDiagnosis('fourpillars')}
          />
          <Tarot 
            isActive={currentDiagnosis === 'tarot'}
            setActive={() => setCurrentDiagnosis('tarot')}
          />
          <Palmistry 
            isActive={currentDiagnosis === 'palmistry'}
            setActive={() => setCurrentDiagnosis('palmistry')}
          />
          <Omikuji 
            isActive={currentDiagnosis === 'omikuji'}
            setActive={() => setCurrentDiagnosis('omikuji')}
          />
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
        .diagnosis-section {
          background: linear-gradient(to bottom, #f7fafc, #edf2f7);
        }
        
        .diagnosis-grid {
          display: grid;
          gap: 30px;
          max-width: 1000px;
          margin: 0 auto;
        }
        
        @media (min-width: 768px) {
          .diagnosis-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        `
      }} />
    </section>
  );
};

export default DiagnosisSection;