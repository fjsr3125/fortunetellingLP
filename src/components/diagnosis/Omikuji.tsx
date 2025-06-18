import React from 'react';
import ResultCard from '../ResultCard';

interface OmikujiProps {
  isActive: boolean;
  setActive: () => void;
}

const Omikuji = ({ setActive }: OmikujiProps) => {
  const [result, setResult] = React.useState<string | null>(null);
  const [isShaking, setIsShaking] = React.useState(false);
  const [shakeCount, setShakeCount] = React.useState(0);
  const [canDraw, setCanDraw] = React.useState(false);

  const omikujiResults = [
    {
      level: '大吉',
      message: '素晴らしい運気に恵まれています！今日は何をやってもうまくいく日です。新しいことにチャレンジしたり、大切な人との時間を過ごすのに最適です。積極的に行動することで、さらなる幸運を引き寄せることができるでしょう。天の恵みがあなたを包み、すべての道が光に満ちています。',
      color: '#ff6b6b'
    },
    {
      level: '中吉',
      message: '安定した良い運気です。物事が順調に進み、周りの人との関係も良好です。今は焦らず、着実に歩みを進めることが大切です。小さな幸せを大切にすることで、より大きな幸運につながっていくでしょう。調和のエネルギーがあなたの人生に平和をもたらしています。',
      color: '#4ecdc4'
    },
    {
      level: '小吉',
      message: 'ささやかな幸運が訪れる予感です。日常の中に小さな喜びを見つけることができるでしょう。感謝の気持ちを忘れずに過ごすことで、運気がさらに上昇していきます。周りの人への優しさが幸運の鍵となります。春の芽吹きのように、新しい可能性が静かに育っています。',
      color: '#45b7d1'
    },
    {
      level: '吉',
      message: '穏やかで平和な運気です。特別な出来事はないかもしれませんが、心の安定と平穏を得られる時期です。今は自分自身と向き合い、内面を充実させることに集中しましょう。準備を整えることで、次の好機を掴むことができます。静寂の中に真の力が宿っています。',
      color: '#96ceb4'
    },
    {
      level: '末吉',
      message: '運気は徐々に上昇していく兆しです。今は辛抱の時期かもしれませんが、努力を続けることで必ず報われる時が来ます。希望を持ち続け、前向きな気持ちを大切にしてください。小さな変化に注目することが開運の秘訣です。夜明け前が最も暗いように、光は必ず訪れます。',
      color: '#feca57'
    },
    {
      level: '凶',
      message: '少し注意が必要な時期です。慎重に行動し、無理をしないことが大切です。しかし、これは成長のための試練でもあります。困難を乗り越えることで、より強く賢くなることができるでしょう。周りの人のサポートを素直に受け入れましょう。嵐の後には必ず虹が現れます。',
      color: '#ff9ff3'
    }
  ];

  const handleShake = () => {
    if (shakeCount < 5) {
      setShakeCount((prev: number) => prev + 1);
      // デバイスの振動があれば実行
      if (navigator.vibrate) {
        navigator.vibrate(100);
      }
    }
    
    if (shakeCount >= 4) {
      setCanDraw(true);
    }
  };

  const drawOmikuji = () => {
    if (!canDraw) return;
    
    setIsShaking(true);
    setActive();
    
    setTimeout(() => {
      const weights = [15, 25, 25, 20, 10, 5]; // 大吉から凶までの重み
      const random = Math.random() * 100;
      let cumulative = 0;
      let selectedIndex = 0;
      
      for (let i = 0; i < weights.length; i++) {
        cumulative += weights[i];
        if (random <= cumulative) {
          selectedIndex = i;
          break;
        }
      }
      
      const selectedResult = omikujiResults[selectedIndex];
      setResult(`${selectedResult.level}\n\n${selectedResult.message}`);
      setIsShaking(false);
    }, 3000);
  };

  return (
    <div className="card diagnosis-card">
      <div className="diagnosis-header">
        <h3>🏮 おみくじ</h3>
        <h4>箱をそっと揺らし、<br />籤に宿る気配を<br />感じてください。</h4>
      </div>
      
      {!result && !isShaking && (
        <div className="omikuji-interaction">
          <div 
            className={`omikuji-box ${shakeCount > 0 ? 'shaking' : ''}`}
            onClick={handleShake}
          >
            <div className="box-top">🏮</div>
            <div className="box-body">
              <div className="sticks">
                {Array.from({ length: 8 }, (_, i) => (
                  <div key={i} className={`stick stick-${i + 1}`}>|</div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="shake-progress">
            <p>おみくじ箱をタップして振ってください</p>
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ width: `${(shakeCount / 5) * 100}%` }}
              ></div>
            </div>
            <p className="shake-count">{shakeCount}/5回</p>
          </div>
          
          {canDraw && (
            <button 
              className="btn btn-primary pulse"
              onClick={drawOmikuji}
            >
              🎯 おみくじを引く
            </button>
          )}
        </div>
      )}
      
      {isShaking && (
        <div className="omikuji-drawing">
          <div className="shrine-animation">
            <div className="torii">⛩️</div>
            <div className="spiritual-elements">
              <div className="element spirit-1">🌸</div>
              <div className="element spirit-2">🍃</div>
              <div className="element spirit-3">✨</div>
              <div className="element spirit-4">🕊️</div>
            </div>
            <div className="falling-petals">
              <div className="petal petal-1">🌸</div>
              <div className="petal petal-2">🌸</div>
              <div className="petal petal-3">🌸</div>
              <div className="petal petal-4">🌸</div>
              <div className="petal petal-5">🌸</div>
            </div>
          </div>
          <p className="drawing-text">
            神様があなたの運勢を決めています...<br />
            <span className="sub-text">神聖な力があなたを導いています</span>
          </p>
        </div>
      )}
      
      {result && (
        <ResultCard 
          title="おみくじ結果"
          result={result}
          type="omikuji"
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
        
        .omikuji-interaction {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          margin: 2rem 0;
          padding: 1rem;
        }
        
        .omikuji-box {
          width: 100px;
          height: 130px;
          cursor: pointer;
          transition: transform 0.1s ease;
          position: relative;
          margin-bottom: 1rem;
        }
        
        .omikuji-box.shaking {
          animation: shake 0.5s ease-in-out;
        }
        
        .box-top {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
        }
        
        .box-body {
          width: 100%;
          height: 100px;
          background: linear-gradient(45deg, #8B4513, #A0522D);
          border-radius: 8px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }
        
        .sticks {
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 1px;
        }
        
        .stick {
          color: #F5DEB3;
          font-size: 1rem;
          animation: stick-rattle 0.3s ease-in-out infinite;
        }
        
        .stick-1 { animation-delay: 0s; }
        .stick-2 { animation-delay: 0.1s; }
        .stick-3 { animation-delay: 0.2s; }
        .stick-4 { animation-delay: 0.3s; }
        .stick-5 { animation-delay: 0.4s; }
        .stick-6 { animation-delay: 0.5s; }
        .stick-7 { animation-delay: 0.6s; }
        .stick-8 { animation-delay: 0.7s; }
        
        .shake-progress {
          text-align: center;
          width: 100%;
        }
        
        .shake-progress p {
          color: #4a5568;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }
        
        .progress-bar {
          width: 160px;
          height: 6px;
          background: #e2e8f0;
          border-radius: 3px;
          overflow: hidden;
          margin: 0 auto 0.5rem;
        }
        
        .progress-fill {
          height: 100%;
          background: linear-gradient(45deg, #feca57, #ff9ff3);
          transition: width 0.3s ease;
        }
        
        .shake-count {
          font-size: 0.8rem;
          color: #718096;
        }
        
        .omikuji-drawing {
          padding: 2rem 1rem;
          margin: 2rem 0;
        }
        
        .shrine-animation {
          position: relative;
          width: 200px;
          height: 150px;
          margin: 0 auto 2rem;
        }
        
        .torii {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 3rem;
          animation: sacred-glow 2s ease-in-out infinite alternate;
        }
        
        .spiritual-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .element {
          position: absolute;
          font-size: 1.2rem;
          animation: spiritual-dance 3s ease-in-out infinite;
        }
        
        .spirit-1 {
          top: 20%;
          left: 20%;
          animation-delay: 0s;
        }
        
        .spirit-2 {
          top: 20%;
          right: 20%;
          animation-delay: 0.5s;
        }
        
        .spirit-3 {
          bottom: 20%;
          left: 20%;
          animation-delay: 1s;
        }
        
        .spirit-4 {
          bottom: 20%;
          right: 20%;
          animation-delay: 1.5s;
        }
        
        .falling-petals {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        
        .petal {
          position: absolute;
          font-size: 0.8rem;
          animation: fall 4s linear infinite;
        }
        
        .petal-1 {
          left: 10%;
          animation-delay: 0s;
        }
        
        .petal-2 {
          left: 30%;
          animation-delay: 0.8s;
        }
        
        .petal-3 {
          left: 50%;
          animation-delay: 1.6s;
        }
        
        .petal-4 {
          left: 70%;
          animation-delay: 2.4s;
        }
        
        .petal-5 {
          left: 90%;
          animation-delay: 3.2s;
        }
        
        .drawing-text {
          font-size: 1rem;
          color: #4a5568;
          font-weight: bold;
        }
        
        .sub-text {
          font-size: 0.9rem;
          color: #718096;
          font-weight: normal;
          font-style: italic;
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-3px) rotate(-1deg); }
          75% { transform: translateX(3px) rotate(1deg); }
        }
        
        @keyframes stick-rattle {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-1px) rotate(1deg); }
        }
        
        @keyframes sacred-glow {
          0% { transform: translate(-50%, -50%) scale(1); filter: brightness(1); }
          100% { transform: translate(-50%, -50%) scale(1.05); filter: brightness(1.2); }
        }
        
        @keyframes spiritual-dance {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.7; }
          33% { transform: translateY(-8px) rotate(120deg); opacity: 1; }
          66% { transform: translateY(4px) rotate(240deg); opacity: 0.8; }
        }
        
        @keyframes fall {
          0% {
            transform: translateY(-15px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(165px) rotate(360deg);
            opacity: 0;
          }
        }
        `
      }} />
    </div>
  );
};

export default Omikuji;