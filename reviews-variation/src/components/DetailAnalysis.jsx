import "./DetailAnalysis.css";
const DetailAnalysis = ({ onClose }) => {
  return (
    <div className="analysis-overlay">
      <div className="analysis-panel">
        <button className="analysis-close" onClick={onClose}>
          ✕
        </button>

        <h2 style={{textAlign:"center", padding:"10px"}}>Review Analysis</h2>

        <div className="analysis-grid">
          <div className="analysis-card">
            <h3>Overall Sentiment</h3>
            <p>
              Majority of customers highlight flavour balance, texture,
              and spice profile as key positives.
            </p>
          </div>

          <div className="analysis-card">
            <h3>Top Keywords</h3>
            <p>
              Chatpata, spicy, smooth, Indian taste, protein-rich
            </p>
          </div>

          <div className="analysis-card">
            <h3>Rating Distribution</h3>
            <p>
              78% five-star, 16% four-star, 6% below four-star
            </p>
          </div>

          <div className="analysis-card">
            <h3>Repeat Purchase Insight</h3>
            <p>
              A significant portion of reviewers are repeat buyers,
              indicating strong product satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailAnalysis;
