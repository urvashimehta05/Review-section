import "./ProductHero.css";
import CounterMonthly from "../components/CounterMonthly";
const ProductHero = () => {
  return (
    <section className="product-hero">
      <div className="product-image">
        <img
          src="https://www.maskabutters.in/cdn/shop/files/1stimage_1e3b7bf3-37ad-4054-8245-4b329d9d2eeb.jpg?v=1751094997&width=493"
          alt="Maska Peanut Butter Chatpata"
        />
      </div>

      <div className="product-info">
        <h2 className="product-title">
          Maska Peanut Butter – Chatpata
        </h2>

        <p className="product-rating">
          ⭐⭐⭐⭐⭐ <span>4.8 (12,431 reviews)</span>
        </p>
         <CounterMonthly />
        <p className="product-price">₹299</p>

        <p className="product-desc">
          A bold, spicy peanut butter crafted for Indian taste buds.
          High protein, zero trans-fat, and full of flavor.
        </p>
              <div className="product-actions">
  <button className="btn btn-cart">Add to Cart</button>
  <button className="btn btn-buy">Buy Now</button>
</div>
      </div>
    </section>
  );
};

export default ProductHero;
