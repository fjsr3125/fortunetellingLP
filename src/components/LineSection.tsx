const LineSection = () => {
  const handleLineClick = () => {
    const lineUrl = 'https://line.me/R/ti/p/@example'; // 実際のLINE OAのIDに変更
    window.open(lineUrl, '_blank');
  };

  return (
    <section className="section line-section">
      <div className="container">
        <h2 className="section-title">📱 LINE で更に詳しい占いを受け取ろう</h2>
        
        <div className="line-benefits">
          <div className="benefit-card">
            <div className="benefit-icon">🔮</div>
            <h3>毎日の運勢</h3>
            <p>あなた専用の毎日の運勢を朝にお届け</p>
          </div>
          
          <div className="benefit-card">
            <div className="benefit-icon">💕</div>
            <h3>恋愛・相性診断</h3>
            <p>気になる人との相性や恋愛運をより詳しく診断</p>
          </div>
          
          <div className="benefit-card">
            <div className="benefit-icon">💰</div>
            <h3>金運・仕事運</h3>
            <p>お金や仕事に関する運勢とアドバイス</p>
          </div>
        </div>
        
        <div className="line-cta">
          <p className="line-cta-text">
            <strong>今だけ無料！</strong><br />
            診断結果の保存と詳細な占いをLINEで受け取れます
          </p>
          <button 
            className="btn btn-line pulse"
            onClick={handleLineClick}
          >
            🎁 LINE友だち追加で無料診断を受け取る
          </button>
          <p className="line-note">※登録は無料です。いつでも配信停止できます。</p>
        </div>
      </div>
      
      <style jsx>{`
        .line-section {
          background: linear-gradient(135deg, #00c300 0%, #00a000 100%);
          color: white;
        }
        
        .section-title {
          color: white;
        }
        
        .line-benefits {
          display: grid;
          gap: 30px;
          margin-bottom: 3rem;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }
        
        @media (min-width: 768px) {
          .line-benefits {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        .benefit-card {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 30px 20px;
          text-align: center;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .benefit-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .benefit-card h3 {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          font-weight: bold;
        }
        
        .benefit-card p {
          opacity: 0.9;
          line-height: 1.6;
        }
        
        .line-cta {
          text-align: center;
          max-width: 500px;
          margin: 0 auto;
        }
        
        .line-cta-text {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        
        .line-note {
          margin-top: 1rem;
          font-size: 0.9rem;
          opacity: 0.8;
        }
      `}</style>
    </section>
  );
};

export default LineSection;