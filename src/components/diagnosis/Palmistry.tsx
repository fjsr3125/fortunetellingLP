import React from 'react';
import ResultCard from '../ResultCard';

interface PalmistryProps {
  isActive: boolean;
  setActive: () => void;
}

const Palmistry = ({ setActive }: PalmistryProps) => {
  const [uploadedImage, setUploadedImage] = React.useState<string | null>(null);
  const [result, setResult] = React.useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = React.useState(false);
  const [dragOver, setDragOver] = React.useState(false);

  const palmResults = [
    {
      type: '創造者の手相',
      result: '長寿と健康運に恵まれています。エネルギッシュで活力に満ち、困難にも負けない強い生命力を持っています。今は健康管理に気を配りながら、新しいことにチャレンジする絶好の時期です。あなたの手には創造の力が宿っており、芸術的な才能や独創的なアイデアを生み出す能力があります。'
    },
    {
      type: '調和者の手相',
      result: '集中力が高く、短期間で大きな成果を上げる力があります。効率的に物事を進める才能に恵まれています。今は時間を有効活用し、重要なことに集中することで成功を掴めるでしょう。あなたの手相は人と人をつなぐ調和の力を示しており、周りの人の気持ちを理解し、バランスを取ることが得意です。'
    },
    {
      type: '挑戦者の手相',
      result: '豊かな感情と愛情深さを持っています。人との絆を大切にし、深い関係を築くことができます。今は恋愛運が上昇中。新しい出会いや既存の関係の発展が期待できます。あなたの手相は困難に立ち向かう勇気と行動力を表しており、目標に向かって一直線に進む力があります。'
    },
    {
      type: '賢者の手相',
      result: '優れた知性と分析力を持っています。論理的思考が得意で、複雑な問題も冷静に解決できます。今は学習や研究に最適な時期。新しい知識を身につけることで、将来への扉が開かれるでしょう。あなたの手相は深い洞察力と知恵を示しており、物事の本質を見抜き、的確な判断ができる人です。'
    }
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragOver(false);
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      processFile(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragOver(false);
  };

  const processFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setUploadedImage(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const analyzePalm = () => {
    if (!uploadedImage) return;
    
    setIsAnalyzing(true);
    setActive();
    
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * palmResults.length);
      const selectedResult = palmResults[randomIndex];
      setResult(`${selectedResult.type}\n\n${selectedResult.result}`);
      setIsAnalyzing(false);
    }, 3000);
  };

  return (
    <div className="card diagnosis-card">
      <div className="diagnosis-header">
        <h3>🤲 手相診断</h3>
        <h4>手のひらの線が語る<br />霊的メッセージを<br />紐解きます。</h4>
      </div>
      
      {!result && !isAnalyzing && (
        <div className="upload-area">
          {!uploadedImage ? (
            <div 
              className={`upload-zone ${dragOver ? 'drag-over' : ''}`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="file-input"
                id="palm-upload"
              />
              <label htmlFor="palm-upload" className="upload-label">
                <div className="upload-animation">
                  <div className="hand-icon">✋</div>
                  <div className="scan-line"></div>
                </div>
                <div className="upload-content">
                  <p className="upload-title">手相写真をアップロード</p>
                  <span className="upload-hint">
                    タップして写真を選択<br />
                    またはドラッグ&ドロップ
                  </span>
                </div>
              </label>
            </div>
          ) : (
            <div className="uploaded-preview">
              <div className="image-container">
                <img src={uploadedImage} alt="アップロードされた手相" />
                <div className="analysis-overlay">
                  <div className="scan-grid">
                    {Array.from({ length: 16 }, (_, i) => (
                      <div key={i} className={`grid-cell cell-${i + 1}`}></div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="preview-actions">
                <button className="btn btn-primary" onClick={analyzePalm}>
                  🔮 手相を診断する
                </button>
                <button 
                  className="btn-secondary" 
                  onClick={() => setUploadedImage(null)}
                >
                  📷 写真を変更
                </button>
              </div>
            </div>
          )}
        </div>
      )}
      
      {isAnalyzing && (
        <div className="analyzing-state">
          <div className="analyzing-animation">
            <div className="crystal-ball">🔮</div>
            <div className="energy-field">
              <div className="energy-ring ring-1"></div>
              <div className="energy-ring ring-2"></div>
              <div className="energy-ring ring-3"></div>
            </div>
            <div className="palm-lines">
              <div className="line life-line"></div>
              <div className="line heart-line"></div>
              <div className="line head-line"></div>
              <div className="line fate-line"></div>
            </div>
            <div className="mystical-symbols">
              <div className="symbol symbol-1">🌟</div>
              <div className="symbol symbol-2">✨</div>
              <div className="symbol symbol-3">💫</div>
              <div className="symbol symbol-4">🔯</div>
            </div>
          </div>
          <p className="analyzing-text">
            あなたの手相を深く読み取っています...<br />
            <span className="sub-text">波動の鼓動を感じ取っています</span>
          </p>
        </div>
      )}
      
      {result && (
        <ResultCard 
          title="手相診断結果"
          result={result}
          type="palmistry"
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
        
        .upload-area {
          margin: 1.5rem 0;
        }
        
        .upload-zone {
          position: relative;
          border: 2px dashed #cbd5e0;
          border-radius: 15px;
          padding: 30px 15px;
          transition: all 0.3s ease;
          cursor: pointer;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(255, 255, 255, 0.1));
        }
        
        .upload-zone:hover,
        .upload-zone.drag-over {
          border-color: #667eea;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(255, 255, 255, 0.2));
          transform: translateY(-2px);
        }
        
        .file-input {
          position: absolute;
          opacity: 0;
          width: 100%;
          height: 100%;
          cursor: pointer;
          top: 0;
          left: 0;
        }
        
        .upload-label {
          cursor: pointer;
          display: block;
          position: relative;
        }
        
        .upload-animation {
          position: relative;
          margin-bottom: 1rem;
        }
        
        .hand-icon {
          font-size: 3rem;
          animation: hand-wave 2s ease-in-out infinite;
        }
        
        .scan-line {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #667eea, transparent);
          animation: scan 2s ease-in-out infinite;
        }
        
        .upload-content {
          margin-top: 1rem;
        }
        
        .upload-title {
          font-size: 1rem;
          font-weight: bold;
          color: #4a5568;
          margin-bottom: 0.5rem;
        }
        
        .upload-hint {
          font-size: 0.8rem;
          color: #718096;
          line-height: 1.4;
        }
        
        .uploaded-preview {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
        }
        
        .image-container {
          position: relative;
          max-width: 200px;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }
        
        .image-container img {
          width: 100%;
          height: auto;
          display: block;
        }
        
        .analysis-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(102, 126, 234, 0.1);
          pointer-events: none;
        }
        
        .scan-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(4, 1fr);
          width: 100%;
          height: 100%;
        }
        
        .grid-cell {
          border: 1px solid rgba(102, 126, 234, 0.3);
          animation: grid-pulse 2s ease-in-out infinite;
        }
        
        .cell-1 { animation-delay: 0s; }
        .cell-2 { animation-delay: 0.1s; }
        .cell-3 { animation-delay: 0.2s; }
        .cell-4 { animation-delay: 0.3s; }
        .cell-5 { animation-delay: 0.4s; }
        .cell-6 { animation-delay: 0.5s; }
        .cell-7 { animation-delay: 0.6s; }
        .cell-8 { animation-delay: 0.7s; }
        .cell-9 { animation-delay: 0.8s; }
        .cell-10 { animation-delay: 0.9s; }
        .cell-11 { animation-delay: 1s; }
        .cell-12 { animation-delay: 1.1s; }
        .cell-13 { animation-delay: 1.2s; }
        .cell-14 { animation-delay: 1.3s; }
        .cell-15 { animation-delay: 1.4s; }
        .cell-16 { animation-delay: 1.5s; }
        
        .preview-actions {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: center;
        }
        
        .btn-secondary {
          background: #e2e8f0;
          color: #4a5568;
          border: none;
          padding: 8px 16px;
          border-radius: 20px;
          cursor: pointer;
          font-size: 12px;
          transition: all 0.3s ease;
        }
        
        .btn-secondary:hover {
          background: #cbd5e0;
          transform: translateY(-1px);
        }
        
        .analyzing-state {
          padding: 2rem 1rem;
          text-align: center;
        }
        
        .analyzing-animation {
          position: relative;
          width: 250px;
          height: 250px;
          margin: 0 auto 2rem;
        }
        
        .crystal-ball {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 3rem;
          animation: crystal-float 3s ease-in-out infinite;
          z-index: 10;
        }
        
        .energy-field {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        
        .energy-ring {
          position: absolute;
          border: 2px solid rgba(102, 126, 234, 0.4);
          border-radius: 50%;
          animation: energy-pulse 2s ease-in-out infinite;
        }
        
        .ring-1 {
          width: 80px;
          height: 80px;
          margin: -40px 0 0 -40px;
          animation-delay: 0s;
        }
        
        .ring-2 {
          width: 120px;
          height: 120px;
          margin: -60px 0 0 -60px;
          animation-delay: 0.5s;
        }
        
        .ring-3 {
          width: 160px;
          height: 160px;
          margin: -80px 0 0 -80px;
          animation-delay: 1s;
        }
        
        .palm-lines {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        
        .line {
          position: absolute;
          background: linear-gradient(45deg, rgba(255, 215, 0, 0.6), rgba(255, 255, 255, 0.3));
          border-radius: 2px;
          animation: line-trace 4s ease-in-out infinite;
        }
        
        .life-line {
          width: 60px;
          height: 2px;
          top: -15px;
          left: -30px;
          transform: rotate(30deg);
          animation-delay: 0s;
        }
        
        .heart-line {
          width: 50px;
          height: 2px;
          top: -8px;
          left: -25px;
          transform: rotate(-15deg);
          animation-delay: 1s;
        }
        
        .head-line {
          width: 55px;
          height: 2px;
          top: 3px;
          left: -27px;
          transform: rotate(10deg);
          animation-delay: 2s;
        }
        
        .fate-line {
          width: 45px;
          height: 2px;
          top: 12px;
          left: -22px;
          transform: rotate(-45deg);
          animation-delay: 3s;
        }
        
        .mystical-symbols {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .symbol {
          position: absolute;
          font-size: 1.2rem;
          animation: symbol-dance 3s ease-in-out infinite;
        }
        
        .symbol-1 {
          top: 15%;
          left: 15%;
          animation-delay: 0s;
        }
        
        .symbol-2 {
          top: 15%;
          right: 15%;
          animation-delay: 0.5s;
        }
        
        .symbol-3 {
          bottom: 15%;
          left: 15%;
          animation-delay: 1s;
        }
        
        .symbol-4 {
          bottom: 15%;
          right: 15%;
          animation-delay: 1.5s;
        }
        
        .analyzing-text {
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
        
        @keyframes hand-wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(8deg); }
          75% { transform: rotate(-8deg); }
        }
        
        @keyframes scan {
          0%, 100% { opacity: 0; transform: translate(-50%, -50%) scaleX(0); }
          50% { opacity: 1; transform: translate(-50%, -50%) scaleX(1); }
        }
        
        @keyframes grid-pulse {
          0%, 100% { background: rgba(102, 126, 234, 0.1); }
          50% { background: rgba(102, 126, 234, 0.3); }
        }
        
        @keyframes crystal-float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px) scale(1); }
          50% { transform: translate(-50%, -50%) translateY(-8px) scale(1.05); }
        }
        
        @keyframes energy-pulse {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(1.2); opacity: 0; }
        }
        
        @keyframes line-trace {
          0%, 100% { opacity: 0.3; transform: scaleX(0.5); }
          50% { opacity: 1; transform: scaleX(1); }
        }
        
        @keyframes symbol-dance {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.7; }
          33% { transform: translateY(-6px) rotate(120deg); opacity: 1; }
          66% { transform: translateY(3px) rotate(240deg); opacity: 0.8; }
        }
        `
      }} />
    </div>
  );
};

export default Palmistry;