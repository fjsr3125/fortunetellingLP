import React from 'react';
import ResultCard from '../ResultCard';

interface FourPillarsProps {
  isActive: boolean;
  setActive: () => void;
}

const FourPillars = ({ setActive }: FourPillarsProps) => {
  const [birthDate, setBirthDate] = React.useState('');
  const [result, setResult] = React.useState<string | null>(null);
  const [isCalculating, setIsCalculating] = React.useState(false);

  const diagnose = () => {
    if (!birthDate) return;
    
    setIsCalculating(true);
    setActive();
    
    setTimeout(() => {
      const date = new Date(birthDate);
      const month = date.getMonth() + 1;
      const day = date.getDate();
      
      // 簡易的な四柱推命分類
      const sum = month + day;
      let type = '';
      let description = '';
      
      if (sum <= 15) {
        type = 'A型：創造者タイプ';
        description = 'あなたは生まれながらの創造者です。新しいアイデアを生み出し、周りの人を魅了する力を持っています。今月は特に創作活動や新しい挑戦に向いている時期です。直感を信じて行動することで、思わぬ幸運が舞い込むでしょう。宇宙のエネルギーがあなたの創造性を後押ししています。';
      } else if (sum <= 30) {
        type = 'B型：調和者タイプ';
        description = 'あなたは人と人をつなぐ調和の力を持っています。周りの人の気持ちを理解し、バランスを取ることが得意です。今は人間関係を大切にする時期。新しい出会いや既存の関係の深化が期待できます。あなたの波動は平和と愛に満ちており、多くの人を癒す力があります。';
      } else if (sum <= 45) {
        type = 'C型：挑戦者タイプ';
        description = 'あなたは困難に立ち向かう勇気と行動力を持っています。目標に向かって一直線に進む力があります。今は新しいことにチャレンジする絶好のタイミング。恐れずに一歩踏み出すことで、大きな成果を得られるでしょう。火のエレメントがあなたの情熱を燃やし続けています。';
      } else {
        type = 'D型：賢者タイプ';
        description = 'あなたは深い洞察力と知恵を持っています。物事の本質を見抜き、的確な判断ができる人です。今は学びの時期。新しい知識や技術を身につけることで、将来への道筋が見えてくるでしょう。水のエレメントがあなたの直感力を研ぎ澄まし、真理への扉を開いています。';
      }
      
      setResult(`${type}\n\n${description}`);
      setIsCalculating(false);
    }, 3000);
  };

  return (
    <div className="card diagnosis-card">
      <div className="diagnosis-header">
        <h3>✨ 四柱推命診断</h3>
        <h4>生年月日をお預けください。<br />わたくしが基本気質を<br />そっとお伝えいたします。</h4>
      </div>
      
      {!result && !isCalculating && (
        <div className="diagnosis-input">
          <label htmlFor="birthdate">生年月日を選択してください</label>
          <input
            type="date"
            id="birthdate"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="date-input"
          />
          <button 
            className="btn btn-primary"
            onClick={diagnose}
            disabled={!birthDate}
          >
            🔮 運命を読み解く
          </button>
        </div>
      )}
      
      {isCalculating && (
        <div className="calculating-state">
          <div className="cosmic-animation">
            <div className="center-constellation">
              <div className="center-star main-star">⭐</div>
              <div className="constellation-lines">
                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
                <div className="line line-4"></div>
              </div>
            </div>
            <div className="orbiting-elements">
              <div className="orbit orbit-1">
                <div className="element element-moon">🌙</div>
              </div>
              <div className="orbit orbit-2">
                <div className="element element-sun">☀️</div>
              </div>
              <div className="orbit orbit-3">
                <div className="element element-planet">🪐</div>
              </div>
              <div className="orbit orbit-4">
                <div className="element element-star">✨</div>
              </div>
            </div>
            <div className="cosmic-particles">
              {Array.from({ length: 12 }, (_, i) => (
                <div key={i} className={`particle particle-${i + 1}`}>·</div>
              ))}
            </div>
          </div>
          <p className="calculating-text">
            宇宙の法則に基づいて計算中...<br />
            <span className="sub-text">あなたの運命の糸を読み解いています</span>
          </p>
        </div>
      )}
      
      {result && (
        <ResultCard 
          title="四柱推命診断結果"
          result={result}
          type="fourpillars"
        />
      )}
      
      <style dangerouslySetInnerHTML={{
        __html: `
        .diagnosis-card {
          text-align: center;
          max-width: 320px;
          margin: 0 auto;
          padding: 20px;
        }
        
        .diagnosis-header h3 {
          font-size: 1.2rem;
          margin-bottom: 0.8rem;
          color: #2d3748;
          line-height: 1.3;
          text-wrap: balance;
        }
        
        .diagnosis-header h4 {
          color: #718096;
          margin-bottom: 1.5rem;
          font-size: 0.85rem;
          font-weight: normal;
          line-height: 1.4;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        
        .diagnosis-input label {
          display: block;
          margin-bottom: 1rem;
          font-weight: bold;
          color: #4a5568;
          font-size: 0.9rem;
        }
        
        .date-input {
          width: 100%;
          max-width: 280px;
          padding: 12px;
          border: 2px solid #e2e8f0;
          border-radius: 10px;
          font-size: 16px;
          margin-bottom: 1.5rem;
          transition: border-color 0.3s ease;
        }
        
        .date-input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }
        
        .btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .calculating-state {
          padding: 2rem 1rem;
          text-align: center;
        }
        
        .cosmic-animation {
          position: relative;
          width: 200px;
          height: 200px;
          margin: 0 auto 2rem;
        }
        
        .center-constellation {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        
        .main-star {
          font-size: 2.5rem;
          animation: pulse-glow 2s ease-in-out infinite alternate;
          position: relative;
          z-index: 10;
        }
        
        .constellation-lines {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        
        .line {
          position: absolute;
          background: linear-gradient(45deg, rgba(102, 126, 234, 0.6), rgba(255, 255, 255, 0.3));
          animation: line-glow 3s ease-in-out infinite;
        }
        
        .line-1 {
          width: 50px;
          height: 2px;
          top: -25px;
          left: -25px;
          transform: rotate(45deg);
          animation-delay: 0s;
        }
        
        .line-2 {
          width: 50px;
          height: 2px;
          top: -25px;
          right: -25px;
          transform: rotate(-45deg);
          animation-delay: 0.5s;
        }
        
        .line-3 {
          width: 50px;
          height: 2px;
          bottom: -25px;
          left: -25px;
          transform: rotate(-45deg);
          animation-delay: 1s;
        }
        
        .line-4 {
          width: 50px;
          height: 2px;
          bottom: -25px;
          right: -25px;
          transform: rotate(45deg);
          animation-delay: 1.5s;
        }
        
        .orbiting-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .orbit {
          position: absolute;
          border: 1px solid rgba(102, 126, 234, 0.2);
          border-radius: 50%;
          animation: rotate 8s linear infinite;
        }
        
        .orbit-1 {
          width: 100px;
          height: 100px;
          top: 50%;
          left: 50%;
          margin: -50px 0 0 -50px;
          animation-duration: 6s;
        }
        
        .orbit-2 {
          width: 130px;
          height: 130px;
          top: 50%;
          left: 50%;
          margin: -65px 0 0 -65px;
          animation-duration: 8s;
        }
        
        .orbit-3 {
          width: 160px;
          height: 160px;
          top: 50%;
          left: 50%;
          margin: -80px 0 0 -80px;
          animation-duration: 10s;
        }
        
        .orbit-4 {
          width: 190px;
          height: 190px;
          top: 50%;
          left: 50%;
          margin: -95px 0 0 -95px;
          animation-duration: 12s;
        }
        
        .element {
          position: absolute;
          font-size: 1.5rem;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          animation: counter-rotate 8s linear infinite;
        }
        
        .element-moon { animation-duration: 6s; }
        .element-sun { animation-duration: 8s; }
        .element-planet { animation-duration: 10s; }
        .element-star { animation-duration: 12s; }
        
        .cosmic-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .particle {
          position: absolute;
          color: rgba(102, 126, 234, 0.7);
          font-size: 1.2rem;
          animation: twinkle 2s ease-in-out infinite;
        }
        
        .particle-1 { top: 10%; left: 20%; animation-delay: 0s; }
        .particle-2 { top: 15%; right: 25%; animation-delay: 0.2s; }
        .particle-3 { top: 30%; left: 10%; animation-delay: 0.4s; }
        .particle-4 { top: 35%; right: 15%; animation-delay: 0.6s; }
        .particle-5 { top: 50%; left: 5%; animation-delay: 0.8s; }
        .particle-6 { top: 55%; right: 8%; animation-delay: 1s; }
        .particle-7 { bottom: 30%; left: 12%; animation-delay: 1.2s; }
        .particle-8 { bottom: 25%; right: 18%; animation-delay: 1.4s; }
        .particle-9 { bottom: 15%; left: 22%; animation-delay: 1.6s; }
        .particle-10 { bottom: 10%; right: 28%; animation-delay: 1.8s; }
        .particle-11 { top: 25%; left: 50%; animation-delay: 2s; }
        .particle-12 { bottom: 40%; right: 45%; animation-delay: 2.2s; }
        
        .calculating-text {
          font-size: 1rem;
          color: #4a5568;
          font-weight: bold;
          line-height: 1.6;
        }
        
        .sub-text {
          font-size: 0.9rem;
          color: #718096;
          font-weight: normal;
          font-style: italic;
        }
        
        @keyframes pulse-glow {
          0% { 
            transform: scale(1); 
            filter: brightness(1) drop-shadow(0 0 10px rgba(255, 215, 0, 0.5));
          }
          100% { 
            transform: scale(1.1); 
            filter: brightness(1.3) drop-shadow(0 0 20px rgba(255, 215, 0, 0.8));
          }
        }
        
        @keyframes line-glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes counter-rotate {
          0% { transform: translateX(-50%) rotate(0deg); }
          100% { transform: translateX(-50%) rotate(-360deg); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        `
      }} />
    </div>
  );
};

export default FourPillars;