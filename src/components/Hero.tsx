interface HeroProps {
  onStartDiagnosis: () => void;
}

const Hero = ({ onStartDiagnosis }: HeroProps) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-image">
          <img 
            src="/src/assets/914cc3c2-06c6-4ed6-a1f7-b01bd13121a1.png"
            alt="占い師ハレルヤ"
            loading="eager"
          />
        </div>
        <div className="hero-text">
          <h1 className="hero-title">
            🌌 わたくしハレルヤ、<br />
            <span className="text-gradient">あなたの魂の波動を静かに映し出します</span>
          </h1>
          <div className="hero-subtitle">
            <p>
              占いは気まぐれな遊戯ではございません。<br />
              魂が本質へ還るための入口でございます。
            </p>
            <p>
              四柱推命・タロット・手相・おみくじ──<br />
              四つの鏡で、今ここに降り立つあなたの運命を無料で紐解きましょう。
            </p>
          </div>
          <button 
            className="btn btn-primary pulse"
            onClick={onStartDiagnosis}
          >
            🔮 今すぐ無料で占う
          </button>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          text-align: center;
          padding: 20px;
        }
        
        .hero-content {
          max-width: 600px;
          margin: 0 auto;
        }
        
        .hero-image {
          margin-bottom: 2rem;
        }
        
        .hero-image img {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        
        .hero-title {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          line-height: 1.2;
          text-wrap: balance;
        }
        
        .text-gradient {
          background: linear-gradient(90deg, #ff7b47 0%, #ff3d68 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-subtitle {
          font-size: 1.2rem;
          margin-bottom: 2.5rem;
          opacity: 0.9;
          line-height: 1.6;
        }
        
        .hero-subtitle p {
          margin-bottom: 1.2rem;
        }
        
        .hero-subtitle p:last-child {
          margin-bottom: 0;
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .hero-subtitle {
            font-size: 1.1rem;
          }
          
          .hero-image img {
            width: 150px;
            height: 150px;
          }
        }
        `
      }} />
    </section>
  );
};

export default Hero;