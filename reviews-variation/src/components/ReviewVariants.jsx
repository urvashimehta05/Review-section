import { useState } from "react";
import "./ReviewVariants.css";
import TestimonialAncient from "./TestimonialAncient/TestimonialAncient.jsx";
import TestimonialModern from "./TestimonialModern/TestimonialModern.jsx";
import TestimonialMinimal from "./TestimonialMinimal/TestimonialMinimal.jsx";
import TestimonialEvergreen from "./TestimonialEvergreen/TestimonialEvergreen.jsx";
const ReviewVariants = () => {
  const [activeVariant, setActiveVariant] = useState("ancient");

  return (
    <section className="review-variants-section">
      <div className="variant-btn-group">
        <button
          className={`variant-btn ${
            activeVariant === "ancient" ? "active" : ""
          }`}
          onClick={() => setActiveVariant("ancient")}
        >
          Ancient
        </button>

        <button
          className={`variant-btn ${
            activeVariant === "modern" ? "active" : ""
          }`}
          onClick={() => setActiveVariant("modern")}
        >
          Modern
        </button>

        <button
          className={`variant-btn ${
            activeVariant === "minimalist" ? "active" : ""
          }`}
          onClick={() => setActiveVariant("minimalist")}
        >
          Minimalist
        </button>

        <button
          className={`variant-btn ${
            activeVariant === "evergreen" ? "active" : ""
          }`}
          onClick={() => setActiveVariant("evergreen")}
        >
          Evergreen
        </button>
      </div>

      <div className="variant-content reveal ancient-reveal">
        <h2 className="evergreen-heading">
  What our clients say <span>— clients are everything</span>
</h2>
        {activeVariant === "ancient" && <TestimonialAncient />}
        {activeVariant === "modern" && <TestimonialModern />}
        {activeVariant === "minimalist" && <TestimonialMinimal />}
        {activeVariant === "evergreen" && <TestimonialEvergreen /> }
      </div>
    </section>
  );
};

export default ReviewVariants;
