interface ResultCardProps {
  title: string;
  result: string;
  type: string;
}

const ResultCard = ({ title, result }: ResultCardProps) => {
  const handleMoreDetails = () => {
    // LINE登録へ誘導
    const lineUrl = 'https://lin.ee/yNBRMCa';
    window.open(lineUrl, '_blank');
    
    // GA4イベント送信（実装時に有効化）
    // gtag('event', 'line_click', {
    //   diagnosis_type: type,
    //   event_category: 'engagement',
    //   event_label: 'line_registration'
    // });
  };

  return (
    <div className="result-card fade-in-up">
      <h4 className="result-title">{title}</h4>
      <div className="result-content">
        {result.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      
      <div className="result-actions">
        <button 
          className="btn btn-primary"
          onClick={handleMoreDetails}
        >
          📱 詳しく知るにはここから
        </button>
      </div>
      
      <style jsx>{`
        .result-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 20px;
          padding: 25px;
          margin-top: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        
        .result-title {
          font-size: 1.3rem;
          font-weight: bold;
          margin-bottom: 1rem;
          text-align: center;
        }
        
        .result-content {
          margin-bottom: 1.5rem;
          line-height: 1.7;
        }
        
        .result-content p {
          margin-bottom: 0.8rem;
        }
        
        .result-content p:first-child {
          font-weight: bold;
          font-size: 1.1rem;
          color: #ffd700;
        }
        
        .result-actions {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default ResultCard;