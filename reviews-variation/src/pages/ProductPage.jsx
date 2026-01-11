import { useState } from "react";
import Header from "../components/Header";
import HeaderBanner from "../components/HeaderBanner";
import ProductHero from "../components/ProductHero";
import ProductDescription from "../components/ProductDescription";
import ReviewVariants from "../components/ReviewVariants";
import DetailAnalysis from "../components/DetailAnalysis.jsx";
import useScrollReveal from "../hooks/useScrollReveal";
import Footer from "../components/Footer.jsx"
import "./ProductPage.css";
const ProductPage = () => {
  useScrollReveal();
  const [showAnalysis, setShowAnalysis] = useState(false);

  return (
    <div className="product-page">
      <HeaderBanner />
      <Header />

      <section className="reveal">
        <ProductHero />
      </section>

      <section className="reveal">
        <ProductDescription />
      </section>

      <section className="reveal">
        <button
          className="analysis-trigger"
          onClick={() => setShowAnalysis(true)}
        >
          View Detailed Review Analysis
        </button>
      </section>

      {showAnalysis && (
        <DetailAnalysis onClose={() => setShowAnalysis(false)} />
      )}
      <ReviewVariants />
      <Footer />
    </div>
  );
};

export default ProductPage;
