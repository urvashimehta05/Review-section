import "./CounterMonthly.css";
import { useEffect, useState } from "react";

const CounterMonthly = () => {
  const [soldCount, setSoldCount] = useState(0);
  const target = 280;

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 5;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      setSoldCount(current);
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rating-summary">
      {/* ⭐ Stars + rating */}
      <div className="rating-left">
        <div className="stars">★★★★★</div>
        <span className="rating-number">4.8</span>
      </div>

      <div className="rating-divider" />

      {/* Reviews */}
      <div className="rating-metric">
        <span className="metric-number">198</span>
        <span className="metric-label">Reviews</span>
      </div>

      {/* Sold This Month (animated) */}
      <div className="rating-metric highlight">
        <span className="metric-number">{soldCount} +</span>
        <span className="metric-label">Sold This Month</span>
      </div>
    </div>
  );
};

export default CounterMonthly;
