const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>占い診断サイト</h4>
            <p>生年月日とタップだけで、あなたの運命を無料診断</p>
          </div>
          
          <div className="footer-section">
            <h4>診断メニュー</h4>
            <ul>
              <li>四柱推命診断</li>
              <li>タロット占い</li>
              <li>手相診断</li>
              <li>おみくじ</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>お問い合わせ</h4>
            <ul>
              <li><a href="#privacy">プライバシーポリシー</a></li>
              <li><a href="#terms">利用規約</a></li>
              <li><a href="#contact">お問い合わせ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-disclaimer">
          <p>
            ※本サイトの占い結果は娯楽目的であり、人生の重要な決断の根拠とすることはお控えください。<br />
            ※占い結果による損害について、当サイトは一切の責任を負いません。
          </p>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 占い診断サイト. All rights reserved.</p>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
        .footer {
          background: #2d3748;
          color: white;
          padding: 40px 0 20px;
        }
        
        .footer-content {
          display: grid;
          gap: 30px;
          margin-bottom: 30px;
        }
        
        @media (min-width: 768px) {
          .footer-content {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        .footer-section h4 {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          color: #e2e8f0;
        }
        
        .footer-section p {
          color: #a0aec0;
          line-height: 1.6;
        }
        
        .footer-section ul {
          list-style: none;
        }
        
        .footer-section li {
          margin-bottom: 0.5rem;
        }
        
        .footer-section a {
          color: #a0aec0;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .footer-section a:hover {
          color: #e2e8f0;
        }
        
        .footer-disclaimer {
          border-top: 1px solid #4a5568;
          padding-top: 20px;
          margin-bottom: 20px;
        }
        
        .footer-disclaimer p {
          font-size: 0.8rem;
          color: #a0aec0;
          line-height: 1.5;
          text-align: center;
        }
        
        .footer-bottom {
          text-align: center;
          border-top: 1px solid #4a5568;
          padding-top: 20px;
        }
        
        .footer-bottom p {
          font-size: 0.9rem;
          color: #a0aec0;
        }
        `
      }} />
    </footer>
  );
};

export default Footer;