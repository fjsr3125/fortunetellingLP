import { useState } from 'react';
import ResultCard from '../ResultCard';

interface TarotProps {
  isActive: boolean;
  setActive: () => void;
}

const Tarot = ({ setActive }: TarotProps) => {
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [result, setResult] = useState<string | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [showCards, setShowCards] = useState(false);

  const tarotCards = [
    { name: '愚者', meaning: '新しい始まり、純粋さ、自由な精神があなたを導きます。今は直感を信じて行動する時です。宇宙があなたに新たな冒険への扉を開いています。恐れることなく、心の声に従って歩みを進めてください。' },
    { name: '魔術師', meaning: '創造力と意志の力で目標を達成できます。あなたには必要なすべてのツールが揃っています。天と地のエネルギーがあなたの中で調和し、望む現実を創造する力が宿っています。' },
    { name: '女教皇', meaning: '内なる知恵と直感に耳を傾けましょう。静かな時間の中に答えが見つかります。月の女神があなたの潜在意識に語りかけ、隠された真実を明らかにしようとしています。' },
    { name: '女帝', meaning: '豊かさと創造性の時期です。愛情深く、周りの人を育む力があなたにはあります。母なる大地のエネルギーがあなたを包み、すべてを豊かに実らせる力を与えています。' },
    { name: '皇帝', meaning: 'リーダーシップと安定性を発揮する時です。責任を持って物事を進めていきましょう。火のエレメントがあなたの意志力を強化し、確固たる基盤を築く力を与えています。' },
    { name: '教皇', meaning: '伝統的な価値観や教えが重要な意味を持ちます。師や先輩からの助言を求めましょう。古の知恵があなたの魂に響き、精神的な成長への道筋を示しています。' },
    { name: '恋人', meaning: '重要な選択の時です。心の声に従い、愛と調和を大切にしてください。双子座のエネルギーがあなたの人生に重要な出会いと決断をもたらそうとしています。' },
    { name: '戦車', meaning: '強い意志と決断力で困難を乗り越えられます。目標に向かって突き進みましょう。蟹座の守護のもと、感情と理性のバランスを保ちながら勝利への道を歩んでいます。' },
    { name: '力', meaning: '内なる強さと優しさのバランスが鍵です。忍耐強く、愛情を持って接しましょう。獅子座の勇気があなたの心に宿り、真の強さとは何かを教えてくれています。' },
    { name: '隠者', meaning: '内省と自己探求の時期です。一人の時間を大切にし、真の答えを見つけましょう。乙女座の慎重さと分析力があなたの内なる光を照らし、真理への道を示しています。' },
    { name: '運命の輪', meaning: '人生の転換点が訪れています。変化を受け入れ、新しい可能性に心を開きましょう。木星の拡大のエネルギーがあなたの運命の歯車を回し、新たなサイクルを始めようとしています。' },
    { name: '正義', meaning: 'バランスと公正さが重要です。正しい判断を下し、責任を持って行動しましょう。天秤座の調和のエネルギーがあなたの決断を支え、真の正義とは何かを示しています。' },
    { name: '吊られた男', meaning: '新しい視点から物事を見る時です。一時的な停滞も成長の一部です。水のエレメントがあなたに忍耐と受容の大切さを教え、内なる変化を促しています。' },
    { name: '死神', meaning: '終わりと新しい始まりの象徴です。古いものを手放し、変化を受け入れましょう。蠍座の変容のエネルギーがあなたの人生に深い変化をもたらし、真の再生へと導いています。' },
    { name: '節制', meaning: '調和とバランスが鍵となります。中庸の道を歩み、極端を避けましょう。射手座の哲学的な洞察があなたに真の調和とは何かを教え、精神的な成長を促しています。' },
    { name: '悪魔', meaning: '束縛から解放される時です。自分を制限している思い込みを手放しましょう。山羊座の現実的な力があなたに真の自由とは何かを示し、物質的な執着からの解放を促しています。' },
    { name: '塔', meaning: '突然の変化や気づきが訪れます。古い構造が崩れ、新しい基盤が築かれます。火星のエネルギーがあなたの人生に劇的な変化をもたらし、真の自分への道を開いています。' },
    { name: '星', meaning: '希望と癒しの時期です。未来への明るい展望が見えてきます。水瓶座の革新的なエネルギーがあなたに新しい可能性を示し、理想の実現への道筋を照らしています。' },
    { name: '月', meaning: '直感と潜在意識の世界に注目しましょう。隠された真実が明らかになります。魚座の神秘的な力があなたの内なる世界を照らし、深層心理からのメッセージを届けています。' },
    { name: '太陽', meaning: '成功と喜びの時期です。あなたの努力が実を結び、輝かしい未来が待っています。太陽のエネルギーがあなたの人生を照らし、すべてを明るく照らし出しています。' },
    { name: '審判', meaning: '新しい段階への移行の時です。過去を振り返り、未来への準備をしましょう。冥王星の変容の力があなたに真の覚醒をもたらし、魂のレベルでの成長を促しています。' },
    { name: '世界', meaning: '完成と達成の象徴です。一つのサイクルが終わり、新しい旅が始まります。土星の完成のエネルギーがあなたの努力を実らせ、次なる段階への扉を開いています。' }
  ];

  const startReading = () => {
    setShowCards(true);
    setActive();
  };

  const selectCard = (cardIndex: number) => {
    if (selectedCards.includes(cardIndex) || selectedCards.length >= 3) return;
    
    const newSelected = [...selectedCards, cardIndex];
    setSelectedCards(newSelected);
    
    if (newSelected.length === 3) {
      setIsDrawing(true);
      setTimeout(() => {
        const selectedCardData = newSelected.map(index => tarotCards[index]);
        const resultText = `過去: ${selectedCardData[0].name}\n現在: ${selectedCardData[1].name}\n未来: ${selectedCardData[2].name}\n\n${selectedCardData[0].meaning}\n\n${selectedCardData[1].meaning}\n\n${selectedCardData[2].meaning}`;
        setResult(resultText);
        setIsDrawing(false);
      }, 3000);
    }
  };

  return (
    <div className="card diagnosis-card">
      <div className="diagnosis-header">
        <h3>🔮 タロットカード診断</h3>
        <h4>カードに指先を添え、<br />過去・現在・未来の囁きを<br />お受け取りください。</h4>
      </div>
      
      <div className="tarot-area">
        {!showCards && !result && (
          <div className="start-reading" onClick={startReading}>
            <div className="tarot-deck">
              <div className="deck-card deck-1">🃏</div>
              <div className="deck-card deck-2">🃏</div>
              <div className="deck-card deck-3">🃏</div>
            </div>
            <p>カードを展開する</p>
          </div>
        )}
        
        {showCards && !isDrawing && !result && (
          <div className="card-selection">
            <p className="selection-guide">
              直感でカードを3枚選んでください ({selectedCards.length}/3)
            </p>
            <div className="cards-grid">
              {Array.from({ length: 22 }, (_, i) => (
                <div
                  key={i}
                  className={`selectable-card ${selectedCards.includes(i) ? 'selected' : ''}`}
                  onClick={() => selectCard(i)}
                >
                  <div className="card-back">🌟</div>
                  {selectedCards.includes(i) && (
                    <div className="selection-order">
                      {selectedCards.indexOf(i) + 1}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        
        {isDrawing && (
          <div className="card-reading">
            <div className="mystical-animation">
              <div className="selected-cards">
                <div className="reading-card past">🃏</div>
                <div className="reading-card present">🃏</div>
                <div className="reading-card future">🃏</div>
              </div>
              <div className="mystical-symbols">
                <div className="symbol symbol-1">🔮</div>
                <div className="symbol symbol-2">✨</div>
                <div className="symbol symbol-3">🌙</div>
                <div className="symbol symbol-4">⭐</div>
              </div>
            </div>
            <p className="reading-text">
              選ばれたカードが真実を語りかけています...<br />
              <span className="sub-text">時の流れを読み解いています</span>
            </p>
          </div>
        )}
      </div>
      
      {result && (
        <ResultCard 
          title="タロット診断結果"
          result={result}
          type="tarot"
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
        
        .tarot-area {
          margin: 1.5rem 0;
        }
        
        .start-reading {
          cursor: pointer;
          padding: 1.5rem;
        }
        
        .tarot-deck {
          position: relative;
          width: 100px;
          height: 150px;
          margin: 0 auto 1rem;
        }
        
        .deck-card {
          position: absolute;
          width: 80px;
          height: 120px;
          background: linear-gradient(45deg, #667eea, #764ba2);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: white;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease;
        }
        
        .deck-1 {
          top: 0;
          left: 0;
          z-index: 3;
          transform: rotate(-5deg);
        }
        
        .deck-2 {
          top: 5px;
          left: 10px;
          z-index: 2;
          transform: rotate(0deg);
        }
        
        .deck-3 {
          top: 10px;
          left: 20px;
          z-index: 1;
          transform: rotate(5deg);
        }
        
        .start-reading:hover .deck-1 {
          transform: rotate(-10deg) translateY(-5px);
        }
        
        .start-reading:hover .deck-2 {
          transform: rotate(0deg) translateY(-3px);
        }
        
        .start-reading:hover .deck-3 {
          transform: rotate(10deg) translateY(-1px);
        }
        
        .start-reading p {
          font-weight: bold;
          color: #4a5568;
          font-size: 1rem;
        }
        
        .card-selection {
          padding: 1rem;
        }
        
        .selection-guide {
          font-size: 0.9rem;
          font-weight: bold;
          color: #4a5568;
          margin-bottom: 1.5rem;
        }
        
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(45px, 1fr));
          gap: 8px;
          max-width: 280px;
          margin: 0 auto;
        }
        
        .selectable-card {
          position: relative;
          width: 45px;
          height: 70px;
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        
        .selectable-card:hover {
          transform: translateY(-3px);
        }
        
        .selectable-card.selected {
          transform: translateY(-8px) scale(1.1);
        }
        
        .card-back {
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, #667eea, #764ba2);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          color: white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }
        
        .selection-order {
          position: absolute;
          top: -5px;
          right: -5px;
          width: 18px;
          height: 18px;
          background: #ff6b6b;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: bold;
        }
        
        .card-reading {
          padding: 1.5rem;
        }
        
        .mystical-animation {
          position: relative;
          width: 250px;
          height: 150px;
          margin: 0 auto 2rem;
        }
        
        .selected-cards {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100%;
        }
        
        .reading-card {
          width: 60px;
          height: 90px;
          background: linear-gradient(45deg, #667eea, #764ba2);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: white;
          animation: card-reveal 2s ease-in-out infinite;
        }
        
        .past { animation-delay: 0s; }
        .present { animation-delay: 0.5s; }
        .future { animation-delay: 1s; }
        
        .mystical-symbols {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        
        .symbol {
          position: absolute;
          font-size: 1.2rem;
          animation: mystical-float 3s ease-in-out infinite;
        }
        
        .symbol-1 {
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }
        
        .symbol-2 {
          top: 10%;
          right: 10%;
          animation-delay: 0.5s;
        }
        
        .symbol-3 {
          bottom: 10%;
          left: 10%;
          animation-delay: 1s;
        }
        
        .symbol-4 {
          bottom: 10%;
          right: 10%;
          animation-delay: 1.5s;
        }
        
        .reading-text {
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
        
        @keyframes card-reveal {
          0%, 100% { transform: rotateY(0deg) scale(1); }
          50% { transform: rotateY(10deg) scale(1.05); }
        }
        
        @keyframes mystical-float {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.7; }
          50% { transform: translateY(-10px) scale(1.1); opacity: 1; }
        }
        `
      }} />
    </div>
  );
};

export default Tarot;